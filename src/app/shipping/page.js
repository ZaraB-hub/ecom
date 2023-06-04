import PinkButton from '@/components/PinkButton'
import PriceComponent from '@/components/PriceComponent'
import '@/styles/payment.css'
import '@/styles/shipping.css'
import '@/styles/bag.css'
import ShippingComponent from '@/components/ShippingComponent'
export default function Shipping() {
    return (

        <div className="flex ">
            <div className="w-1/2">
                <div className="card flex flex-col ms-24">
                    <div className="card-title pb-7 pt-12 text-start">Shipping Information</div>
                    <div className="card-fields">
                        <form className='pb-14'>

                            <div className="flex  justify-between ">
                                <div className='flex flex-col pb-3'>
                                    <label htmlFor="expiryDate" className='input_text'>First Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Enter your first name"
                                        required
                                        className='p-1'

                                    />
                                </div>
                                <div className='flex flex-col pb-3 '>
                                    <label htmlFor="cvv" className='input_text'>Last Name</label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        placeholder="Enter your last name"
                                        required
                                        className='p-1'

                                    />
                                </div>
                            </div>

                            <div className='flex flex-col pb-3'>
                                <label htmlFor="cardNumber" className='input_text'>Country</label>
                                <input
                                    type="text"
                                    id="cardNumber"
                                    placeholder="Enter country"
                                    required
                                    className='p-1'

                                />
                            </div>

                            <div className='flex flex-col pb-3'>
                                <label htmlFor="cardHolderName" className='input_text'>Adress</label>
                                <input
                                    type="text flex-col"
                                    id="cardHolderName"
                                    placeholder="Enter adress"
                                    required
                                    className='p-1'
                                />
                            </div>

                            <div className='flex flex-col pb-3'>
                                <label htmlFor="cardHolderName" className='input_text'>City</label>
                                <input
                                    type="text flex-col"
                                    id="cardHolderName"
                                    placeholder="Enter city"
                                    required
                                    className='p-1'

                                />
                            </div>

                            <div className='flex flex-col pb-3'>
                                <label htmlFor="cardHolderName" className='input_text'>Phone</label>
                                <input
                                    type="text flex-col"
                                    id="cardHolderName"
                                    placeholder="Enter phone number"
                                    required
                                    className='p-1'

                                />
                            </div>

                        </form>


                    </div>
                </div>
                <div className="mx-36">
                    <PinkButton />
                    <p className="return pt-6 mx-22	pb-6 text-center">return to shipping</p>
                </div>


            </div>
            <div className="w-1/2 flex flex-col items-end pt-10">
                <div className="w_77 flex flex-col"><ShippingComponent/></div>
                <div className="totals flex flex-col line_color w_77 pb-10 pt-10">
                    <div className="flex justify-between me-4">
                        <div id='price'> subtotal</div>
                        <div id='price'>$126.00</div>
                    </div>
                    <div className="flex justify-between me-4">
                        <div id='price'>subtotal</div>
                        <div id='price'>$126.00</div>
                    </div>
                </div>
                <div className="w_77">
                    <div className="total_all flex justify-between   pt-6 mb-3 me-4">
                        <div id='product_name'>total</div>
                        <div id='product_name'>$126.00</div>
                    </div>
                </div>
            </div>



        </div>



    )
}
