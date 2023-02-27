import React, { useState } from 'react'
import './Register.css'
import './Register.css'
import avatar from '../assets/profile.png'
import { axiosAuth } from '../config/axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState('');
  const [name , setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ repeatPass, setRepeatPass] = useState('');

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImage(base64)
  }

  const handleSubmite = async (e) => {
    const data = { image, name, email, password};
    const url = 'http://localhost:5000/v1/users';
    e.preventDefault();
    try {
      if( repeatPass !== password ) {
        return alert("Wrong password!")
      }
      const res = await (await axiosAuth.post(url, data)).data
      navigate('/admin/user');
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <>
      <div className="register-container">
      <form onSubmit={e => handleSubmite(e)}>
        <div className='profile-upload'>
          <label htmlFor="file-upload" className='profile-upload'>
            <img src={image || avatar} alt="Image" />
          </label>
          <input 
            type="file"
            lable="Image"
            name="myFile"
            id='file-upload'
            accept='.jpeg, .png, .jpg'
            onChange={(e) => handleFileUpload(e)}
          />
        </div>

        <label htmlFor="name"><b>User Name</b></label>
        <input type="text" placeholder="Enter UserName" onChange={e => setName(e.target.value)} required />

        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" onChange={e => setEmail(e.target.value)} required />

        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} required />

        <label htmlFor="psw-repeat"><b>Confirm Password</b></label>
        <input type="password" placeholder="Confirm Password" name="psw-repeat" onChange={e => setRepeatPass(e.target.value)}  required/>

        <button type="submit" className="register-btn">Register</button>
        </form>
      </div>
      
      <div className="register-container signin">
        <p>Already have an account?<a href="/auth/login">Login</a>.</p>
      </div>
    </>
  )
}

export default Register


function convertToBase64(file){
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }
