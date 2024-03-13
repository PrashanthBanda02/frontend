import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Sidebar from '../Sidebar'
import AddProduct from '../AddProduct/index.jsx'
import ListProduct from '../ListProduct/index.jsx'
import './index.css'

const Admin = () => {
  console.log("welcome to admin with two routs")
  const [toggle,setToggle]=useState(true);
   
     const changeToggle=()=>{
      setToggle(prev => !prev);
     }

  return (
    <div className='admin'>
        <Sidebar Toggle={changeToggle} toggleValue={toggle}/>
       {toggle && (
        <AddProduct/>
       )} 
        {!toggle &&(<ListProduct/>) }
    </div>
  )
}

export default Admin

