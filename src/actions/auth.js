import Swal from 'sweetalert2';

import { types } from "../types/types";
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import {startLoadingAction,finishLoadingAction} from '../actions/ui';


export const startLoginEmailPassword = (email, password) => {

    return (dispatch) => {
        // setTimeout(() => {
        //     dispatch(login(123,'pedro'))
        // },3500)
        dispatch(startLoadingAction())
        firebase.auth().signInWithEmailAndPassword(email,password) //remember the function from google excat name
        .then( ({ user }) => {
            dispatch(
                login(user.uid, user.displayName),
            )
            dispatch(finishLoadingAction())
        }) 
        .catch(e => {
            console.log(e)
            dispatch(finishLoadingAction())
            Swal.fire(
                'Error', e.message,'error'
            )
        })
    }
}

export const startRegisterWithEmailPasswordName = (email,password,name) => {
    return(dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then( async ({ user }) => {
            await user.updateProfile({ displayName:name })
            //console.log(useCred)
            //console.log(user)
            dispatch(
                login(user.uid, user.displayName)
            )
        }) 
        .catch(e => {
            console.log(e)
            Swal.fire(
                'Error', e.message,'error'
            )
        })
    }

}


export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider)
        //promise
        // from the google we want to take the user ->
        .then( ({user}) => {
            //console.log(useCred)
            dispatch(
                login(user.uid, user.displayName)
            )
        })
    }
}


export const login = (uid, displayName) => ({
        type:types.LOGIN,
        payload:{
            uid,
            displayName
    }  
});

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout())
        dispatch(purgueLogout())
    }
}

export const logout = () => ({
    type:types.LOGOUT
})

export const purgueLogout = () => ({
    type:types.notesLogoutCleaning
}) 
