import '../components/Register.css'
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const user = useSelector((state) => state.user.value);
    
    const handleSubmite = async (e) => {
    const url = 'http://localhost:5000/v1/auth/login';
    const data = { email: email, password: password};
    e.preventDefault();
    try {
      const res = await (await axios.post(url, data)).data
      localStorage.setItem("data", JSON.stringify(res));
      navigate('/admin');
      window.location.reload();
    } catch (error) {
      if( error.response && 
        error.response.status >= 400 &&
        error.response.status <= 500) {
          setError(error.response.data.message)
        }
      }
    }

  return (
    <div className='login'>
      <div className="register-container">
        <h2><span>Login</span> Form</h2>
        <form onSubmit={handleSubmite}>
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" onChange={e => setEmail(e.target.value)}  required />
  
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} required />

          <button type="submit" className="register-btn">Login</button>
        </form>
        <p style={{color: "red", marginTop: "10px"}}>{error}</p>
      </div>
    </div>
  )
}

export default Login
