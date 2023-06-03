import Image from 'next/image';
import React from 'react';

const ProductComponent = () => {
  return (
    <div className="product">
      <div className="img">
        <img src="/assets/images/blush.webp" alt="product photo" />
      </div>
      <div className="py-3 px-4 bg-white">
        <h2 id='product_name' className='mb-1'>Product Name</h2>
        <p id='price'>$128</p>
      </div>
    </div>
  );
};

export default ProductComponent;
