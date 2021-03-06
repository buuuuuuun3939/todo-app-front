import React, { ChangeEvent, useState } from 'react';
import './Login.css';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const Login:React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth_url = "http://localhost:3000/auth";
  const post = () => { axios.post(auth_url, { email: email,
                                              password: password,
  }).then((response) => alert(response.status))};


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
