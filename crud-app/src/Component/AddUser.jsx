import react, { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';

import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUserMethod } from '../../src/stores/actions/index';
import axios from 'axios';


const initialValue = {
    name: '',
    city: '',
    email: '',
    phone: '',
   
    gender: '',
    age: ''
}



const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddUser = () => {
   let dispatch = useDispatch()
    const classes = useStyles();
    let history = useHistory();


    const {users} =  useSelector((state)=> state.users);
    const {error} =  useSelector((state) => state.users);

  


    const [user, setUser] = useState(initialValue);
    const [err ,setErr] = useState("");
    const { name, email, phone,age ,city,gender} = user;

console.log(err)
    useEffect(() => {
        setErr(err)
    },[])

   

  


    const onValueChange = (e) => {
        // console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = (e) => {
        e.preventDefault();
        if(!name || !email || !phone || !gender  || !city || !age){
            setErr("Please enter all the input field")
        }else {
            // console.log(user)
            dispatch(addUserMethod(user));
            

            // try {

            // const { data } =  await axios.post('http://localhost:3002/users',user)
            // console.log(data)

            // }catch(err){
            //     console.log(error)
            // }
           
            history.push('./all');
            setErr("")
        }       
    }

    
   
    return (

       
        <FormGroup className={classes.container}>
            <Typography variant="h4">{err && err } Add User</Typography>
            {/* <FormControl>
                <InputLabel htmlFor="my-input">ID</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='id' value={users.length+1} id="my-input" />
            </FormControl> */}
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Age</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='age' value={age} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Gender</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='gender' value={gender} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">City</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='city' value={city} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={addUserDetails}>Add User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;