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

export function clearCompositionDetails() {
  return {
    type: "CLEAR_COMPOSITION_DETAILS"
  };
}

export const compositionsFetchData = () => dispatch => {
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

export const removeComposition = id => dispatch => {
  return axios
    .delete(`${API_URL}/compositions/${id}`)
    .then(() => {
      console.log(`Item with id ${id} was deleted`);
    })
    .catch(err => {
      console.error(`removeComposition function: ${err}`);
    });
};

export const getCompositionById = id => dispatch => {
  return axios
    .get(`${API_URL}/compositions/${id}`)
    .then(response => {
      if (response.statusText !== "OK") {
        throw Error("Fucking Error", response.statusText);
      }
      dispatch({
        type: "GET_POST_BY_ID",
        payload: response.data
      });
    })
    .catch(err => {
      console.error(`removeComposition function: ${err}`);
    });
};

export const editCompositionById = item => dispatch => {
  return axios
    .put(`${API_URL}/compositions/${item.id}`, item)
    .then(response => {
      if (response.statusText !== "OK") {
        throw Error("Fucking Error", response.statusText);
      }
      dispatch({
        type: "EDIT_POST_BY_ID",
        payload: response.data
      });
    })
    .catch(err => {
      console.error(`editCompositionById function: ${err}`);
    });
};
