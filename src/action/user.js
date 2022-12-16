import {
  GET_USER_DATA
} from "../action/type"

export const setUserData = (data) => dispatch => {
  dispatch({
    type: GET_USER_DATA,
    payload: data
  })
}