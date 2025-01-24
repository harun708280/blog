"use client"
import Link from 'next/link';
import React from 'react';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

const Nav = () => {
    return (
        <div className='py-3 flex justify-between'>
            <div className="">
                <h1 className='text-xl font-bold'>Blog <span className='text-2xl font-extrabold text-rose-700'>Viewer</span></h1>
            </div>
            <div className="flex items-center gap-5 text-lg font-semibold">
                <Link href='/'>Home</Link>
                <Link href='/dashboard'>Profile</Link>
                
                <LoginLink>
                <button className='bg-rose-500 py-2 px-4 rounded-lg text-white font-semibold'>Login</button>
                </LoginLink>
                <RegisterLink>
                <button className='bg-rose-500 py-2 px-4 rounded-lg text-white font-semibold'>Registration</button>
                </RegisterLink>
                
            </div>
            
        </div>
    );
};

export default Nav;