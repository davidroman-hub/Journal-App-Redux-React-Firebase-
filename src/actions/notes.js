import { db } from "../firebase/firebase-config";


export const startNewNote = () => {
    return async (dispatch, getState) => {

        // to save in firestone 
        // from my entire state only i need: .auth.uid 
        const uid = getState().auth.uid;
        //console.log(uid)
        const newNote ={ 
            title:'',
            body:'',
            date: new Date().getTime()
        }

        const  docRef = await db.collection(`${uid}/journal/notes`).add( newNote);
        console.log(docRef)
    }
}


// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if true; <--- i change this to true in firestone
//     }
//   }
// }