import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'

//Actions Redux

import { login } from '../../actions/auth'

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm ({
        email:'david@gmail.com',
        password:'123456'
    })

    const {email,password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(formValues)
        dispatch(login(12345,'hernan'))
    }


    return (
        <>
            <h3 className='auth__title'>Login</h3>
            <form onSubmit={handleLogin}>
                <input
                    type='email'
                    placeholder='E-mail'
                    name='email'
                    className='auth__input'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    className='auth__input'
                    value={password}
                    onChange={handleInputChange}
                />
                <button  
                className='btn btn-primary btn-block'
                
                type='submit'>
                    LOGIN
                </button>
                
                <br/>

                <div className='auth__social-networks'>
                    <h3>Login with social networks</h3>
                    <br/>
                        <div className='social'>
                            <div className='google-icon-wrapper'>
                                <i class="fab fa-google"></i>
                            </div>
                            <p className='btn-text'>
                                <b>Sign in With Google</b>
                            </p>
                        </div>
                </div>
                <Link to='/auth/register'
                    className='link'
                >
                    Create New Account
                </Link>
            </form>
        </>
    )
}
