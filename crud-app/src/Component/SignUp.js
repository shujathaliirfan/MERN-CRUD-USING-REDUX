import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
// import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { ButtonGroup, makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

import {auth} from '../firebase'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {SignupMethod}  from '../../src/stores/actions/index';




const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  },
  top : {
      marginTop:'25px'
  }
})

const initialValue = {
    name: '',
    email:'',
    password: ''
}

export default function SignUp() {


  const classes = useStyles();
  let  dispatch = useDispatch();
  const [user ,setUser] = useState(initialValue);

 const {name , password ,email } = user;
  const [error, setError] = useState('')
 

  const onValueChange = (e) => {
    // console.log(e.target.value);
    setUser({...user, [e.target.name]: e.target.value })
}


  const handleSubmit = (e) => {
    e.preventDefault()
    if (name == '' || password == ''  ||  email == "") {
      alert('please type in all the required filed')
    }else {
        dispatch(SignupMethod(email,password));
        

    }
  
    } 
  

  return (
    <Container maxWidth="sm" className={classes.top}>
      <Typography
        variant="h6" 
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Sign Up
      </Typography>
      
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>

        <TextField className={classes.field}
        onChange={(e) => onValueChange(e)}
        name="name"
          label="name" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
          error={error}
        />
        <TextField className={classes.field}
        onChange={(e) => onValueChange(e)}
        name="email"
          label="email" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
          error={error}
        />
        <TextField className={classes.field}
        onChange={(e) => onValueChange(e)}
        //   onChange={(e) => setPassword(e.target.value)}
        name="password"
          label="password"
           variant="outlined"
          color="secondary"
        //   multiline
          rows={4}
          fullWidth
          required
          error={error}
        />
<ButtonGroup>
        <Button
          type="submit" 
          color="secondary" 
          variant="contained"
        //   endIcon={<KeyboardArrowRightIcon />}
          >
          Submit
        </Button>
        
        </ButtonGroup>


      </form>

      
    </Container>
  )
}