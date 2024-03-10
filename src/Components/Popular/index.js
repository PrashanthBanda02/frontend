import React from 'react';
import data_product from '../Assets/data';
import Item from '../Item';
import './index.css';

function Popular() {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-items">
        {data_product.map((item) => (
          <Item key={item.id} itemDetails={item} />
        ))}
      </div>
    </div>
  );
}

export default Popular;
