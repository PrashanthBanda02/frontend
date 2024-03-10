import React from 'react';
import './index.css';

function NewsLetter() {
  return (
    <div className="newsLetter">
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>Subscribe to our newsletter and stay updated!</p>
      <div>
        <input type="email" placeholder="Your Mail Id" />
        <button type="button">Subscribe</button>
      </div>
    </div>
  );
}
export default NewsLetter;
