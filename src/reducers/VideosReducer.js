import { GET_VIDEOS } from "./Types";

const INITIAL_STATE = {
  videos: []
}

export default (state = INITIAL_STATE, { type, data }) => {
  switch (type) {
    case GET_VIDEOS:
      const videos = [...state.videos, ...data.videos]
      return {
        ...state,
        videos: videos
      };
    default:
      return state;
  }
};