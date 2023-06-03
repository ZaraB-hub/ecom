import React from 'react'
import ProductComponent from './Product'

const ProductList = () => {
  return (
    <div className="flex flex-col">
        <div className="title m-5 text-center">best sellers</div>
        <div className="flex justify-between px-5 ">
          <img src="/assets/icons/left.svg" alt="" />
              <div className="product_list flex justify-around flex-grow">
                  <ProductComponent/>
                  <ProductComponent/>
                  <ProductComponent/>
              </div>
          <img src="/assets/icons/🦆 icon _chevron right_.svg" alt="" />
        </div>
    </div>
  )
}

export default ProductList