// ShopContextProvider.js
import React, { createContext, useEffect, useState } from 'react';
import { json } from 'react-router-dom';


export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for (let index=0 ; index <300+1 ; index++ ){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props)=> {

  const [all_product, setAllProducts] = useState([])

  const [cartItems,setCartItems] = useState(getDefaultCart())

  useEffect(()=>{
    fetch('http://localhost:4000/allproducts')
    .then((response)=> response.json())
    .then((data)=> setAllProducts(data))

    if (localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/getcart',{
       method: 'POST',
       headers: {
         Accept : 'application/form-data',
         'auth-token': `${localStorage.getItem('auth-token')}`,
         'Content-Type': 'application/json',
       },
       body: ""
     })
     .then((response)=>response.json())
     .then((jsonData)=> setCartItems(jsonData))
   }


  },[])
 

  const addToCart =  (itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]: prev[itemId]+1}))

    if (localStorage.getItem('auth-token')){
       fetch('http://localhost:4000/addtocart',{
        method: 'POST',
        headers: {
          Accept : 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"itemId": itemId})
      })
      .then((response)=>response.json())
      .then((jsonData)=> console.log(jsonData))
    }
    else{
      console.log('Token authentication failed')
    }
  }

  const removeFromCart =(itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]: prev[itemId] -1 }))

    if (localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/removefromcart',{
       method: 'POST',
       headers: {
         Accept : 'application/form-data',
         'auth-token': `${localStorage.getItem('auth-token')}`,
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({"itemId": itemId})
      })
      .then((response)=>response.json())
      .then((jsonData)=> console.log(jsonData))
   }
   else{
     console.log('Token authentication failed')
   }
  }

  const getTotalCartAmout = () =>{
    let totalAmout = 0;
    for ( const item in cartItems)
    {
        if (cartItems[item]>0)
        {
            let itemInfo = all_product.find((product)=>product.id === Number(item))
            totalAmout += itemInfo.new_price * cartItems[item]
        }  
    }
    return totalAmout
  }

  const getTotalCartItems = () =>{
    let totalItem = 0;
    for ( const item in cartItems)
    {
        if (cartItems[item]>0)
        {
            totalItem += cartItems[item]
        } 
    }
    return totalItem

  }

  const contextValue = { all_product ,cartItems,addToCart,removeFromCart,getTotalCartAmout,getTotalCartItems}; 
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
