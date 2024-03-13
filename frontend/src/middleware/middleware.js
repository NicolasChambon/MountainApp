import { FETCH_MOUNTAINS, fetchMountainsSuccess } from "../actions/actions";

const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_MOUNTAINS: {
      fetch("http://localhost:5000/api/mountains")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((mountains) => {
          store.dispatch(fetchMountainsSuccess(mountains));
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
