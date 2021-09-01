import * as actionTypes from '../actions/actionTypes';
import { getAllUsers,addUser,deleteUser,editUser,getSingleUser} from '../../Service/api'

 // CREATE_USER ,EDIT_USER,DELETE_USER ,



const fetchUsersRequest = () => {
    return {
      type: actionTypes.FETCH_USERS_START
    }
  }


  const fetchUsersFail = (error) => {
    return {
      type:actionTypes.FETCH_USERS_FAIL,
      error
    }
  }



export const fetchUsers =  (users) => { 
    return {
    type :actionTypes.FETCH_USERS_SUCCESS,
    users 
}
}

export const loadData = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        getAllUsers().then(res => {
            dispatch(fetchUsers(res.data))
        }).catch(err => {
            dispatch(fetchUsersFail(err.message))
        })
    }
}

export const userDeleted = () => {
    return {
      type:actionTypes.DELETE_USER
     
    }
  }

export const deleteUsers = (id) => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        deleteUser(id).then(res => {
            console.log(res)
            dispatch(userDeleted());
            dispatch(loadData());
        }).catch(err => {
            dispatch(fetchUsersFail(err.message))
        })
    }
}


export const userCreated = () => {
    return {
      type:actionTypes.CREATE_USER
    //   payload:data
     
    }
  }


export const addUserMethod = (user) => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        console.log('user',user)
        addUser(user).then(res => {
           console.log(res)
            dispatch(userCreated());
            dispatch(loadData());
        }).catch(err => {
            dispatch(fetchUsersFail(err.message))
        })
    }
}


export const getUser = (data) => {
    return {
        type:actionTypes.SINGLE_USER,
        payload: data
       
      }
}

export const singleUser = (id) => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        getSingleUser(id).then(res => {
            console.log(res.data)
            dispatch(getUser(res.data));
            // dispatch(loadData());
        }).catch(err => {
            dispatch(fetchUsersFail(err.message))
        })
    }
}


export const userUpdated = () => {
    return {
        type:actionTypes.EDIT_USER       
       
      }
}

export const updateUser = ( id ,user) => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        console.log('update' + id,user)
        editUser(id,user).then(res => {
            console.log(res.data)
            dispatch(userUpdated());
            dispatch(loadData());
        }).catch(err => {
            dispatch(fetchUsersFail(err.message))
        })
    }
}



