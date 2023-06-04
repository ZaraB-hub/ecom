'use client'
import React, { useState } from 'react';

const HeartIcon = () => {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
  };

  return (
    <div onClick={handleClick}>
      {isFilled ? (
        <img src="assets/icons/heart.svg" alt="" className='cursor-pointer'/>
              ) : (
        <img src="assets/icons/heart.svg.png" alt="Empty Heart" />
      )}
    </div>
  );
};

export default HeartIcon;

