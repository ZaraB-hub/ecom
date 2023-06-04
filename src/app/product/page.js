
import ProductComponent from "@/components/Product";
import ProductList from "@/components/ProductList";
import '@/styles/productpage.css'
import Image from 'next/image';




export default function Product() {
    return (

        <>
        <div className="flex items-center justify-center">
            <div className="w-1/2 images items-center justify-center pb-10">
                <div className="dif_images">
                </div>
                <div className="main_img pt-10 ">
                    <Image
                    src="/assets/images/blush.webp"
                    alt="product img"
                    width={300}
                    height={500}
                    id="product_img"/>
                </div>
             </div>

            <div className="information items-center justify-center">bye</div>
        </div>

        <ProductList title={"You'll like these too"}/>
        <div className="pb-24"></div>
        </>

    )
}
