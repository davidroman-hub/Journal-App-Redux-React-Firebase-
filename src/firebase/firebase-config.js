import firebase from "firebase/app";
import  'firebase/firestore';
import  'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAE21bnRaMCoyj7qLzxLbggCjKtpBruG7w",
    authDomain: "calendar-app-74ff8.firebaseapp.com",
    databaseURL: "https://calendar-app-74ff8.firebaseio.com",
    projectId: "calendar-app-74ff8",
    storageBucket: "calendar-app-74ff8.appspot.com",
    messagingSenderId: "847425459862",
    appId: "1:847425459862:web:046d28ff33c5d2685a54b7"
    };
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


const db = firebase.firestore(); // database
const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); // refer to firestore 


export {
    db,
    googleAuthProvider,
    firebase
}