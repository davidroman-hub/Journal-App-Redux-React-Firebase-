
import { db } from '../firebase/firebase-config';


export const loadNotes = async ( uid ) => {
    // we need to bring from the db 
    const notesSnap = await db.collection(`${ uid }/journal/notes`).get();
    const notes = []; 

    console.log(notesSnap)

    return notes 
}