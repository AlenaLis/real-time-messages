import React from 'react'

import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

import './styles.scss'

const Header = () => {
    return (
        <header className="header">
         <div className='header-left-side'>
             <Link to='/' className='link'>
                 Real Time Messenger
             </Link>
         </div>
         <div className='header-right-side'>
            <div>
                <Link to='/auth'>
                    <Button variant="outlined" className='sign-button'>Sign In</Button>
                </Link>
                <Link to='/registration'>
                    <Button variant="outlined" className='reg-button'>Registration</Button>
                </Link>
            </div>
         </div>
        </header>
    );
}

export default Header;
