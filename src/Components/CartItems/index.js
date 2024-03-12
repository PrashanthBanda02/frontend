import React, { useContext } from 'react'
import './index.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {all_product, cartItems, removeFromCart, getTotalCartAmout} = useContext(ShopContext);

  return (
    <div className='cart-items'>
        <div className='cart-items-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((eachItem)=>{

            if (cartItems[eachItem.id]>0)
            {
                return (
                    <div key={eachItem.id}>
                        <div className='cart-items-format cart-items-format-main'>
                            <img src={eachItem.image} alt='img' className='cart-icon-product-icon'/>
                            <p>{eachItem.name}</p>
                            <p>{eachItem.new_price}</p>
                            <button className='cart-items-quantity'>{cartItems[eachItem.id]}</button>
                            <p>${eachItem.new_price*cartItems[eachItem.id]}</p>
                            <img className='cart-items-remove-icon' src={remove_icon} alt=''  onClick={()=>{removeFromCart(eachItem.id)}}/>
                        </div> 
                        <hr />
                    </div>
                )
            }
            return null 
        })}
        <div className='cart-items-down'>
            <div className='cart-items-total'>
                <h1>Cart Totals</h1>
                <div>
                    <div className='cart-items-total-item'>
                        <p>Sub Total</p>
                        <p>{getTotalCartAmout()}</p>
                    </div>
                    <hr />
                    <div className='cart-items-total-item'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className='cart-items-total-item'>
                        <h3>Total</h3>
                        <p>{getTotalCartAmout()}</p>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className='cart-items-promo-code'>
                <p>If ypu have a promo code, Enter it here.</p>
                <div className='cart-items-promo-box'>
                    <input type='text' placeholder='Promo Code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems