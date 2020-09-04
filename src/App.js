import React from 'react';
import './App.css';

//router import
import Routing from './Route';

//components imports
import Navbar from './Components/Navbar/NavbarComponent';


//material-ui
import { Grid } from '@material-ui/core';

function App() {
  return (
    
        
    <Grid container direction = 'row' spacing ={3} wrap= "nowrap"  >
      <Grid item>         
        <Navbar/>        
      </Grid>
      
      <Grid item>
        <Routing /> 
      </Grid> 

    </Grid>
  
  );
}

export default App;
