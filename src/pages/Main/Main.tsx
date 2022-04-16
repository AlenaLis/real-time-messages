import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button, TextField } from '@mui/material'

import { postChatRoom } from '../../services'

import './styles.scss'

const Main = (socket: any) => {
  const [auth, setAuth] = useState(false)
  const [update, setUpdate] = useState(false)
  const [name, setName] = useState('')
  const [chatRooms, setChatRooms] = useState([])

  const token = localStorage?.getItem('CC_Token')

  const getChatRooms = async () => {
    await axios
      .get('http://localhost:8000/chatroom', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('CC_Token'),
        },
      })
      .then((response) => {
        setChatRooms(response.data)
        setUpdate(false)
      })
      .catch(() => {
        setUpdate(false)
      })
  }

  useEffect(() => {
    if (token && token?.length > 0) {
      setAuth(true)
    } else {
      setAuth(false)
    }
  }, [token])

  useEffect(() => {
    getChatRooms()
  }, [])

  useEffect(() => {
    if (update) {
      getChatRooms()
    }
  }, [update, chatRooms])

  const postRoom = async () => {
    await postChatRoom({
      name,
    }).then((res) => {
      if (res?.statusText === 'OK') {
        socket.setupSocket()
        setUpdate(true)
      }
    })
  }

  useEffect(() => {
    if (chatRooms?.length > 0) {
    }
  }, [chatRooms])

  return (
    <div className="main">
      {auth ? (
        <div className="card">
          <div className="cardHeader">Rooms for chat</div>
          <div className="cardBody">
            <div className="inputGroup">
              <TextField
                id="outlined-basic"
                label="Enter new room name"
                variant="outlined"
                className="room"
                type="text"
                value={name}
                required={true}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <Button variant="outlined" onClick={postRoom}>
            Create Chatroom
          </Button>
          <div className="chatRooms">
            {chatRooms?.map((chatroom: { _id: string; name: string }) => (
              <div className="room" key={chatroom?._id}>
                <Link to={'/chatroom/' + chatroom?._id}>
                  <Button>'{chatroom?.name}' room for chat</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Please Log In to use Time Messenger</p>
      )}
    </div>
  )
}

export default Main
