import { GET_STRIPS, UPDATE_SELECTED_VALUE } from "./Types";

const INITIAL_STATE = {
  stripsList: [],
  selecetedValues: {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
  }
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_STRIPS:
      return {
        ...state,
        stripsList: payload
      }
    case UPDATE_SELECTED_VALUE:
      const selecetedValues = {
        ...state.selecetedValues,
        [payload.id]: payload.selectedValue
      };
      console.log(selecetedValues)
    return {
      ...state,
      selecetedValues
    }
    default:
      return state;
  }
};