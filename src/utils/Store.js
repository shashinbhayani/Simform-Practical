import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reduxThunk from "redux-thunk"

import reducer from "./../reducers";
import fetchVideosSaga from "./../saga/VideosSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export default createStore(reducer, applyMiddleware(reduxThunk, sagaMiddleware));

// then run the saga
sagaMiddleware.run(fetchVideosSaga);