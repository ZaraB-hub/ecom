
'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const handleNavTextClick = () => {
        setIsOverlayOpen(!isOverlayOpen);
    };

    return (
        <nav className="flex content-center justify-between bg-red-100 px-8">
            <Link href='/'>
                <div className="flex content-center img_container">
                    <img
                        src="/assets/images/logo.png"
                        alt="Logo"
                        className="nav_logo items-center pt-3 cursor-pointer"
                    />
                </div>
            </Link>

            <div className="nav_text flex items-center">
                <Link href="/products">
                    <div
                        className="nav__text cursor-pointer"
                        onClick={handleNavTextClick}
                    >
                        New
                    </div>
                </Link>
                <Link href="/products">
                    <div
                        className="nav__text cursor-pointer"
                        onClick={handleNavTextClick}
                    >
                        Clothes
                    </div>
                </Link>
                <Link href="/products">
                    <div
                        className="nav__text cursor-pointer"
                        onClick={handleNavTextClick}
                    >
                        Accessories
                    </div>
                </Link>
                <Link href="/products">
                    <div
                        className="nav__text cursor-pointer"
                        onClick={handleNavTextClick}
                    >
                        Sale
                    </div>
                </Link>
            </div>

            <div className="flex items-center icons">
                <img src="assets/icons/search.svg" alt="" className='cursor-pointer' />
                <Link href="/wishlist">
                    <img src="assets/icons/heart.svg" alt="" className='cursor-pointer' />
                </Link>
                <Link href="/bag">
                    <img src="assets/icons/iconbag.svg" alt="" className='cursor-pointer' />
                </Link>
            </div>

            
        </nav>
    );
};

export default Navbar;
