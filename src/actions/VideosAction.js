import { FETCH_VIDEOS, GET_VIDEOS } from "../reducers/Types";

export const fetchVideos = () => ({ type: FETCH_VIDEOS });
export const getVideosAction = data => {
  return dispatch => dispatch({ type: GET_VIDEOS, data });
}