import axios from "axios";
import cookie from 'js-cookie'
import Router from "next/router";
export const authenticatingUser = () => ({ type: 'AUTHENTICATING_USER' });

export const setCurrentUser = userData => ({
  type: 'SET_CURRENT_USER',
  payload: userData,
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});

export const logOutAction = () => dispatch=> {
  dispatch(logoutUser())
  cookie.remove('token')
  Router.push('/login')
}

export const loginUser = (values, setError) => dispatch => {
  dispatch(authenticatingUser())
  axios.post(`${process.env.BASE_URL}/signIn`, values)
    .then(res=> {
      console.log(res)
      if(!res.data.success) {
        setError(res.data.message)
        dispatch({type: 'FAILED_LOGIN'})
      }else {
        cookie.set('token', res.data.token, {expires: 1000})

        axios.post(`${process.env.BASE_URL}/getData`, {token: res.data.token})
          .then(res=> {
            if(res.data.success) {
              dispatch(setCurrentUser(res.data))
              Router.push('/cabinet')
            }else {
              dispatch({type: 'FAILED_LOGIN'})
              cookie.remove('token')
              Router.push('/login')
            }
          })
          .catch(err=> {
            dispatch({type: 'FAILED_LOGIN'})
            cookie.remove('token')
            Router.push('/login')
          })
      }
    })
}
export const fetchCurrentUser = () => dispatch => {
  dispatch(authenticatingUser());
  axios.post(`${process.env.BASE_URL}/getData`, {token: cookie.get('token')})
    .then(res => {
      if(res.data.success) {
        dispatch(setCurrentUser(res.data))
      }else {
        dispatch(logoutUser)
        cookie.remove('token')
        Router.push('/login')
      }
    })
    .catch(err => {
      dispatch(logoutUser)
      cookie.remove('token')
      Router.push('/')
    })
}