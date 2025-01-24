import React from 'react';
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { log } from 'console';
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
const page = async() => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    

    return (
        <div>
            <div className="flex flex-col mb-4 items-center justify-center mt-20 ">
            <h1 className='text-3xl my-3 mb-6 font-bold text-center text-gray-800'>Welcome to your profile!</h1>
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl">
                {user ? (
                    <div className="text-center">
                       
                        <img
                            src={user?.picture || 'https://via.placeholder.com/150'}
                            alt="User Avatar"
                            className="w-24 h-24 mx-auto rounded-full shadow-md border-2 border-gray-300"
                        />
                       
                        <h2 className="text-2xl font-bold mt-4 text-gray-800">
                            {user.given_name} {user.family_name}
                        </h2>
                        
                        <p className="text-gray-500">{user.email}</p>
                        
                       
                        <div className="mt-6">
                            
                            <p className="text-gray-600 text-sm">Member since: <span className="font-medium text-gray-800">2024</span></p>
                        </div>

                        
                        <div className="mt-6 flex justify-center space-x-4">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
                                Edit Profile
                            </button>
                            <LogoutLink>
                            <button className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600">
                                Log Out
                            </button>
                            </LogoutLink>
                        </div>
                    </div>
                ) : (
                    <div className="text-center">
                        <p className="text-gray-500">You are not logged in. Please log in to see your profile.</p>
                    </div>
                )}
            </div>
        </div>
            
        </div>
    );
};

export default page;