import { signUserIn } from '../services/auth'
export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

const requestLogin = () => {
    return {
      type: LOGIN_REQUEST
    }
  }
  
  const receiveLogin = user => {
    return {
      type: LOGIN_SUCCESS,
      user
    }
  }
  
  const loginError = () => {
    return {
      type: LOGIN_FAILURE
    }
}
  
export const loginUser = (username, password) => async dispatch => {
    dispatch(requestLogin())
    const response = await signUserIn(username, password)
  
    if (response) {
      if (response.data.success) {
        dispatch(receiveLogin(response.data))
        return true
      } else {
        dispatch(loginError())
        return false
      }
    } else {
      dispatch(loginError())
      return false
    }
  }