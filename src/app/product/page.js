"use client"
import PinkButton from "@/components/PinkButton";
import ProductComponent from "@/components/Product";
import ProductList from "@/components/ProductList";
import '@/styles/productpage.css'
import Image from 'next/image';
import { useState } from "react";




export default function Product() {

    const [isFilled, setIsFilled] = useState(false)
    const handleHeartClick = () => {
        setIsFilled(!isFilled);
        if (isFilled) {
            dispatch(removeFromWishlist(id));
        } else {
            dispatch(addToWishlist({ id, name, price }));
        }
    };
    return (


        <>
            <div className="flex items-center justify-center">
                <div className="w-1/2 images items-center flex justify-around pb-10">
                    <div className="dif_images flex flex-col justify-between ">
                        <img src="/assets/images/blush.webp" style={{ width: '100px' }} alt="product photo" className="pb-4 pt-4" />
                        <img src="/assets/images/blush.webp" style={{ width: '100px' }} alt="product photo" className="pb-4" />
                        <img src="/assets/images/blush.webp" style={{ width: '100px' }} alt="product photo" className="pb-4" />
                    </div>
                    <div className="main_img pt-10 ">
                        <Image
                            src="/assets/images/blush.webp"
                            alt="product img"
                            width={300}
                            height={500}
                            id="product_img" />
                    </div>
                </div>

                <div className="information items-start justify-space-around flex flex-col">
                    <div className="product_name font-base ">Top in white</div>
                    <div className="product_name font-bold pt-2 pb-6" >$42.00</div>
                    <div className="flex">
                        <button className="btn pink_button border-2 border-black text-white p-2 px-10 font-bold text-base w-80 uppercase">add to cart</button>


                    </div>
                </div>
            </div>

            <ProductList title={"You'll like these too"} />
            <div className="pb-24"></div>
        </>

    )
}
