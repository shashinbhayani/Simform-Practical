import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reduxThunk from "redux-thunk"

import reducer from "./../reducers";
import fetchVideosSaga from "./../saga/VideosSaga";

const sagaMiddleware = createSagaMiddleware();

export default createStore(reducer, applyMiddleware(reduxThunk, sagaMiddleware));

sagaMiddleware.run(fetchVideosSaga);