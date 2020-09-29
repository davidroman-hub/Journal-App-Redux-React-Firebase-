

/// we need to do notes as a [],
// we need to put an active note:null,
//but if is active:
// active{
//    id:jkdhkfjhdfkjhfedfd,
//    title:'',
//    body:'',
//    imgUrl:'',
//    date:35131531531514
//  }

import { types } from '../types/types';

const initialState = {
    notes:[],
    active:null
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.notesActive:
            return{
                ...state,
                active:{
                    ...action.payload
                }
            }
        
        default:
            return state;
    }
}