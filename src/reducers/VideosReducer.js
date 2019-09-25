import { GET_VIDEOS } from "./Types";

const INITIAL_STATE = {
  videos: []
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_VIDEOS:
      const videos = [...state.videos, ...payload.videos]
      return {
        ...state,
        videos: videos
      };
    default:
      return state;
  }
};