import { combineReducers } from "redux";

import VideosReducer from "./VideosReducer";
import StripsReducer from "./StripsReducer";

export default combineReducers({
  VideosReducer,
  StripsReducer
});