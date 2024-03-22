import { FETCH_MOUNTAINS_SUCCESS } from "../actions/mountainActions";

export const initialState = {
  mountains: [],
};

const mountainReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_MOUNTAINS_SUCCESS:
      return {
        ...state,
        mountains: action.mountains,
      };
    default:
      return state;
  }
};

export default mountainReducer;
