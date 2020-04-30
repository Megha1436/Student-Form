import React from 'react';
import Login from './login';
import Admin from './admin';
import Student from './student';
import Details from './details';
import {Route} from 'react-router-dom';
const Mainroute =()=>{
    return(
        <div>
        <Route exact path="/" component={Login}/>
        <Route exact path="/student" component={Student}/>
        <Route exact path="/admin" component={Admin}/>
        <Route exact path="/details/:email" component={Details}/>

        </div>
    )
}
export default Mainroute;