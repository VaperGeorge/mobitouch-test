const initialState = {
  isLoading: false,
  compositions: [],
  compositionDetails: {},
  hasErrored: false
};

export function compositions(state = initialState, action) {
  switch (action.type) {
    case "ITEMS_IS_LOADING":
      return {
        ...state,
        isLoading: true
      };

    case "ITEMS_HAS_ERRORED":
      return {
        ...state,
        hasErrored: true
      };

    case "ITEMS_FETCH_DATA_SUCCESS":
      return {
        ...state,
        isLoading: false,
        compositions: action.payload
      };
    // Add composition
    case "ADD_COMPOSITION_STARTED":
      return {
        ...state,
        isLoading: true
      };

    case "ADD_COMPOSITION_FAILURE":
      return {
        ...state,
        hasErrored: true
      };

    case "ADD_COMPOSITION_SUCCESS":
      return {
        ...state,
        isLoading: false,
        compositions: [action.payload]
      };
    // Get post by Id
    case "GET_POST_BY_ID":
      return {
        ...state,
        compositionDetails: action.payload
      };

    // Edit post by Id
    case "EDIT_POST_BY_ID":
      return {
        ...state,
        compositionDetails: {}
      };

    // Clear Composition Details
    case "CLEAR_COMPOSITION_DETAILS":
      return {
        ...state,
        compositionDetails: {}
      };
    default:
      return state;
  }
}
