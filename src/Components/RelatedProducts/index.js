import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item'
import './index.css'

const RelatedProducts = () => {
  return (
    <div className='related-products'>
        <h1>Related Products</h1>
        <hr />
        <div className='related-products-items'>
            {data_product.map((item)=>(
                <Item key={item.id} itemDetails={item} />
            ))}
        </div>
    </div>
  )
}

export default RelatedProducts


