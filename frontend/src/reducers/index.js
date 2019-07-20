import {
  EXE_DISPLAY_BOOK,
  STORE_ERROR,
  STORE_SET_BOOK_LIST,
  STORE_USER
} from "../Action";

const initialState = {
  bookList: [],
  user: "",
  error: false
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case EXE_DISPLAY_BOOK:
      return { ...state, action };
    case STORE_SET_BOOK_LIST:
      return {
        ...state,
        bookList: action.payload
      };
    case STORE_USER:
      return {
        ...state,
        user: action.payload[0]
      };

    case STORE_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
