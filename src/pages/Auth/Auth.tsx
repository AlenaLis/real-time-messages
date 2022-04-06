import React from 'react'
import { Button, TextField } from '@mui/material'

import './styles.scss'

const Auth = () => {
    return (
        <div className="auth">
            <form className='form'>
                <TextField
                    id="outlined-basic"
                    label="Enter your email please"
                    variant="outlined"
                    className='email'
                    type='email'
                    placeholder='example@.com'
                />
                <TextField
                    id="outlined-basic"
                    label="Enter your password please"
                    variant="outlined"
                    className='password'
                    type='password'
                />
                <Button
                    variant="outlined"
                    className='login-button'
                    type='submit'
                >
                    Login
                </Button>
            </form>
        </div>
    );
}

export default Auth;
