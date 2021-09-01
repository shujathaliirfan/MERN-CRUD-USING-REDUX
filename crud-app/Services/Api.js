import axios from 'axios';
import {getAuthToken} from '../Helper/Utils'




const baseUrl ='http://localhost:8080/users'

export const fetchUsers = async () => {
    return await axios.get(`${baseUrl}`);
}


export const getSingleUser = async (id) => {
    id = id || '';
    return await axios.get(`${baseUrl }/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(`${baseUrl }/add`, user , 
    {
        headers: {
        Authorization: "Bearer " + `${getAuthToken() ? getAuthToken() : ""}`,
        "Content-Type": "application/json"
      }
    }
    );
}

export const deleteUser = async (id) => {
    return await axios.delete(`${baseUrl }/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${baseUrl }/${id}`, user)
}