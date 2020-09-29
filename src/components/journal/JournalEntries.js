
///  rafc
import React from 'react';
import { useSelector } from 'react-redux';
import JournalEntry from './JournalEntry';

export const JournalEntries = () => {

    
    // the good think to use redux its we dont need to use props to bring the informations because
    // the state is changing in the user interface and we can take the values because they are in state redux memorie
    // i only i have to use use selector to bring everything

    const {notes} = useSelector(state => state.notes)

    return (
            <div className='journal__entries'>
                {
                    notes.map( note => (
                        <JournalEntry 
                        key={note.id}
                            {...note}
                        />
                    ))
                    
                }
                
            </div>
        
    )
}

export default JournalEntries
