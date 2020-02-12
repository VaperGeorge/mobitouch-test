import React from "react";
import { SectionHeader, AddNewComposition } from "./../index";
import { Section, AddNewButtonWrapper, CompositionList } from "./Compositions.styles";
import { connect } from 'react-redux';
import { compositionsFetchData, removeComposition, getCompositionById } from '../../actions/compositions';
import CompositionItem from "./CompositionItem";

let title = " latter compositions";
let desc = "<It's Time> was released as the lead single from Continued Silence and It's Time, both extended plays preceding Night Visions' release.";

class CompositionsList extends React.Component {

  state = {
    showModal: false,
    isItemEdit: false
  }

  componentDidMount() {
    this.props.fetchCompositions()
  }

  addNewPost = () => {
    this.setState(() => ({
      isItemEdit: false
    }))
    this.toggleModalShow();
  }

  toggleModalShow() {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }))
  }

  deletePost = (id) => {
    this.props.deleteComposition(id).then(() => {
      this.props.fetchCompositions()
    })
  }

  editPost = (id) => {
    console.log(id)
    this.toggleModalShow();
    this.props.getCompositionById(id).then((item) => {
      this.setState(() => ({
        isItemEdit: true
      }))
    })
  }

  render() {
    if (this.props.hasErrored) {
      return (
        <Section>
          <div className="container">

            <SectionHeader title={title} desc={desc} />

            <p>Sorry! There was an error loading the items</p>
          </div>
        </Section>
      )
    }
    if (this.props.isLoading) {
      return (
        <Section>
          <div className="container">

            <SectionHeader title={title} desc={desc} />

            <p>Loading compositions...</p>
          </div>
        </Section>
      )
    }
    if (this.props.items) {
      return (
        <Section>
          <div className="container">

            <SectionHeader title={title} desc={desc} />

            <CompositionList>
              {this.props.items.map((item, idx) => (
                <CompositionItem item={item} key={idx} deletePost={this.deletePost} editPost={this.editPost} />
              ))}
            </CompositionList>
            <AddNewButtonWrapper>
              <button onClick={() => this.addNewPost()}>Add new Composition</button>
            </AddNewButtonWrapper>
          </div>
          <AddNewComposition
            isItemEdit={this.state.isItemEdit}
            show={this.state.showModal}
            onHide={() => this.toggleModalShow()} />
        </Section>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.compositions.compositions,
    hasErrored: state.compositions.itemsHasErrored,
    isLoading: state.compositions.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteComposition: id => dispatch(removeComposition(id)),
    fetchCompositions: () => dispatch(compositionsFetchData()),
    getCompositionById: id => dispatch(getCompositionById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompositionsList);