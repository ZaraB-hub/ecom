import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex content-center justify-between bg-red-100 px-8">

                <Link href='/'>
                    <div className="flex content-center img_container">
                        <img
                            src="/assets/images/logo.png"
                            alt="Logo"
                            className=" nav_logo items-center pt-3 cursor-pointer"
                        />
                    </div>
                </Link>

            <div className="nav_text flex items-center">
                <Link href="">
                    <div className="nav__text cursor-pointer">New</div>
                </Link>
                <div className="nav__text cursor-pointer">Clothes </div>
                <div className="nav__text cursor-pointer">acessories </div>
                <div className="nav__text cursor-pointer">sale </div>
            </div>

            <div className="flex items-center icons">
                <img src="assets/icons/search.svg" alt="" className='cursor-pointer' />
                <Link href="/wishlist"><img src="assets/icons/heart.svg" alt="" className='cursor-pointer'/></Link>
                <Link href="/bag"><img src="assets/icons/iconbag.svg" alt="" className='cursor-pointer'/></Link>
            </div>

        </nav >
    );
};

export default Navbar;
