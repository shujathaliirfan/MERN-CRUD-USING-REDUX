import axios from 'axios';

const usersUrl = 'http://localhost:8080/users';



export const getAllUsers = async () => {
return await axios.get(`${usersUrl}`);
}

export const getSingleUser = async (id) => {
   
    return await axios.get(`${usersUrl}/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/add`, user , {
        headers : {
            "Content-type":"Application/json"
        }
    });
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`, {
        headers : {
            "Content-type":"Application/json"
        }
    });
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user , {
        headers : {
            "Content-type":"Application/json"
        }
    })
}