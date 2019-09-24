import { call, put, takeLatest } from "redux-saga/effects";

import { getVideosAction } from "./../actions/VideosAction";

import { GET_VIDEOS_URL } from "../utils/Constants/Urls";
import { FETCH_VIDEOS } from "../reducers/Types";

function* getVideosData(action) {
  try {
    const data = yield call(getVideos);
    yield put(getVideosAction(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* fetchVideosSaga() {
  yield takeLatest(FETCH_VIDEOS, getVideosData);
}

async function getVideos() {
  try {
    console.log("api called")
    const response = await fetch(GET_VIDEOS_URL);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    alert("error while fetching data")
  }
}
