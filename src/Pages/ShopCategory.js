import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import './CSS/ShopCategory.css';
import Item from '../Components/Item';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export function ShopCategory(props) {
  const Navigate=useNavigate();
  const { all_product } = useContext(ShopContext);
   
  useEffect(()=>{
    const jwtToken=Cookies.get("jwt-token")
    console.log(jwtToken)
    if(jwtToken===undefined){
      Navigate('/login')
    }
  },[])
 
 
  return (
    <>
    <Navbar/>
   <div className="shop-category">
      <img className="shop-category-banner" src={props.banner} alt="banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12 products </span>
          out of
          {all_product.length}
          {' '}
          products
        </p>
        <div className="shopcategory-sort">
          Sort by
          {' '}
          <img src={dropdown_icon} alt="dropdown" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item) => {
          if (props.category === item.category) {
            return <Item key={item.id} itemDetails={item} />;
          }
          return null;
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
    <Footer/>
    </>
    
  );
}
