import React from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { addComposititon } from "../../actions/addComposition";
import { compositionsFetchData } from "../../actions/compositions";
import { FormContent } from "./AddNewComposition.styles"
import { renderTextarea, renderField, renderDatePicker } from "../../form-fields/formFields";
import isUrl from "is-url";
import Moment from 'react-moment';

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  }
  if (!values.autor) {
    errors.autor = "Required";
  }
  if (!values.youtube_id) {
    errors.youtube_id = "Required";
  } else if (!isUrl(values.youtube_id)) {
    errors.youtube_id = "You must enter a valid URL from iTunes";
  }
  if (!values.itunes_url) {
    errors.itunes_url = "Required";
  } else if (!isUrl(values.itunes_url)) {
    errors.itunes_url = "You must enter a valid URL from YouTube";
  }
  if (!values.description) {
    errors.description = "Required";
  }
  return errors;
};

class AddNewComposition extends React.Component {

  state = {
    step: 1
  }

  goToStep(new_step) {
    this.setState(() => ({
      step: new_step
    }))
  }

  submitForm = vals => {
    this.goToStep(2);

    if (this.state.step === 2) {
      this.props.onAddComposition(vals).then(() => {
        this.props.onHide(this.props.show === !this.props.show);

        let wait = setTimeout(() => {
          clearTimeout(wait);
          this.props.compositionsFetchData();
          this.props.destroy("add_new_composition");
          this.goToStep(1)
        }, 400)
      });
    }
  };

  render() {
    const { onHide, show, handleSubmit, pristine, submitting, formValues } = this.props;

    return (
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={() => onHide(show === !show)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new composition</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {(() => {
            if (this.state.step === 1) {
              return (
                <form onSubmit={handleSubmit(this.submitForm)}>
                  <Field
                    name="date"
                    component={renderDatePicker}
                    label="Created date"
                  />
                  <Field
                    name="title"
                    type="text"
                    component={renderField}
                    label="Composition Title"
                  />
                  <Field
                    name="author"
                    component={renderField}
                    type="text"
                    label="Autor of song"
                  />
                  <Field
                    name="youtube_id"
                    component={renderField}
                    type="text"
                    label="Video Youtube ID"
                  />
                  <Field
                    name="itunes_url"
                    component={renderField}
                    type="text"
                    label="Song iTunes URL"
                  />
                  <Field
                    name="description"
                    component={renderTextarea}
                    label="Composition Description"
                  />
                  <Button
                    variant="primary"
                    disabled={submitting || pristine}
                    type="submit"
                  >
                    Go next
                </Button>
                </form>
              )
            } else if (this.state.step === 2) {
              return (
                <div>
                  <FormContent>
                    <span className="date">
                      <Moment format="DD.MM.YYYY" date={formValues.date} />
                    </span>
                    <span className="author">{formValues.author}</span>
                    <h3 className="title">{formValues.title}</h3>
                    <p><span>YouTube URL: </span> {formValues.youtube_id}</p>
                    <p><span>iTunes URL: </span> {formValues.itunes_url}</p>
                    <p><span>Description: </span> {formValues.description}</p>
                  </FormContent>
                  <Button
                    variant="secondary"
                    disabled={submitting || pristine}
                    type="submit"
                    className="mr-2"
                    onClick={() => this.goToStep(1)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit(this.submitForm)}
                  >
                    Save post
                </Button>
                </div>
              )
            }
          })()}
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    edditingComposition : state.getPostById.compositionDetails,
    composition: state.addNewComposition.compositions,
    isLoading: state.addNewComposition.isLoading,
    hasErrored: state.addNewComposition.hasErrored
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddComposition: data => dispatch(addComposititon(data)),
    compositionsFetchData: () => dispatch(compositionsFetchData())
  };
};

AddNewComposition = reduxForm({
  form: "add_new_composition",
  enableReinitialize: true,
  validate
})(AddNewComposition);

// Decorate with connect to read form values
const selector = formValueSelector('add_new_composition')
AddNewComposition = connect(
  state => {
    const { date, title, author, youtube_id, itunes_url, description } = selector(state, 'date', 'title', 'author', 'youtube_id', 'itunes_url', 'description')
    return {
      formValues: {
        date,
        title,
        author,
        youtube_id,
        itunes_url,
        description
      }
    }
  },
  // { load: this.state.edditingComposition }
)(AddNewComposition)

export default connect(mapStateToProps, mapDispatchToProps)(AddNewComposition);
