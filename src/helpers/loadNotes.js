
import { db } from '../firebase/firebase-config';


export const loadNotes = async ( uid ) => {
    // we need to bring from the db 
    const notesSnap = await db.collection(`${ uid }/journal/notes`).get();
    const notes = []; 

    //console.log(notesSnap)

    notesSnap.forEach( snapChild => {
        //console.log(snapChild.data()) we can see the notes from the user first step console
        notes.push({
            id:snapChild.id,
            ...snapChild.data()
        })
    });
    
    console.log(notes) //second step is to see all the arrangement

    return notes 
}