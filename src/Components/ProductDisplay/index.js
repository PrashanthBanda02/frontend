import React, { useContext } from 'react';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import './index.css';
import { ShopContext } from '../../Context/ShopContext';

export function ProductDisplay(props) {
  const { product } = props;
  const {addToCart} = useContext(ShopContext)
  
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-image-list">
          <img src={product.image} alt="product-img" />
          <img src={product.image} alt="product-img" />
          <img src={product.image} alt="product-img" />
          <img src={product.image} alt="product-img" />

        </div>
        <div className="product-display-image">
          <img className="product-display-main-image" src={product.image} alt="product-img" />
        </div>

      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-stars">
          <img src={star_icon} alt="star-img" />
          <img src={star_icon} alt="star-img" />
          <img src={star_icon} alt="star-img" />
          <img src={star_icon} alt="star-img" />
          <img src={star_dull_icon} alt="star-img" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
          <div className="product-display-right-price-old" >${product.old_price}</div>
          <div className="product-display-right-price-new" >${product.old_price}</div>
        </div>
        <div className="product-display-right-description">
        Crafted from breathable cotton, this dress keeps you cool while exuding effortless style. 
        The playful pattern and flirty hemline add a touch of fun to your summer wardrobe.
        </div>
        <div className="product-display-right-size">
            <h1>Select Size</h1>
            <div className="product-display-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
            <button type='button' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="product-display-right-category"><span>Category: </span> Women T-shirt, Crop Top</p>
            <p className="product-display-right-category"><span>Tags: </span> Modern, Latest</p>

        </div>
      </div>

    </div>
  );
}

export default ProductDisplay;
