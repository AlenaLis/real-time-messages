import React, { useEffect, useRef, useState } from 'react'

const ChatRoom = ({ match, socket }: any) => {
  const [messages, setMessages] = useState([])
  const [userId, setUserId] = useState('')
  const messageRef: any = useRef()

  const token = localStorage?.getItem('CC_Token')

  const chatroomId = match?.params?.id

  const sendMessage = () => {
    if (socket) {
      socket.emit('chatroomMessage', {
        chatroomId,
        message: messageRef.current.value,
      })

      messageRef.current.value = ''
    }
  }

  useEffect(() => {
    if (token && token?.length > 0) {
      const payload = JSON.parse(atob(token?.split('.')[1]))
      setUserId(payload?.id)
    }
  }, [token])

  useEffect(() => {
    if (socket) {
      socket.on('newMessage', (message: string) => {
        const newMessages: any = [...messages, message]
        setMessages(newMessages)
      })
    }
  }, [socket, messages, messageRef])

  useEffect(() => {
    if (socket) {
      socket.emit('joinRoom', {
        chatroomId,
      })
    }

    return () => {
      if (socket) {
        socket.emit('leaveRoom', {
          chatroomId,
        })
      }
    }
  }, [])

  return (
    <div className="main">
      <div>
        <div className="chatroomPage">
          <div className="chatroomSection">
            <div className="cardHeader">Chatroom Name</div>
            <div className="chatroomContent">
              {messages?.map((message: any, i: number) => (
                <div key={i} className="message">
                  <span className={userId === message?.userId ? 'ownMessage' : 'otherMessage'}>
                    {message?.name}:
                  </span>{' '}
                  {message?.message}
                </div>
              ))}
            </div>
            <div className="chatroomActions">
              <div>
                <input type="text" name="message" placeholder="Say something!" ref={messageRef} />
              </div>
              <div>
                <button className="join" onClick={sendMessage}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatRoom
