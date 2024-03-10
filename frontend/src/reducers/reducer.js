import { HANDLE_FETCH_MOUNTAIN } from "../actions/actions";

export const initialState = {
  mountainData: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_FETCH_MOUNTAIN:
      return {
        ...state,
        mountainData: action.mountainData,
      };
    default:
      return state;
  }
};

export default reducer;
