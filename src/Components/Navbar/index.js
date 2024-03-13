import {Link, useNavigate} from 'react-router-dom'
import {useContext, useState,useRef} from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import React from 'react'
import './index.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import Cookies from 'js-cookie';

const Navbar = () => {

    const navigate= useNavigate()

    const [menu, setMenu] = useState('shop')
    const {getTotalCartItems} = useContext(ShopContext)
    const menuRef = useRef();

    const dropdown_toggle =(e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open')


    }

  return (
    <div className ='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='logo'/>
            <p>UpTrendZ</p>
        </div>
        <div onClick={dropdown_toggle}>
            <IoIosArrowDropdown className='nav-dropdown' />
        </div>
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration: "none"}} to='/'>Shop</Link> {menu==='shop'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('mens')}}> <Link style={{textDecoration: "none"}} to='/mens'>Men</Link> {menu==='mens'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('womens')}}><Link style={{textDecoration: "none"}} to='/womens'>Women</Link>  {menu==='womens'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('kids')}}><Link style={{textDecoration: "none"}} to='/kids'>Kids</Link> {menu==='kids'?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            {Cookies.get('jwt-token') ? (
            <button
            onClick={()=>{ Cookies.remove('jwt-token') ; navigate('/login')}}
            type='button' 
            className=''>
                Log out
            </button>) 
            :
            (
                <Link to='/login'><button type='button'className=''>Login</button></Link>

            )}
            
            <Link to='/cart'><img src={cart_icon} alt='cart icon' /></Link>  
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar