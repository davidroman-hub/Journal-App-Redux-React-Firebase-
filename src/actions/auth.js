import { types } from "../types/types"
import { firebase, googleAuthProvider } from '../firebase/firebase-config'

export const startLoginEmailPassword = (email, password) => {
    
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123,'pedro'))
        },3500)
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider)
        //promise
        .then( useCred => {
            console.log(useCred)
        })
    }
}


export const login = (uid, displayName) => ({
        type:types.LOGIN,
        payload:{
            uid,
            displayName
    }  
})