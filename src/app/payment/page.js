import ProductList from '@/components/ProductList';
import Image from 'next/image';
import PinkButton from '@/components/PinkButton'
import '@/styles/payment.css'
import Link from "next/link";

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
                                className='p-1'

                            />
                        </div>
                        <div className='flex flex-col pb-3'>
                            <label htmlFor="cardHolderName" className='input_text'>Name on Card</label>
                            <input
                                type="text flex-col"
                                id="cardHolderName"
                                placeholder="Enter cardholder name"
                                required
                                className='p-1'

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
                                    className='p-1'

                                />
                            </div>
                            <div className='flex flex-col pb-3 '>
                                <label htmlFor="cvv"  className='input_text'>Security Code</label>
                                <input
                                    type="text"
                                    id="cvv"
                                    placeholder="Enter Security Code"
                                    required
                                    className='p-1'

                                />
                            </div>
                        </div>
                    </form>


                </div>
            </div>
            <Link href="/">
                        <PinkButton text={"pay now"} />
                    </Link>
                    <Link href="/shipping">
                        <p className="return pt-6 mx-22	pb-6 text-center">return to shipping</p>
                    </Link>
        </div>


    )
}
