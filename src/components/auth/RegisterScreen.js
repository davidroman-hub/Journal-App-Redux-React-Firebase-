// comand rafc
import React from 'react';
import {Link} from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';

//Action Redux 
import { setErrorAction, removeErrorAction } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

        const dispatch = useDispatch(); 
        //const state = useSelector( state => state.userInterface);
        const {msgError} = useSelector( state => state.userInterface);
        
        //console.log(msgError)
    
    // form
        const [formValues, handleInputRegister] = useForm({
            name:'david',
            email:'david1@gmail.com',
            password:'123456',
            confirm:'123456'
        })

        const {name, email, password, confirm} = formValues;

    // const handleRegister // event

            
    const handleRegister = (e) => {
        e.preventDefault();
        //console.log(formValues);
        if(isFormValid()){
            // console.log('Formulario Correcto')
            dispatch(startRegisterWithEmailPasswordName(email,password,name))
        }
        
    }
    
    //dispatch al error ..


    // validation

    const isFormValid = () => {
        if(name.trim().length === 0){
            dispatch(setErrorAction('name is required'))
            return false
        } else if ( !validator.isEmail( email )){
            dispatch(setErrorAction('E-mail is not valid'))
            return false
        } else if( password !== confirm || password.length < 5 ){
            dispatch(setErrorAction('Password must have at least 6 characters and match'))
            return false
        }
        dispatch(removeErrorAction('Valid Form'))
        return true
    }
    
    
    
    return (
        <>
            <h3 className='auth__title'>Register</h3>
            <form onSubmit={ handleRegister}>


            {   
            msgError && (
                        <div className='auth__alert-error'>
                            {msgError}
                        </div>
                    )
                }
            
            
            <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    className='auth__input'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputRegister}
                />
                <input
                    type='email'
                    placeholder='E-mail'
                    name='email'
                    className='auth__input'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputRegister}
                />
                <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    className='auth__input'
                    value={password}
                    onChange={handleInputRegister}
                />
                <input
                    type='password'
                    placeholder='Confirm Password'
                    name='confirm'
                    className='auth__input'
                    value={confirm}
                    onChange={handleInputRegister}
                />
                <button  
                className='btn btn-primary btn-block mb-5'
                
                type='submit'>
                    REGISTER
                </button>
                <br/>
                <Link to='/auth/login'
                    className='link'
                >
                    Alredy registered?
                </Link>
            </form>
        </>
    )
}
