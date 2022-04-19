import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {io} from 'socket.io-client';

import Auth from './pages/Auth/Auth';
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';
import Registration from './pages/Registration/Registration';
import makeToast from './helpers/Toaster';
import ChatRoom from './pages/ChatRoom/ChatRoom';

import './App.css';

const App = () => {
  const [socket, setSocket] = useState(null);

  const setupSocket = () => {
    const token = localStorage?.getItem('CC_Token');

    if (token && !socket) {
      const newSocket: any = io('http://localhost:8000', {
        query: {
          token: localStorage?.getItem('CC_Token'),
        },
      });

      newSocket.on('disconnect', () => {
        setSocket(null);
        setTimeout(setupSocket, 3000);
        makeToast('error', 'Socket Disconnected!');
      });

      newSocket.on('connect', () => {
        makeToast('success', 'Socket Connected!');
      });

      setSocket(newSocket);
    }
  };

  useEffect(() => {
    setupSocket();
  }, []);

  return (
    <div className="App">
      <Header socket={socket} />
      <div className="layout">
        <Routes>
          <Route path="/" element={<Main socket={socket} />} />
          <Route path="/auth" element={<Auth setupSocket={setupSocket} />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/chatroom/:id" element={<ChatRoom socket={socket} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
