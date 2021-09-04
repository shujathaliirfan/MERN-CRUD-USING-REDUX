import React, { useState ,useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
// import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { ButtonGroup, makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

import {auth} from '../firebase'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';
import {LoginMethod } from '../../src/stores/actions/index';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  },
  top : {
      marginTop:'25px'
  },
  button:{
      marginBottom:'8px'
  }
})

const initialValue = {
    email: '',
    password: ''
}

export default function Login() {
  const classes = useStyles();
  let  dispatch = useDispatch();
  let history = useHistory();
  const [userAccount ,setUserAccount] = useState(initialValue);
  const [open ,setOpen ] = useState(false);


  let {user ,loading,error  } = useSelector(state => state.auth);

 const {email , password} = userAccount;
  // const [error, setError] = useState(error)
 

  const onValueChange = (e) => {
    // console.log(e.target.value);
    setUserAccount({...userAccount, [e.target.name]: e.target.value })
}


useEffect(() => {
  if(error){
    setOpen(true)
  }

}, [error])


const handleClose = () => {
 setOpen(false)
}

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email == '' || password == '' ) {
      alert('please type in all the required filed')
    }else {
       dispatch(LoginMethod(email,password));
       if (error.length !== 0) {
       history.push('./all');

       } 
          
    
    }
  
    } 

    // if(error) return <p>{error}</p>

   
      
    
  

  return (


    
    <Container maxWidth="sm" className={classes.top}>
      <Typography
        variant="h6" 
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Sign in
      </Typography>
      
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>

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
{/* <ButtonGroup> */}
        <Button
          type="submit" 
          color="secondary" 
          variant="contained"
          fullWidth
          className={classes.button}
        //   endIcon={<KeyboardArrowRightIcon />}
          >
          Submit
        </Button>
        <Button
          type="submit" 
          fullWidth
          color="secondary" 
          variant="contained"
          component={Link} to={'/signup'}
        //   endIcon={<KeyboardArrowRightIcon />}
          > SIGN UP
        
        </Button>
        {/* </ButtonGroup> */}


      </form>

      <Snackbar
        open={open}
        onClose={handleClose}
        message={error}
        autoHideDuration={6000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
        
            </Button>
            <IconButton
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
        
  
      />
    </Container>
  )
}