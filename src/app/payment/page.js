import ProductList from '@/components/ProductList';
import Image from 'next/image';
import PinkButton from '@/components/PinkButton'
import '@/styles/payment.css'

export default function Payment() {
    return (

        <div className='flex  items-center flex-col p-20'>
            <div className="card flex flex-col">
                <div className="card-title pb-6">Payment</div>
                <div className="card-fields">
                    <form className='pb-14'>
                        <div className='flex flex-col pb-3'>
                            <label htmlFor="cardNumber" className='input_text'>Card Number</label>
                            <input
                                type="text"
                                id="cardNumber"
                                placeholder="Enter card number"
                                required
                            />
                        </div>
                        <div className='flex flex-col pb-3'>
                            <label htmlFor="cardHolderName" className='input_text'>Name on Card</label>
                            <input
                                type="text flex-col"
                                id="cardHolderName"
                                placeholder="Enter cardholder name"
                                required
                            />
                        </div>
                        <div className="flex card_gap">
                            <div className='flex flex-col pb-3'>
                                <label htmlFor="expiryDate" className='input_text'>Expiration Date</label>
                                <input
                                    type="text"
                                    id="expiryDate"
                                    placeholder="MM/YY"
                                    required
                                />
                            </div>
                            <div className='flex flex-col pb-3 '>
                                <label htmlFor="cvv"  className='input_text'>Security Code</label>
                                <input
                                    type="text"
                                    id="cvv"
                                    placeholder="Enter Security Code"
                                    required
                                />
                            </div>
                        </div>
                    </form>


                </div>
            </div>
            <PinkButton />
            <p className="return pt-6	">return to shipping</p>
        </div>


    )
}
