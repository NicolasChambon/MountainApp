export const LOAD_MOUNTAIN_DATA = "LOAD_MOUNTAIN_DATA";
export const HANDLE_FETCH_MOUNTAIN = "HANDLE_FETCH_MOUNTAIN";

export const loadMountainData = () => ({
  type: LOAD_MOUNTAIN_DATA,
});

export const handleFetchMountain = (mountainData) => ({
  type: HANDLE_FETCH_MOUNTAIN,
  mountainData,
});
