import {  CREATE_USER ,EDIT_USER,DELETE_USER ,FETCH_USERS_FAIL,FETCH_USERS_SUCCESS,FETCH_USERS_START} from "./actionTypes"
import { getUsers,addUser,deleteUser,editUser} from '../../Service/api'





const fetchUsersRequest = () => {
    return {
      type: FETCH_USERS_
    }
  }


  const fetchUsersRequest = () => {
    return {
      type: FETCH_USERS_REQUEST
    }
  }



export const fetchUsers =  (users) => ({
    type : FETCH_USERS_SUCCESS,
    payload:users 
})

export const loadData = () => {
    return (dispatch) => {
        dispatch(FETCH_USERS_START())
        getUsers().then(res => {
            dispatch(fetchUsers(res.data))
        }).catch(err => {
            dispatch(FETCH_USERS_FAIL(err.message))
        })
    }
}


export const createUser = (data) => {
    return {
        type: CREATE_USER,
        payload : {
            id : new Date().getTime().toString(),
            data:data

        }
    }
}

export const editUser =(id,user) => {
    return {
        type: EDIT_USER,
        payload : {
            id :id,
           user:user

        }
    }
}


export const deleteUser = (id) => {
    return (dispatch) => {

        dispatch({
            type: DELETE_USER,
            id:id
        })
       
     
        
        
    }
}




// "proxy" : "http://localhost:5000"
  // "json-server": "json-server --watch src/Database/db.json --host 127.0.0.1 --port 3002",