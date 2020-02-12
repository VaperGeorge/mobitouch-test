import { API_URL } from "./../constants";
import axios from "axios";

export function addCompositionSuccess(data) {
  return {
    type: "ADD_COMPOSITION_SUCCESS",
    payload: {
      ...data
    }
  };
}

export function addCompositionLoading(bool) {
  return {
    type: "ADD_COMPOSITION_STARTED",
    isLoading: bool
  };
}

export function addCompositionFailure(error) {
  return {
    type: "ADD_COMPOSITION_FAILURE",
    hasErrored: error
  };
}

export const addComposititon = composition => dispatch => {
  dispatch(addCompositionLoading(true));

  return axios
    .post(`${API_URL}/compositions`, composition)
    .then(res => {
      dispatch(addCompositionSuccess(res.data.composition));
    })
    .catch(err => {
      dispatch(addCompositionFailure(err.message));
    });
};
