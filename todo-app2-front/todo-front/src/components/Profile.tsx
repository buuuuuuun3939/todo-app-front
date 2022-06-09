import React, { ChangeEvent, useState } from 'react';
import './Profile.css';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import axios from 'axios';

function Profile() {
  const [display_name, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [old_password, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const onDisplayNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onOldPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onPasswordConfirmationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const url = "http://localhost:3000/user";
  const post = () => { axios.put(url, { display_name: display_name,
                                        email: email,
                                        old_password: old_password,
                                        password: password,
                                        password_confirmation: password_confirmation
  }).then((response) => alert(response))};

  

  return (
    <div className="Profile">
      <div className="ProfileForm">
        <h1>プロフィール</h1>
        <br />
        <TextField onChange={onDisplayNameChange} id="standard-basic" label="表示名" variant="standard" />
        <br />
        <TextField onChange={onEmailChange} id="standard-basic" label="メールアドレス" variant="standard" />
        <br />
        <TextField onChange={onOldPasswordChange} id="standard-basic" label="現在のパスワード" variant="standard" /> 
        <br />
        <TextField onChange={onPasswordChange} id="standard-basic" label="変更後のパスワード" variant="standard" />
        <br />
        <TextField onChange={onPasswordConfirmationChange} id="standard-basic" label="変更後のパスワード再入力" variant="standard" />
        <br />
        <Button onClick={post} variant="outlined">ログイン</Button>
      </div>
    </div>
  );
}

export default Profile;
