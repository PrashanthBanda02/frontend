import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css'

export function AdminLogin() {
  const navigate=useNavigate();
  const [formData,setFormData] = useState({
    username : 'Swiftsafe',
    password : 'Swiftsafe123',
    email : 'swiftsafeadmin@gmail.com'
  })

  const goToLoginPage =()=>{
    navigate('/login')
  }

  const changeHandler = (event) =>{
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const Login = async() =>{
    console.log('Login function executed in Admin',formData)
    let responseData ;
    await fetch('http://localhost:4000/admin/login',{
      method: "POST",
      headers: {
        Accept : 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=> responseData = data)

    if(responseData.success){
      Cookies.set('jwt-token',responseData.token);
      navigate('/adminLoggedIn')
    }
    else
    {
      alert('Invalid user')
      navigate('/adminLogin')
    }
  }

  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <div className="loginSignup-fields">
            <input 
            value={formData.username} 
            name='username' 
            onChange={changeHandler} 
            type="text" 
            placeholder="Your Name" 
            /> 
            <input 
            type="email"
            value={formData.email} 
            name='email' 
            onChange={changeHandler}
            placeholder="Email Address" 
            />
            <input 
            type="password" 
            value={formData.password} 
            name='password' 
            onChange={changeHandler}
            placeholder="Password" 
            />
          </div>
          <div className="loginSignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By Continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        <button onClick={Login} type="button">Login</button>
        <button onClick={goToLoginPage} id='backBtn'>Back</button>
      </div>
    </div>
  );
}

