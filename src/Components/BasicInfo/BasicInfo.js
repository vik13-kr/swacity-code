import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import './BasicInfoStyle.css'

const useStyles = makeStyles((theme) => ({    
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginTop : theme.spacing(3),
      width: '30ch',
    },
    button :{
        paddingLeft :  '2rem',
        paddingRight :  '2rem',
        marginTop : theme.spacing(3),
        
    }
}));

const BasicInfo = () =>{
    const classes = useStyles();
   return(     

        <Grid container direction ='column' justify= 'center' className = 'info-container' alignItems = 'center'>
            <Grid item>
                <Typography variant ='h4' align = 'center'>
                    Basic Info
                </Typography>
            </Grid>

            <Grid  item>
                <form className = 'info-form'>                
                    <TextField className = {classes.textField} id="standard-basic" label="Country" /><br/>
                    <TextField className = {classes.textField} id="standard-basic" label="State" /><br/>
                    <TextField className = {classes.textField} id="standard-basic" label="City" /><br/>                          
                    </form>
            </Grid>

            <Grid  item >
                <Button className ={classes.button} variant="contained" color="secondary" type = 'submit'>
                    Submit
                </Button>    
            </Grid>
        </Grid>


   )
}

export default BasicInfo;