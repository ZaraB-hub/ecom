import Image from 'next/image';
import React from 'react';



const Overlay = ({ text }) => {
  return (
    <div className="overlay">
      <img src="assets/icons/iconbag.svg" alt="" className='cursor-pointer'/>
      <div className="overlay btn pink_button border-2 border-black text-white font-bold text-sm uppercase">{"add to cart"}</div>
    </div>);
};

const ProductComponent = () => {
  return (
    <div className="product">
      <div className="img">
        <img src="/assets/images/blush.webp" alt="product photo" />
        <Overlay text="Quick Buy" />
      </div>
      <div className="py-3 px-4 bg-white">
        <h2 id="product_name" className="mb-1">Product Name</h2>
        <p id="price">$128</p>
      </div>
    </div>
  );
};


export default ProductComponent;
