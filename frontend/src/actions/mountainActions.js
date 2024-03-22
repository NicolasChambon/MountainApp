export const FETCH_MOUNTAINS = "FETCH_MOUNTAINS";
export const FETCH_MOUNTAINS_SUCCESS = "FETCH_MOUNTAINS_SUCCESS";
export const ADD_MOUNTAIN = "ADD_MOUNTAIN";

export const fetchMountains = () => ({
  type: FETCH_MOUNTAINS,
});

export const fetchMountainsSuccess = (mountains) => ({
  type: FETCH_MOUNTAINS_SUCCESS,
  mountains,
});

export const addMountain = (mountain, navigate) => ({
  type: ADD_MOUNTAIN,
  mountain,
  navigate,
});
