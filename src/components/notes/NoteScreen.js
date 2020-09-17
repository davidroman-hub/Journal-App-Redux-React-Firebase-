import React from 'react'

import NotesAppBar from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className='notes__main-content'>
            
            <NotesAppBar/>
            <div className='notes__content'>
                <input type='text'
                        placeholder='Write some awesome'
                        className='notes__title-input'
                        autoComplete='off'
                />
                <textarea
                placeholder='What happened today?'
                className='notes__textarea'
                >
                </textarea>
                <div className='notes__image'>
                        <img
                            src='https://cdn.pixabay.com/photo/2017/06/05/22/49/digital-marketing-2375583_960_720.jpg'
                            alt='arbol'
                        />
                    </div>
            </div>
        </div>
    )
}


export default NoteScreen