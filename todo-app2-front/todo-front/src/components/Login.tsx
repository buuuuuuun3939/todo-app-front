import React, { useState } from 'react';
import './Login.css';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup';
import { spacing } from '@mui/system';

function Login() {
  return (
    <div className="Login">
      <div className="LoginForm">
        <h1>ユーザー新規登録</h1>
        <br />
        <TextField id="standard-basic" label="メールアドレス" variant="standard" />
        <br />
        <TextField id="standard-basic" label="パスワード" variant="standard" />
        <br />
        <Button variant="outlined">ログイン</Button>
      </div>

      
    </div>
  );
}

export default Login;
