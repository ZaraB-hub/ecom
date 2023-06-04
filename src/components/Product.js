'use client'
import Image from 'next/image';
import React from 'react';
import HeartIcon from './HeartIcon';
import { useState } from 'react';
import { wishlist } from '../utils/data';


const Overlay = ({ text }) => {
  return (
    <div className="overlay">
      <img src="assets/icons/iconbag.svg" alt="" className='cursor-pointer'/>
      <div className="overlay btn pink_button border-2 border-black text-white font-bold text-sm uppercase">{"add to cart"}</div>
    </div>);
};



const ProductComponent = ({ name = 'Product Name', price = '$128' }) => {
  const [isFilled, setIsFilled] = useState(false);

  const handleHeartClick = () => {
    setIsFilled(!isFilled);
    if (isFilled) {
      // Add item to wishlist
      wishlist.push({ name, price });
    } else {
      // Remove item from wishlist
      const index = wishlist.findIndex(item => item.name === name && item.price === price);
      if (index !== -1) {
        wishlist.splice(index, 1);
      }
    }
  };

  return (
    <div className="product">
      <div
        className={`rectangle hidden flex items-center px-1 py-1`}
        onClick={handleHeartClick}
      >
        {isFilled ? (
          <img src="/assets/icons/heartfill.svg" alt="" className="cursor-pointer" />
        ) : (
          <img src="/assets/icons/heart.svg" alt="" className="cursor-pointer" />
        )}
      </div>
      <div className="img">
        <img src="/assets/images/blush.webp" alt="product photo" />
        <Overlay text="Quick Buy" />
      </div>
      <div className="py-3 px-4 bg-white">
        <h2 id="product_name" className="mb-1">{name}</h2>
        <p id="price">{price}</p>
      </div>
    </div>
  );
};

export default ProductComponent;

