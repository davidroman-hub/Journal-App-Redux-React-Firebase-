import React from 'react';
import JournalEntries from './JournalEntries';
import { useDispatch, useSelector }from 'react-redux';
import { startLogout } from '../../actions/auth';



export const Sidebar = () => {


    const dispatch = useDispatch()
    const {name} = useSelector( state => state.auth) // i want extract only the name from the state check the state on Redux Tools

    const handleLogout = () => {
        //console.log('click')
        dispatch(startLogout())
    } 

    return (
        <aside className='journal__sidebar'>
            <div className='journal__sidebar-navbar'>
                <h3 className='mt-5'>
                    <i className='far fa-moon'></i>
                        <span> { name }</span>
                </h3>
                <button 
                className='btn'
                onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
            <div className='journal__new-entry'>
                <i className='far fa-calendar-plus fa-5x'/>
                <p className='mt-5'>
                    New entry
                </p>
            </div>
            <JournalEntries/>
        </aside>
    )
}

export default Sidebar
