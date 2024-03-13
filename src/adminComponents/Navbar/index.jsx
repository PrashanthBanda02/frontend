import React from 'react'
import './index.css'
import logo from '../../assets/logo.png'
import navProfile from '../../assets/nav-profile.svg'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Navbar = () => {

  const navigate = useNavigate();

  const onLogout =()=>{
    navigate('/login')
    Cookies.remove('jwt-token')
  }
  return (
    <div className='nav-container'>
      <div className='nav-logo-name-container'>
        <img src={logo} className='nav-logo' alt='nav' />
        <div className='app-name'>
          <h1>UpTrendZ</h1>
          <p>Admin page</p>
        </div>
      </div>
      <button onClick={onLogout}>Logout</button>
      <img src={navProfile} className='nav-profile' alt='nav' />   
    </div>
  )
}

export default Navbar

