import React from 'react'
import { Button, TextField } from '@mui/material'

import './styles.scss'

const Registration = () => {
    return (
        <div className="registration">
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
                    label="Enter your login please"
                    variant="outlined"
                    className='login'
                />
                <TextField
                    id="outlined-basic"
                    label="Create your password please"
                    variant="outlined"
                    className='pass'
                    type='password'
                />
                <Button
                    variant="outlined"
                    className='login-button'
                    type='submit'
                >
                    Registration
                </Button>
            </form>
        </div>
    );
}

export default Registration;
