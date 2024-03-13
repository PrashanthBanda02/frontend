import React from 'react'
import './index.css'
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product_icon from '../../assets/Product_list_icon.svg'

const Sidebar = (props) => {
  const {Toggle,toggleValue}=props
  const productList=()=>{
    if(toggleValue===true){
      console.log("Toggle Item")
      Toggle();
    }
  }
  const AddProduct=()=>{
    if(toggleValue===false){
      Toggle();
    }
  }
  return (
    <div className='sidebar'>
     <div className='sidebar-item' onClick={AddProduct}>
          <img src={add_product_icon} alt='' />
          <p>Add Product</p>
        </div>
      <div className='sidebar-item' onClick={productList}>
          <img src={list_product_icon} alt='' />
         <p>Product List</p>
        </div>
    </div>
  )
}


export default Sidebar