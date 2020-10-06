import React, { useEffect,useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import NotesAppBar from './NotesAppBar';
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleteingNotes } from '../../actions/notes'

export const NoteScreen = () => {

    

    const {active:note} = useSelector(state => state.notes)
    //console.log(note)
    const [formValues, handleInputChange,reset] = useForm(note)

    const {body,title, id} = formValues;

    // we need to rebuild the state and for that we can use reset from useForm and use Effect
    // useRef = i can hold a valiable mutable and to rebuild all the component if change
    const activeId = useRef(note.id)

    useEffect(() => {
        //if they are diferent i need to reset the form!
        if(note.id !== activeId.current){
            reset(note)
            activeId.current = note.id
        }
    },[note,reset])

    //Now we have to upload the active note, we have to use useDispatch again to put in the 
    //state the things that we are writing
    const dispatch = useDispatch()    

    useEffect(() => {
        //console.log(formValues)
        dispatch(activeNote(formValues.id,{...formValues}))
    },[formValues, dispatch])

    const handleDelete = () => {
        dispatch(startDeleteingNotes(id))
    }
    
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
                        name='title'
                        
                />
                <textarea
                placeholder='What happened today?'
                className='notes__textarea'
                value={body}
                onChange={handleInputChange}
                name='body'
                >
                </textarea>
                {   
                    (note.url) &&
                        (<div className='notes__image'>
                                <img
                                    src={note.url}
                                    alt='arbol'
                                />
                        </div>)
                }
            </div>
            <button
            onClick={handleDelete}
            className='btn btn-danger'
            >Delete</button>
        </div>
    )
}


export default NoteScreen