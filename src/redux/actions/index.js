export const ADD = "ADD_TO_FAVOURITE";
export const REMOVE = "REMOVE_FROM_FAVOURITE";

export const addToFavourite = (data) => {
  return {
    type: ADD,
    payload: data.company_name
  };
};

export const removeToFavourite = (data) => {
  return {
    type: REMOVE,
    payload: data.company_name
  };
};
