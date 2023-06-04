import ProductComponent from "@/components/Product";
import '@/styles/productpage.css'


export default function Wishlist() {
    return (

        <>
            <div className="title text-center p-10"> wishlist</div>
            <div className="items flex-wrap flex justify-start  px-14">
                <ProductComponent />
                <ProductComponent />
                
            </div>

        </>

    )
}
