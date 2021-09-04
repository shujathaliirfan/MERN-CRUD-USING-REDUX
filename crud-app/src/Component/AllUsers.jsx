import react, { useState, useEffect } from 'react';
import * as actions from '../stores/actions/index';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
// import { getUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';


import { useSelector, useDispatch } from 'react-redux';
import { loadData,deleteUsers } from '../../src/stores/actions/index';




// useEffect(() => {
//     dispatch();
//   }, [])
// }

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    center : {
        display:'flex',
        justifyContent:'center',
        alignItem:'center',
        marginTop:'12em',
        
    
    },
    mid: {
        margin: '50px 0 0 50px'
        },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        },
        mid : {
            marginLeft:'18px'
        }
        
    
   
    }
})


const AllUsers = () => {

    const dispatch = useDispatch()


let {users} = useSelector(state => state.users);
let {loading} =  useSelector(state => state.users);
let {error} =  useSelector(state => state.users);

 console.log(users); 

    const classes = useStyles();

    useEffect(() => {
        dispatch(loadData());
        
    }, []);

    const deleteUserData = (_id) => {
        if(window.confirm('Are you sure you wanted to delete the user ?')){
            dispatch(deleteUsers(_id));
        }
            
            }

    // const getAllUsers = async () => {
    //     let response = await getUsers();
    //     setUsers(response.data);
    // }

    if(loading) return  (<div className={classes.center}>
    <CircularProgress className={classes.mid}
   />;
    </div>)

    // if(error) return  <p>{error}</p>;
    
    return (

        
<>
   
        <h2>{error && error}</h2>

        <Table className={classes.table}>
            
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>City</TableCell>                   
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody> 


                {
                    users.length === 0 && <p>No record found </p> 
                    
                }

                {
                    users && users.map((user,index) => {
                        const {_id, name ,email ,gender ,phone ,city } =  user;
                        return <TableRow className={classes.row} key={index}>
                        <TableCell>{index +1}</TableCell> 
                        <TableCell>{name}</TableCell>
                        <TableCell>{gender}</TableCell>
                        <TableCell>{email}</TableCell>
                       <TableCell>{phone}</TableCell> 
                       <TableCell>{city}</TableCell> 
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${_id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(_id)}>Delete</Button> 
                        </TableCell>
                    </TableRow>
                    })
                }
            
            </TableBody>
        </Table>



</>
    )
}

export default AllUsers;