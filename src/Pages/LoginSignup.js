import React,{useState} from 'react';
import './CSS/LoginSignup.css';

export function LoginSignup() {
  const [state,setState] = useState('Sign Up')

  const [formData,setFormData] = useState({
    username : '',
    password : '',
    email : ''
  })

  const changeHandler = (event) =>{
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const Login = async() =>{
    console.log('Login function executed',formData)
    let responseData ;
    await fetch('http://localhost:4000/login',{
      method: "POST",
      headers: {
        Accept : 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=> responseData = data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token)
      window.location.replace('/');
    }
    else{
      alert(responseData.errors)
    }

  }

  const Signup = async() =>{
    console.log('Sign up function executed',formData)
    let responseData ;
    await fetch('http://localhost:4000/signup',{
      method: "POST",
      headers: {
        Accept : 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=> responseData = data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token)
      window.location.replace('/');
    }
    else{
      alert(responseData.errors)
    }

  }


  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <h1>{state}</h1>
        <div className="loginSignup-fields">
          {state === 'Sign Up' && 
          <input 
          value={formData.username} 
          name='username' 
          onChange={changeHandler} 
          type="text" 
          placeholder="Your Name" 
          /> }
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
        <button onClick={state==="Login"? Login : Signup } type="button">Continue</button>
        {state === 'Sign Up' && 
        <p onClick={()=>{setState("Login")}} className="loginSignup-login">
          Already have an account?
          <span>Login here</span>
        </p> }
        {state !== 'Sign Up' && 
        <p className="loginSignup-login">
          Create an account?
          <span onClick={()=>{setState("Sign Up")}} >Click here</span>
        </p> }
        
      </div>
    </div>
  );
}
