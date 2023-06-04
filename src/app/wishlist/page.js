import ProductComponent from "@/components/Product";
import '@/styles/productpage.css'
import { wishlist } from "@/utils/data";


export default function Wishlist() {
    return (

        <>
            <div className="title text-center p-10"> wishlist</div>
            <div className="items flex-wrap flex justify-start  px-14">
                {wishlist.length > 0 ? (
                    wishlist.map((item, index) => (
                        <ProductComponent

                            name={item.name}
                            price={item.price}
                        />
                    ))
                ) : (
                    <p className="text-center w-full pb-12">Your wishlist is empty.</p>
                )}
            </div>

        </>

    )
}
