
import PinkButton from '@/components/PinkButton'
import PriceComponent from '@/components/PriceComponent'
import '@/styles/bag.css'


export default function Bag() {
    return (

        <>
        <div className="title text-center p-9"> your bag</div>
            
        <div className="w-full flex">
            <div className='w-8/12 items-center'>
            <PriceComponent/>
            <PriceComponent/>
            </div>
            <div className='flex justify-center pb-10'>
                <div className="bg-white order_summary flex flex-col justify-center items-center p-8 h-64" >
                    <div className='order_text'>
                        <div className="order_title pb-2">Order summary</div>
                        <p className="order_subtext  line_color pb-4">Shipping and taxes are calculated at checkout.
                        Discount codes can be applied at checkout
                        </p>
                    </div>
                    <div className='order_info p-4'>
                        <div className="order_price flex justify-between pb-4 px-4">
                            <div className="subtotal">SUBTOTAL</div>
                            <div id='order_price'>$ 128.00</div>
                        </div>
                        <button className="btn pink_button border-2 border-black text-white p-2 px-10 font-bold text-base w-80">CHECKOUT NOW</button>
    

                    </div>
                </div>
            </div>
        </div>

</>
    )
}
