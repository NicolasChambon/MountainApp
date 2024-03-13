import { FETCH_MOUNTAINS_SUCCESS } from "../actions/actions";

export const initialState = {
  mountains: [],
};

const reducer = (state = initialState, action = {}) => {
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

export default reducer;
