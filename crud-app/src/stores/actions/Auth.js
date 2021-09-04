import * as actionTypes from '../actions/actionTypes';
import {login,logout,signup} from '../../Service/auth'

 // CREATE_USER ,EDIT_USER,DELETE_USER ,



const authRequest = () => {
    return {
      type: actionTypes.AUTH_REQUEST
    }
  }


  const authFail = (error) => {
    return {
      type:actionTypes.AUTH_FAIL,
      error
    }
  }



export const authSucess =  (user,token) => { 
    return {
    type :actionTypes.AUTH_SUCCESS,
    user:user,
    token:token
 
}
}

export const SignupMethod = (email,password) => {
    return function(dispatch) {
        dispatch(authRequest())
        signup(email,password).then(res => {
            dispatch(authSucess(res.user,res.user._delegate.accessToken))
            localStorage.setItem('token',res.user._delegate.accessToken)
        }).catch(err => {
            dispatch(authFail(err.message))
        })
    }
}


export const LoginMethod = (email,password) => {
    return function(dispatch) {
        dispatch(authRequest())
        login(email,password).then(res => {
            // console.log(res.user._delegate.accessToken)
            dispatch(authSucess(res.user,res.user._delegate.accessToken ))
            localStorage.setItem('token',res.user._delegate.accessToken)
        }).catch(error => {
            // alert(error.message)
            console.log(error)
            dispatch(authFail(error.message))
        })
    }
}

export const LogoutMethod = () => {
    return function(dispatch) {
        dispatch(authRequest())
        logout().then(res => {
            dispatch(authSucess(res.data.user))
            localStorage.removeItem('token');
        }).catch(err => {
            dispatch(authFail(err.message))
        })
    }
}







