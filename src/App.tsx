import React from 'react';
import { Route, Routes } from "react-router-dom"

import Auth from './pages/Auth/Auth'
import Header from './pages/Header/Header'
import Main from './pages/Main/Main'
import Registration from './pages/Registration/Registration'

import './App.css';

const App = () => {
  return (
        <div className="App">
            <Header />
            <div className="layout">
                <Routes>
                    <Route  path="/" element={<Main />}/>
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/registration" element={<Registration />} />
                </Routes>
            </div>
        </div>
  );
}

export default App;
