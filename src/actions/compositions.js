import { API_URL } from "./../constants";
import axios from "axios";

export function compositionsHasErrored(bool) {
  return {
    type: "ITEMS_HAS_ERRORED",
    hasErrored: bool
  };
}

export function compositionsIsLoading(bool) {
  return {
    type: "ITEMS_IS_LOADING",
    isLoading: bool
  };
}

export function compositionsFetchDataSuccess(items) {
  return {
    type: "ITEMS_FETCH_DATA_SUCCESS",
    payload: items
  };
}

export function getPostByIdSuccess(post) {
  return {
    type: "GET_POST_BY_ID",
    payload: post
  };
}

export function compositionsFetchData() {
  return dispatch => {
    dispatch(compositionsIsLoading(true));

    return fetch(`${API_URL}/compositions`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(compositionsIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(compositionsFetchDataSuccess(items)))
      .catch(() => dispatch(compositionsHasErrored(true)));
  };
}

export const removeComposition = id => {
  return dispatch => {
    return axios
      .delete(`${API_URL}/compositions/${id}`)
      .then(() => {
        console.log(`Item with id ${id} was deleted`);
      })
      .catch(err => {
        console.error(`removeComposition function: ${err}`);
      });
  };
};

export const getCompositionById = id => {
  console.log(id);
  return dispatch => {
    return axios
      .get(`${API_URL}/compositions/${id}`)
      .then(response => {
        console.log(response.data);
        if (response.statusText !== "OK") {
          throw Error("Fucking Error", response.statusText);
        }
        dispatch(getPostByIdSuccess(response.data));
      })
      .catch(err => {
        console.error(`removeComposition function: ${err}`);
      });
  };
};
