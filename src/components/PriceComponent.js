import React from 'react';
import '@/styles/price_comp.css'
import '@/styles/bag.css'
import { bag } from '@/utils/data';

const PriceComponent = ({ name, price }) => {
    const remove = () => {
       console.log("remove")
    };

    return (
        <div className='mx-10 mb-10'>
            <div className='price_comp_size flex pb-5  line_color'>
                <img src="/assets/images/blush.webp" alt="" id='cab' />
                <div className='flex flex-col justify-between pro_text '>
                    <div>
                        <h2 id='product_name' className='mb-1'>{name}</h2>
                        <p id='price'>{price}</p>

                    </div>
                    <div className="flex">
                        <div className='flex bg-white justify-around'>
                            <img src="/assets/icons/minus.svg" alt="" className='cursor-pointer' />
                            <div className='border-l border-r px-5'>1</div>
                            <img src="/assets/icons/plus.svg" alt="" className='cursor-pointer' />
                        </div>
                        <p className='ps-11 cursor-pointer' onClick={ remove()}>REMOVE</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PriceComponent;
