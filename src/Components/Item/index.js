import React from 'react'
import './index.css'

const Item = (props) => {
  const {name, image, new_price,old_price} = props.itemDetails
  return (
    <div className='item'>
        <img src={image} alt='' />
        <p>{name}</p>
        <div className='item-prices'>
            <div className='item-price-new'>Rs {new_price}</div>
            <div className='item-price-old'>Rs {old_price}</div>

        </div>
    </div>
  )
}

export default Item

