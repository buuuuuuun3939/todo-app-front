import React, { ChangeEvent, useState} from 'react';
import { configureStore } from '@reduxjs/toolkit'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { changeDisplayName } from '../slices/auth';

const Logout: React.FC = () => {
  const dispatch = useDispatch();

  const auth_url = "http://localhost:3000/auth";
  const logout = () => { axios.delete(auth_url)
                      .then(() => dispatch(changeDisplayName("名無し")))};

  return(
    <div onLoad={logout} className="Logout">
      <h1>ログアウト</h1>
    </div>
  );
};

export default Logout;