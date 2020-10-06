import {types} from '../../types/types';

describe('test with our types', () => {
    test('have to be this types ', () => {
        expect( types).toEqual({
            LOGIN:'[Auth] Login',
            LOGOUT:'[Auth] Logout',

            //Error

            uiSetError:'[UI] Set Error',
            uiRemoveError:'[UI] Remove Error',

            // Loading
            uiStartLoading: '[UI] Start loading',
            uiFinishLoading: '[UI] Finish loading',

            //notes types

            notesAddNew : '[Notes] New Note',
            notesActive : '[Notes] Set active note',
            notesLoad : '[Notes] Load notes',
            notesUpdated : '[Notes] Update notes Save',
            notesFileUrl : '[Notes] Updated image url',
            notesDeleted : '[Notes] Deleted note',
            notesLogoutCleaning : '[Notes] Logout Cleaning',
        })
    })
    
})
