import React, { useState } from 'react';
import { FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa';
import user from "../images/user.png";




const Navbar = ({ setShow, size }) => {

    const [navbar, setNavbar] = useState(false);


    return (
        <>
            <nav className="w-full shadow">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-4">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="/success" rel="noopener noreferrer" className="text-2xl font-bold text-green-500">
                            Shoppy
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-green-500 rounded-md outline-none focus:border-green-500 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <FaTimes />
                                ) : (
                                    <FaBars />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}  >
                        <ul className="items-center justify-center space-y-8 md:flex lg:space-x-6 md:space-x-2 md:space-y-0">
                            <li><a href="/success" onClick={() => setShow(true)} rel="noopener noreferrer" className="text-xl md:text-lg hover:text-green-500 hover:underline cursor-pointer">
                                Home
                            </a></li>
                            <li><a href="/contact" onClick={() => setShow(true)} rel="noopener noreferrer" className="text-xl md:text-lg hover:text-green-500 hover:underline cursor-pointer">
                                Contact
                            </a></li>
                            <li><a href="/store" className="text-xl md:text-lg hover:text-green-500 hover:underline cursor-pointer">
                                Collection
                            </a></li>
                            <li><a href="/" className="text-xl md:text-lg hover:text-green-500 hover:underline cursor-pointer">
                                Logout
                            </a></li>
                        </ul>


                        <div className="mt-2 space-y-2 lg:hidden md:hidden md:inline-block mt-6 mb-2">
                            <p onClick={() => setShow(true)} className="text-xl md:text-lg hover:text-green-500 hover:underline cursor-pointer">
                                Back to store
                            </p>

                            <div className="flex flex-wrap">
                                <span className="text-green-500 text-xl cursor-pointer" onClick={() => setShow(false)}>
                                    <FaShoppingCart className="text-2xl mt-6" /></span>
                                <p className="mt-4 ml-1 text-black rounded">{size}</p>
                            </div>

                            <a href="/account" rel="noopener noreferrer">
                                <img src={user} className="mt-6 mb-2 w-10 h-10 rounded-full" alt="user" />
                            </a>
                        </div>
                    </div>


                    <div className="hidden md:inline-block">

                        <div className="flex flex-wrap">
                            <p onClick={() => setShow(true)} className="mr-6 mt-2 text-xl md:text-lg hover:text-green-500 hover:underline cursor-pointer">
                                Back to store
                            </p>

                            <span className="text-green-500 text-xl cursor-pointer" onClick={() => setShow(false)}>
                                <FaShoppingCart className="text-2xl mt-2" /></span>
                            <p className="mt-1 ml-1 text-black rounded">{size}</p>

                            <a href="/account" rel="noopener noreferrer" >
                                <img src={user} className="ml-6 w-10 h-10 rounded-full bg-gray-300" title="Your account" alt="user" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar