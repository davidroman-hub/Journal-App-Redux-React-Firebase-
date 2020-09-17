// comand rafc
import React from 'react';
import {Link} from 'react-router-dom';


export const RegisterScreen = () => {
    return (
        <>
            <h3 className='auth__title'>Register</h3>
            <form>
            <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    className='auth__input'
                    autoComplete='off'
                />
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
                <input
                    type='password'
                    placeholder='Confirm Password'
                    name='confirm'
                    className='auth__input'
                />
                <button  
                className='btn btn-primary btn-block mb-5'
                
                type='submit'>
                    REGISTER
                </button>
                <br/>

                {/* <div className='auth__social-networks'>
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
                </div> */}
                <Link to='/auth/login'
                    className='link'
                >
                    Alredy registered?
                </Link>
            </form>
        </>
    )
}
