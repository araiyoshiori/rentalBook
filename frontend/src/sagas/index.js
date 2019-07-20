import { call, fork, takeEvery, put, select } from "redux-saga/effects";

import { EXE_DISPLAY_BOOK, EXE_UPDATE_BOOK_STATE, EXE_LOGIN } from "../Action";
import {
  exeDisplayBookListAction,
  storeSetBookListAction,
  storeUserAction,
  storeErrorAction
} from "../Action";
import { getBookList, patchBookStatusList } from "../API/Books";
import { getUser } from "../API/Users";

function* runExeDisplayList(action) {
  const { payload, error } = yield call(getBookList, action.payload);
  console.log("bookListList:", payload);
  if (payload && !error) {
    yield put(storeSetBookListAction(payload));
  } else {
    console.log("runExeDisplayList:book info getting err", error);
  }
}

function* runExeUpateBookState(action) {
  const state = yield select();
  const { payloadList, errorList } = yield call(
    patchBookStatusList,
    action.payload,
    state.user.id
  );
  if (payloadList.length > 0 && !errorList.length > 0) {
    yield put(exeDisplayBookListAction());
    console.log("runExeUpateBookState:book status update sucsess", payloadList);
  } else {
    console.log("runExeUpateBookState:book status update err", errorList);
  }
}

function* runExeLogin(action) {
  const { payload, error } = yield call(getUser, action.payload);
  console.log("payload", payload);
  if (payload && payload.length === 1 && !error) {
    yield put(storeUserAction(payload));
    yield put(storeErrorAction(false));
  } else {
    yield put(storeErrorAction(true));
  }
}

function* exeDisplayList() {
  yield takeEvery(EXE_DISPLAY_BOOK, runExeDisplayList);
}

function* exeUpdateBookState() {
  yield takeEvery(EXE_UPDATE_BOOK_STATE, runExeUpateBookState);
}

function* exeLogin() {
  yield takeEvery(EXE_LOGIN, runExeLogin);
}

export default function* rootSaga() {
  yield fork(exeDisplayList);
  yield fork(exeUpdateBookState);
  yield fork(exeLogin);
}
