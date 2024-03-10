import { LOAD_MOUNTAIN_DATA, handleFetchMountain } from "../actions/actions";

const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_MOUNTAIN_DATA: {
      fetch("http://localhost:5000/api/mountains")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((mountainData) => {
          store.dispatch(handleFetchMountain(mountainData));
        })
        .catch((error) => {
          console.error("There was an error with your fetch operation:", error);
        })
        .finally(() => {});
      break;
    }
    default:
  }
  return next(action);
};

export default middleware;
