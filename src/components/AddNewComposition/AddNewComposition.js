import React from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { addComposititon } from "../../actions/addComposition";
import { compositionsFetchData, editCompositionById, clearCompositionDetails } from "../../actions/compositions";
import { FormContent } from "./AddNewComposition.styles"
import { renderTextarea, renderField, renderDatePicker } from "../../form/formFields";
import { validate } from './../../form/formValidation'
import Moment from 'react-moment';

class AddNewComposition extends React.Component {

  state = {
    step: 1
  }

  goToStep(new_step) {
    this.setState(() => ({
      step: new_step
    }))
  }


  addNewComposition = (vals) => {
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

  editComposition = (vals) => {
    this.props.onEditComposition(vals).then(() => {

      this.props.onHide(this.props.show === !this.props.show);

      let wait = setTimeout(() => {
        clearTimeout(wait);
        this.props.compositionsFetchData();
        this.props.destroy("add_new_composition");
        this.goToStep(1)
      }, 400)
    });
  }

  submitForm = vals => {
    if (this.state.step === 1) {
      this.goToStep(2);
      return;
    }

    if (this.state.step === 2 && this.props.isItemEdit) {
      this.editComposition(vals);
    } else {
      this.addNewComposition(vals);
    }
  };

  render() {
    const { onHide, show, handleSubmit, pristine, submitting, formValues, clearCompositionDetails, dispatch } = this.props;
    return (
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={() => { onHide(show === !show); dispatch(clearCompositionDetails()) }}
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
                  // onClick={() => this.goToStep(2)}
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
                    <p><span>YouTube ID: </span> {formValues.youtube_id}</p>
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


const selector = formValueSelector('add_new_composition')

const mapStateToProps = state => {
  const { date, title, author, youtube_id, itunes_url, description } = selector(state, 'date', 'title', 'author', 'youtube_id', 'itunes_url', 'description')
  return {
    isLoading: state.compositions.isLoading,
    hasErrored: state.compositions.hasErrored,
    initialValues: state.compositions.compositionDetails,
    formValues: {
      date,
      title,
      author,
      youtube_id,
      itunes_url,
      description
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearCompositionDetails: () => dispatch(clearCompositionDetails()),
    onEditComposition: id => dispatch(editCompositionById(id)),
    onAddComposition: data => dispatch(addComposititon(data)),
    compositionsFetchData: () => dispatch(compositionsFetchData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(reduxForm({
  form: "add_new_composition",
  enableReinitialize: true,
  validate,
})(AddNewComposition));
