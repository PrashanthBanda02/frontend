import React, {useEffect} from 'react';
import CartItems from '../Components/CartItems'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export const Cart =()=>{
   const Navigate=useNavigate();
  useEffect(()=>{
    const jwtToken=Cookies.get("jwt-token")
    console.log(jwtToken)
    if(jwtToken===undefined){
      Navigate('/login')
    }
  },[])
  return (
    <div>
      <Navbar/>
      <CartItems />
      <Footer />
    </div>
  );
}
