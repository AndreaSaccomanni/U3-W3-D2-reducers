import { ADD, REMOVE } from "../actions";

const initialState = {
  favourite: {
    list: []
  }
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: [...state.favourite.list, action.payload]
        }
      };
    case REMOVE:
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: state.favourite.list.filter((fav) => fav !== action.payload)
        }
      };
    default:
      return state;
  }
};

export default mainReducer;
