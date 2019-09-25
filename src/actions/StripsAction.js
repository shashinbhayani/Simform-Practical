import { GET_STRIPS, UPDATE_SELECTED_VALUE } from "../reducers/Types";
import StripsResponse from "../utils/Constants/Mocks/StripsResponse";


export const getStripsAction = () => dispatch => dispatch({type: GET_STRIPS, payload: StripsResponse})

export const updateStripSeletedValueAction = (id, selectedValue) => dispatch => dispatch({type: UPDATE_SELECTED_VALUE, payload: {id, selectedValue}})