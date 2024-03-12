import React, { useEffect, useState } from 'react';
import Item from '../Item';
import './index.css';

function Popular() {
  const [popularProducts, setPopularProducts] = useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/popularinwomen')
    .then((response)=>response.json())
    .then((jsonData)=>setPopularProducts(jsonData))
  },[])
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-items">
        {popularProducts.map((item) => (
          <Item key={item.id} itemDetails={item} />
        ))}
      </div>
    </div>
  );
}

export default Popular;
