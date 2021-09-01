import { useState, useEffect } from 'react';
import * as actions from '../stores/actions/index';

import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
// import { getUsers, editUser } from '../Service/api';
import { singleUser ,updateUser} from '../../src/stores/actions/index';
import { useSelector, useDispatch } from 'react-redux';



const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const EditUser = () => {


   
    const { id } = useParams();  
    const classes = useStyles();
    


    const {user} = useSelector(state => state.users)




    const [state, setState] = useState({
        name:"",
        city:"",
        email:"",
        phone:"",
        id:"",
        gender:""

    });

    let history = useHistory();
   let dispatch = useDispatch();
    const {name , gender , email , phone , city  } = state;

    useEffect(() => {
        dispatch(singleUser(id))
    }, []);

    useEffect(() => {
        if(user) {
            setState({...user})
        }
    }, [user]);

  
  
   



    const editUserDetails = (e) => {
        e.preventDefault();
        // console.log(id,state)
        dispatch(updateUser(id,state));
        history.push('/all');
    }

    const onValueChange = (e) => {
        // console.log(e.target.value);
        setState({...state, [e.target.name]: e.target.value})
    }

    
 
    return (

        
        
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Information</Typography>
            {/* <FormControl>
                <InputLabel htmlFor="my-input">ID</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='id' value={state.id} id="my-input" aria-describedby="my-helper-text" />
            </FormControl> */}
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email } id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone } id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
             <FormControl>
                <InputLabel htmlFor="my-input">Gender</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='gender' value={gender } id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">City</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='city' value={city} id="my-input"  />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={editUserDetails}>Edit User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditUser;