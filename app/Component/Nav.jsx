"use client"
import Link from 'next/link';
import React from 'react';


const Nav = () => {
    return (
        <div className='py-3 flex justify-between'>
            <div className="">
                <h1 className='text-xl font-bold'>Blog <span className='text-2xl font-extrabold text-rose-700'>Viewer</span></h1>
            </div>
            <div className="flex items-center gap-5 text-lg font-semibold">
                <p>Home</p>
                <p>Profile</p>
                <Link href='/' className='bg-rose-500 py-2 px-4 rounded-lg text-white font-semibold'> Login  </Link>
                <Link href='/' className='bg-rose-500 ml-5 py-2 px-4 rounded-lg text-white font-semibold'> Registration </Link>
            </div>
            
        </div>
    );
};

export default Nav;