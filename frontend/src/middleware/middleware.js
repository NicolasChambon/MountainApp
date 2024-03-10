// import {
//   LOAD_RECIPES_LIST,
//   handleFetchRecipes,
//   toogleLoading,
// } from "../actions/recipes";

const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_RECIPES_LIST: {
      fetch("http://localhost:3001/recipes")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          store.dispatch(handleFetchRecipes(data));
        })
        .catch((error) => {
          console.error("There was an error with your fetch operation:", error);
        })
        .finally(() => {
          store.dispatch(toogleLoading());
        });
      break;
    }
    default:
  }
  return next(action);
};

export default middleware;
