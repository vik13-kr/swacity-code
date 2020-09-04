import React from 'react';
import {Switch, Route} from 'react-router-dom'; 

//components
import Dashboard from './Components/Dashboard/Dashboard'
import Zones from './Components/Zones/ZonesComponent'
import BasicInfo from './Components/BasicInfo/BasicInfo'

const Routing = () =>{
    return(
        <div>
            <Switch>
                <Route exact path = '/'  >
                    <BasicInfo/> 
                </Route>
                <Route exact path = '/deparments' component = {Zones} >
                    <Dashboard/> 
                </Route>
                <Route exact path = '/zones' component = {Zones} >
                    <Zones/>
                 </Route>
                <Route exact path = '/users'  > 
                    <h3>This is Users page</h3>
                </Route>
                <Route exact path = '/tasks' >
                    <h3>This is Tasks page</h3>
                </Route>
                <Route exact path = '/assets'  >
                    <h3>This is Assets page</h3>
                </Route>
                <Route exact path = '/reports'  > 
                    <h3>This is Reports page</h3>
                </Route>                
            </Switch>
        </div>
    )
}

export default Routing; 