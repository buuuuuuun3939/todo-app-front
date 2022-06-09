import React, { ChangeEvent, useState } from 'react';
import './Login.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { changeDisplayName, changeEmail } from '../slices/auth';
import { RootState, store } from '../app/store';

const Login:React.FC = () => {
  // storeからstateを取得
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  // フォーム用のstate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth_url = "http://localhost:3000/auth";
  const post = () => { axios.post(auth_url, { email: email,
                                              password: password,
                      }).then((response) => dispatch(changeDisplayName(response.data)))
                        //.then((response) => dispatch(changeEmail(response.data))) // うまく動作しない
                        .catch(error => alert(error.response.data["message"]))};


  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className="Login">
      <div className="LoginForm">
        <h1>ユーザーログイン</h1>
        <br />
        <TextField onChange={onEmailChange} id="standard-basic" label="メールアドレス" variant="standard" />
        <br />
        <TextField onChange={onPasswordChange} id="standard-basic" label="パスワード" variant="standard" />
        <br />
        <Button onClick={post} variant="outlined">ログイン</Button>
      </div>
    </div>
  );
}

export default Login;
