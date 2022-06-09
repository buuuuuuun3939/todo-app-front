import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Signup from './components/Signup';
import Login from './components/Login';
import Navibar from './components/Navibar';
import Logout from './components/Logout';
import Profile from './components/Profile';

import { Provider } from 'react-redux';
import { RootState, store } from './app/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CookiesProvider, useCookies } from 'react-cookie';
import axios from 'axios';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

axios.defaults.withCredentials = true;

root.render(
  <React.StrictMode>
    
    {/*
      <App />
    */}

    {/*
      <Signup />
      
    */}
    <CookiesProvider>
      <BrowserRouter>
        <Provider store={store}>
          <Navibar/>
          <Routes>
            <Route path="/signup"  element={<Signup/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/login"  element={<Login/>} />
            <Route path="/logout" element={<Logout/>} />
          </Routes>

        </Provider>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
