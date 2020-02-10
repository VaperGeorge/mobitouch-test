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
    default:
      return state;
  }
}

export function addNewComposition(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}

export function getPostById(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case "GET_POST_BY_ID":
      return {
        ...state,
        compositionDetails: action.payload
      };

    default:
      return state;
  }
}
