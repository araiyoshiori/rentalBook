export const EXE_DISPLAY_BOOK = "EXE_DISPLAY_BOOK";
export const EXE_UPDATE_BOOK_STATE = "EXE_UPDATE_BOOK_STATE";
export const STORE_SET_BOOK_LIST = "STORE_SET_BOOK_LIST";
export const EXE_LOGIN = "EXE_LOGIN";
export const STORE_USER = "STORE_USER";
export const STORE_ERROR = "STORE_ERROR";

export const exeDisplayBookListAction = () => ({ type: EXE_DISPLAY_BOOK });

export const storeSetBookListAction = bookList => ({
  type: STORE_SET_BOOK_LIST,
  payload: bookList
});

export const exeUpdateBookStateAction = bookIdList => ({
  type: EXE_UPDATE_BOOK_STATE,
  payload: bookIdList
});

export const exeLoginAction = loginData => ({
  type: EXE_LOGIN,
  payload: loginData
});

export const storeUserAction = loginData => ({
  type: STORE_USER,
  payload: loginData
});
export const storeErrorAction = value => ({
  type: STORE_ERROR,
  payload: value
});
