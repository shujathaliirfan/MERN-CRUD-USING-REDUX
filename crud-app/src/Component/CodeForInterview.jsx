import { Box, Typography, makeStyles } from '@material-ui/core';
import Youtube from '../Assets/Images/youtube.png';
import InstaTele from '../Assets/Images/InstaTele.jpeg';

const useStyles = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    },
    image: {
        width: '50%',
        height: '50%'
    }
})

const CodeForInterview = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant="h4">Welcome Home</Typography>
            <Box style={{display: 'flex'}}>
            <Typography variant="h4">Hi there</Typography>
            </Box>
        </Box>
    )
}

export default CodeForInterview;