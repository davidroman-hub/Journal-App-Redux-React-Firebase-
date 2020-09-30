import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { types } from '../types/types';


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
        //// when i have all the information from the note i want to activate this note in automatic
        dispatch(activeNote( docRef.id, newNote) );
    }
}

// we need to create another action async when i have the info i need to send to my reducer

export const activeNote = (id, note) => ({
    type:types.notesActive,
    payload:{
        id,
        ...note
    }
})

export const startLoadingNotes = (uid) => {
    return async ( dispatch ) => {
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ))
    }
}

export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload:notes
})



/// to save

/// all this will be changed
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if true; <--- i change this to true in firestone
//     }
//   }
// }

//for this:
// after.. we want to only an authenticate user can to a note and we use on firestone :
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
//}

////////////// Save new note in the DB

export const startSaveNote = ( note ) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth; /// <== we need the Id from the user  
        if ( !note.url ){
            delete note.url
        }
        try{
            const noteToFirestore = { ...note}; // <== what we want to save ( the new note)
            delete noteToFirestore.id; // <== we need to eliminate the note id because we dont want to use the id from the objcet(modify)
            await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore); // 
            //dispatch(startLoadingNotes( uid)); <== if i do this i update all the notes.. and i dont want this
            dispatch(refreshNote(note.id, note));// <== this is the correct way to save the notes
            Swal.fire('Saved', note.title, "success")
        }
        catch(error){
            console.log(console.error)
        }
    } 
}


//only i need to update the note that changed.. so i need to modify that

export const refreshNote = ( id , note) => ({
    type: types.notesUpdated,
    payload:{
        id, 
        note:{
            id,
            ...note
        }
    }
});

/// Start loading photo

export const startUploading = (file) => {
    return (dispatch, getState) => {
        const {active:activeNote} = getState().notes;
        console.log(file)
        console.log(activeNote)
    }
}