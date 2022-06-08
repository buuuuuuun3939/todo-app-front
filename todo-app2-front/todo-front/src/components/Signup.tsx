import React, { ChangeEvent, useState, useEffect } from 'react';
import './Signup.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
//import { EmailIcon } from '@mui/icons-material/Email';
import axios from 'axios';

const Signup: React.FC = () => {
  const [display_name, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const onDisplayNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDisplayName(event.target.value);
  };
  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onPasswordConfirmationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirmation(event.target.value);
  };

  interface User {
    id: bigint,
    email: string,
    password_digest: string,
    display_name: string,
  };


  const url = "http://localhost:3000/users";
  //axios.get<User>(url).then((res) => {
    //console.log(res.data);
  //})
  const post = () => { axios.post(url, { display_name: display_name,
                                         email: email,
                                         password: password,
                                         password_confirmation: password_confirmation
  })};

  return (
    <div className="Signup">
      <form className="SignupForm">
        <h1>ユーザー新規登録</h1>
        <TextField onChange={onDisplayNameChange} id="standard-basic" label="表示名" variant="standard" />
        {/*<Email />*/}
        <br />
        <TextField onChange={onEmailChange} id="standard-basic" label="メールアドレス" variant="standard" />
        <br />
        <TextField onChange={onPasswordChange} id="standard-basic" label="パスワード" variant="standard" />
        <br />
        <TextField onChange={onPasswordConfirmationChange} id="standard-basic" label="パスワード確認" variant="standard" />
        <br />
        <br />
        <Button onSubmit={post} variant="outlined">新規登録</Button>
      </form>
    </div>
  );
}

export default Signup;
