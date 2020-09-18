import React,{useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
    
} from 'react-router-dom';
import {useDispatch} from 'react-redux';


import {firebase} from "../firebase/firebase-config";
import  AuthRouter  from './AuthRouter';
import JournalScreen from '../components/journal/JorunalScreen'
import { login } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch()
    
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {

            //console.log(user)
            // if the object user have something 
            if(user?.uid){
                    // we exec login and bring the values also the email if your want
                dispatch(login(user.uid, user.displayName))
            }
        })
    }, [dispatch])
    
    
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