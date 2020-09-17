import React from 'react';
import {LoginScreen} from '../components/auth/LoginScreen'
import {RegisterScreen} from '../components/auth/RegisterScreen'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
    
} from 'react-router-dom';



export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route 
                    path='/auth/login'
                    component={LoginScreen}
                />
                <Route 
                    path='/auth/register'
                    component={RegisterScreen}
                />
            </Switch>
            <Redirect to='/auth/login'/>
        </div>
    )
}

export default AuthRouter