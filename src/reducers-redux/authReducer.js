import {types} from '../types/types'


// const initialState = {
//     uid:12123,
//     name:'fernando',
//     dir:{
//         b:12
//     }
// }


export const authReducer = ( state = {}, action) =>{
    switch (action.type) {
        case types.LOGIN:
            return{
                uid:action.payload.uid,
                name:action.payload.displayName
            }            
        case types.logout:
            return{

            }
    
        default:
            return state;
    }
}