import React,{useEffect,useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    //Route,
    Redirect
    
} from 'react-router-dom';
import {useDispatch} from 'react-redux';


import {firebase} from "../firebase/firebase-config";
import  AuthRouter  from './AuthRouter';
import JournalScreen from '../components/journal/JorunalScreen'
import { login } from '../actions/auth';
import {PrivateRoute} from './PrivateRoute';
import {PublicRoute} from './PublicRoute';
import {loadNotes} from '../helpers/loadNotes';
import { setNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch()
    const [checking, setcheking] = useState(true);
    const [isLoggedIn, setIsloggedIn] = useState(false)





    useEffect(() => {
        firebase.auth().onAuthStateChanged( async (user) => {
            //console.log(user)
            // if the object user have something 
            if(user?.uid){
                    // we exec login and bring the values also the email if your want
                dispatch(login(user.uid, user.displayName));
                setIsloggedIn(true);
                const notes = await loadNotes(user.uid)
                dispatch(setNotes(notes))

            }else{
                setIsloggedIn(false)
            }
            setcheking(false)
        })
    }, [dispatch,setcheking, setIsloggedIn])
    
    
    if(checking){
        return (
            <h1> Wait... </h1>
        )
    }


    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute path='/auth'
                    component={AuthRouter}
                    isAuthenticated={isLoggedIn}
                    />
                    <PrivateRoute
                    exact path='/'
                    isAuthenticated={isLoggedIn}
                    component={JournalScreen}
                    />
                    <Redirect to='/'/>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter