import React, { useEffect, useState } from 'react'

import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

import './styles.scss'

const Header = () => {
  const [auth, setAuth] = useState(false)

  const token = localStorage.getItem('CC_Token')

  useEffect(() => {
    if (token && token?.length > 0) {
      setAuth(true)
    } else {
      setAuth(false)
    }
  }, [token])

  const LogOut = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <header className="header">
      <div className="header-left-side">
        <Link to="/" className="link">
          Real Time Messenger
        </Link>
      </div>

      <div className="header-right-side">
        {!auth ? (
          <div>
            <Link to="/auth">
              <Button variant="outlined" className="sign-button">
                Sign In
              </Button>
            </Link>
            <Link to="/registration">
              <Button variant="outlined" className="reg-button">
                Registration
              </Button>
            </Link>
          </div>
        ) : (
          <Button variant="outlined" className="reg-button" onClick={LogOut}>
            Log Out
          </Button>
        )}
      </div>
    </header>
  )
}

export default Header
