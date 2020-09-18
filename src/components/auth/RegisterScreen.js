// comand rafc
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { useForm } from '../../hooks/useForm';


export const RegisterScreen = () => {
    
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
        console.log(formValues);
        
    }
    

    // validation

    const isFormValid = () => {
        //
    }
    
    
    
    return (
        <>
            <h3 className='auth__title'>Register</h3>
            <form onSubmit={ handleRegister}>
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
