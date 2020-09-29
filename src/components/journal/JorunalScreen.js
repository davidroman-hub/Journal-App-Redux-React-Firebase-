import React from 'react';
import Sidebar from './Sidebar';
import NothingSelected from './NothingSelected';
import NoteScreen from '../notes/NoteScreen' 
import { useSelector } from "react-redux";

export const JournalScreen = () => {

    const {active} = useSelector(state => state.notes)


    return (
        <div className='journal__main-content'>
            <Sidebar/>
            <main>
                {/* <NothingSelected/> */}
                {
                    // console.log(active)
                    (active)
                        ? (<NoteScreen/>)
                        :(<NothingSelected/>)
                }
                
            </main>
        </div>
    )
}

export default JournalScreen