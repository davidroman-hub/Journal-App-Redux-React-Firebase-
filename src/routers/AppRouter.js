import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
    
} from 'react-router-dom';
import  AuthRouter  from './AuthRouter';
import JournalScreen from '../components/journal/JorunalScreen'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/auth'
                    component={AuthRouter}
                    />
                    <Route exact path='/'
                    component={JournalScreen}
                    />
                    <Redirect to='/'/>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter