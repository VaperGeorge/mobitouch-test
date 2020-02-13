import React, { useState, useEffect } from "react";
import { SectionHeader, AddNewComposition } from "./../index";
import {
  Section,
  AddNewButtonWrapper,
  CompositionList
} from "./Compositions.styles";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import {
  compositionsFetchData,
  removeComposition,
  getCompositionById
} from "../../actions/compositions";
import CompositionItem from "./CompositionItem";

let title = " latter compositions";
let desc =
  "<It's Time> was released as the lead single from Continued Silence and It's Time, both extended plays preceding Night Visions' release.";

const CompositionsList = props => {
  const [showModal, setshowModal] = useState(false);
  const [isItemEdit, setisItemEdit] = useState(false);

  const { items, hasErrored, isLoading } = useSelector(
    state => ({
      items: state.compositions.compositions,
      hasErrored: state.compositions.itemsHasErrored,
      isLoading: state.compositions.itemsIsLoading
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(compositionsFetchData());
  }, [props, dispatch]);

  const addNewPost = () => {
    setisItemEdit(false);
    toggleModalShow();
  };

  const toggleModalShow = () => {
    setshowModal(!showModal);
  };

  const deletePost = id => {
    dispatch(removeComposition(id)).then(() => {
      dispatch(compositionsFetchData());
    });
  };

  const editPost = id => {
    toggleModalShow();
    dispatch(getCompositionById(id)).then(item => {
      setisItemEdit(true);
    });
  };

  if (hasErrored) {
    return (
      <Section>
        <div className="container">
          <SectionHeader title={title} desc={desc} />

          <p>Sorry! There was an error loading the items</p>
        </div>
      </Section>
    );
  }
  if (isLoading) {
    return (
      <Section>
        <div className="container">
          <SectionHeader title={title} desc={desc} />

          <p>Loading compositions...</p>
        </div>
      </Section>
    );
  }
  if (items) {
    return (
      <Section>
        <div className="container">
          <SectionHeader title={title} desc={desc} />

          <CompositionList>
            {items.map((item, idx) => (
              <CompositionItem
                item={item}
                key={idx}
                deletePost={deletePost}
                editPost={editPost}
              />
            ))}
          </CompositionList>
          <AddNewButtonWrapper>
            <button onClick={() => addNewPost()}>Add new Composition</button>
          </AddNewButtonWrapper>
        </div>
        <AddNewComposition
          isItemEdit={isItemEdit}
          show={showModal}
          onHide={() => toggleModalShow()}
        />
      </Section>
    );
  }
};

export default CompositionsList;
