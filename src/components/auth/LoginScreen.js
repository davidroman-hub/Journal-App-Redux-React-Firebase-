import React from 'react'
import {Link} from 'react-router-dom'


export const LoginScreen = () => {
    return (
        <>
            <h3 className='auth__title'>Login</h3>
            <form>
                <input
                    type='email'
                    placeholder='E-mail'
                    name='email'
                    className='auth__input'
                    autoComplete='off'
                />
                <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    className='auth__input'
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
                <Link to='/auth/register'>
                    Create New Account
                </Link>
            </form>
        </>
    )
}
