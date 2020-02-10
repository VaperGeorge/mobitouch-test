import React from "react";
import { SectionHeader, AddNewComposition } from "./../index";
import { Section } from "./Compositions.styles";
import { connect } from 'react-redux';
import { compositionsFetchData, removeComposition, getCompositionById } from '../../actions/compositions';
import CompositionItem from "./CompositionItem";

let title = " latter compositions";
let desc = "<It's Time> was released as the lead single from Continued Silence and It's Time, both extended plays preceding Night Visions' release.";

class CompositionsList extends React.Component {

  state = {
    showModal: false,
    edditedItem: {}
  }

  componentDidMount() {
    this.props.fetchCompositions()
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
    this.toggleModalShow();
    this.props.getCompositionById(id).then((item) => {
      this.setState(() => ({
        edditedItem: item
      }))
      console.log(item)
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

            <ul className="compositions">
              {this.props.items.map((item, idx) => (
                <CompositionItem item={item} key={idx} deletePost={this.deletePost} editPost={this.editPost} />
              ))}
            </ul>
            <div className="button-wrapper">
              <button className="add-new" onClick={() => this.toggleModalShow()}>Add new Composition</button>
            </div>
          </div>
          <AddNewComposition
            edditedItem={this.state.edditedItem}
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