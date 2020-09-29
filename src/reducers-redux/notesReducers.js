

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

const initialState = {
    notes:[],
    active:null
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        
        default:
            return state;
    }
}