import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-100 flex  flex-col md:flex-row  pb-10 items-center ">
      <div className="w-1/2 flex justify-center footer_text_items ps-20  txtsm">

        <div className="flex flex-col text_items">
          <h6 className='footer_title'>shop</h6>
          <p className="fotter_text">clothes</p>
          <p className="fotter_text">accessories</p>
          <p className="fotter_text">new</p>
        </div>

        <div className="flex flex-col text_items">
          <h6 className='footer_title'>customer service</h6>
          <p className="fotter_text">help & contact</p>
          <p className="fotter_text">delivery & information</p>
          <p className="fotter_text">size guide</p>
          <p className="fotter_text">returns</p>
        </div>

        <div className="flex flex-col text_items">
          <h6 className='footer_title'>company</h6>
          <p className="fotter_text">about us</p>
          <p className="fotter_text">impact</p>
          <p className="fotter_text">store locator</p>
        </div>

      </div>

      <div className="w-1/2 flex flex-col justify-center footer_text_items2 ">
        <div className='footer_title whitespace-pre-wrap no-pointer'>Sign up to our newsletter. Don’t miss<br></br>
          out on our dreamy new product<br></br>
          drops or exclusive offers.</div>
          
        <div>
          <div className='flex btnsm'>
            <input
              type="email"
              placeholder="Enter your email"
              className="border-2 border-black  px-4 py-2"
            />
            <div className="bg-black">
              <button className="btn text-white p-2 px-10 font-bold text-base">SUBSCRIBE</button>
            </div>
          </div>
          <div className='info whitespace-pre-wrap mt-2'>By signing up you agree to our <span className='underline font-semibold cursor-pointer'>Terms & Conditions</span>.
            <br></br>You can unsubscribe at anytime you wish.</div>
        </div>
        <div className='socials flex mt-5'>
          <img src="/assets/icons/ig.svg" alt=""  className='cursor-pointer'/>
          <img src="/assets/icons/fb.svg" alt=""className="cursor-pointer" />
          <img src="/assets/icons/pin.svg" alt=""className="cursor-pointer" />
          <img src="/assets/icons/twit.svg" alt="" className="cursor-pointer"/>
          <img src="/assets/icons/tiktok.svg" alt="" className="cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
