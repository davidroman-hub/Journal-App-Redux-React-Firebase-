import React from 'react';
import { startSaveNote, startUploading } from '../../actions/notes';
import { useDispatch, useSelector } from 'react-redux';


export const NotesAppBar = () => {

    const dispatch = useDispatch()
    const {active} = useSelector (state => state.notes )
    
    
    const handleSave = () => {
        //console.log(active)
        dispatch(startSaveNote(active))
    }

    //to save from cloudinary a photo
    const handlePictureClick = () => {
        //console.log('click');
        document.querySelector('#fileSelector').click()
    }

    const handleFileChange = (e) => {
        //console.log(e.target.files) // <== to check if the file is there
        const file = e.target.files[0]
        if(file){
            dispatch( startUploading(file))
        }
    }

    return (
        <div className='notes__appBar'>
            <span>28 de agosto 2020</span>
            <input
                id='fileSelector'
                type='file'
                name='file'
                style={{ display:'none'}}
                onChange={handleFileChange}
            />
            <div>
                <button className='btn'
                onClick={handlePictureClick}
                >
                    Picture
                </button>
                <button className='btn'
                onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default NotesAppBar
