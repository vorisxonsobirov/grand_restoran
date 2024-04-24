import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdLock } from "react-icons/io";
import "./Login.css";

const Login = ({ setUserAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "Akhrorbek Khoshimov" && password === "waiter") {
      setUserAuthenticated(true);
      navigate('/home');
    }else if (username === "Akhrorjon Khoshimbekov" && password === "Direktor") {
      setUserAuthenticated(true);
      navigate('/Director');} else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className='Login'>
      <div className="login-div">
        <IoMdLock className='icon-lock'/>
        <p>MEMBERS LOGIN</p>
      </div>
      <label>USERNAME</label>
      <input
        placeholder='Username'
        className='inp-user'
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <label>PASSWORD</label>
      <input
        placeholder='Password'
        className='inp-psw'
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button className='btn-log' onClick={handleLogin}>
        <p>LOGIN</p>
      </button>
    </div>
  );
}

export default Login;
