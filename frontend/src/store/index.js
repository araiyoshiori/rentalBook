import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootSaga from "../sagas";
import rootReducer from "../reducers/";
// import createHistory from "history/createBrowserHistory";
// import { routerMiddleware } from "react-router-redux";

// const history = createHistory();

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    // applyMiddleware(routerMiddleware(history), sagaMiddleware, logger)
    applyMiddleware(sagaMiddleware, logger)
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
