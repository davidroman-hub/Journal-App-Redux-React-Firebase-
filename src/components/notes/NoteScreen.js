import React from 'react';
import { useSelector } from 'react-redux';
import NotesAppBar from './NotesAppBar';
import { useForm } from '../../hooks/useForm';


export const NoteScreen = () => {


    const {active:note} = useSelector(state => state.notes)
    //console.log(note)
    const [formValues, handleInputChange] = useForm(note)

    const {body,title} = formValues
    
    return (
        <div className='notes__main-content'>
            
            <NotesAppBar/>
            <div className='notes__content'>
                <input type='text'
                        placeholder='Write some awesome'
                        className='notes__title-input'
                        autoComplete='off'
                        value={title}
                        onChange={handleInputChange}
                />
                <textarea
                placeholder='What happened today?'
                className='notes__textarea'
                value={body}
                onChange={handleInputChange}
                >
                </textarea>
                {   
                    (note.url) &&
                        (<div className='notes__image'>
                                <img
                                    src='https://cdn.pixabay.com/photo/2017/06/05/22/49/digital-marketing-2375583_960_720.jpg'
                                    alt='arbol'
                                />
                        </div>)
                }
            </div>
        </div>
    )
}


export default NoteScreen