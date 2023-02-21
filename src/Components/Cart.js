import React, { useState, useEffect } from "react";
import { FaTimes, FaTrash } from "react-icons/fa";
import "../styles/cart.css";
import pay1 from "../images/amazon-pay.png";
import pay2 from "../images/mastercard.jpg";
import pay3 from "../images/opay.jpeg";
import pay4 from "../images/paypal.png";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Cart = ({ cart, setCart, handleChange }) => {

    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
        toast.error('Removed from cart', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.price));
        setPrice(ans);
    };

    useEffect(() => {
        handlePrice();
    });

    return (
        <>
            <article>
                {cart.map((item) => (
                    <div className="cart_box" key={item.id}>
                        <div className="cart_img">
                            <img src={item.img} alt="" />
                            <p>{item.title}</p>
                        </div>
                        <div>
                            <button onClick={() => handleChange(item, -1)}>-</button>
                            <button>{item.amount}</button>
                            <button onClick={() => handleChange(item, 1)}>+</button>
                        </div>
                        <div>
                            <span>$ {item.price}</span>
                            <button onClick={() => handleRemove(item.id)}><FaTrash title="Remove from cart" /></button>
                        </div>
                    </div>
                ))}
                <div className="total">
                    <span>Total Price :</span>
                    <span> ${price}</span>
                </div>


                <Popup trigger=
                    {<button className="checkout">Checkout</button>}
                    modal nested>
                    {
                        close => (
                            <div className='modal'>
                                <div className="close-btn">
                                    <button onClick=
                                        {() => close()}>
                                        <FaTimes />
                                    </button>
                                </div>
                                <div className='payment'>
                                    <div className="container px-5 py-12 mx-auto">
                                        <div className="flex flex-col text-center w-full mt-2 mb-4">
                                            <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">Pay through any of these payment platforms:</h1>
                                        </div>

                                        <div className="flex flex-wrap -m-4">
                                            <div className="div-img lg:w-1/4 md:w-1/2 p-4 w-full">
                                                <a href="/store" rel="noopener noreferrer" className="block relative h-48 rounded overflow-hidden">
                                                    <img alt="ecommerce" className="border-2 border-green-500 object-cover object-center w-full h-full block" src={pay1} />
                                                </a>
                                            </div>
                                            <div className="div-img lg:w-1/4 md:w-1/2 p-4 w-full">
                                                <a href="/store" rel="noopener noreferrer" className="block relative h-48 rounded overflow-hidden">
                                                    <img alt="ecommerce" className="border-2 border-green-500 object-cover object-center w-full h-full block" src={pay2} />
                                                </a>
                                            </div>
                                            <div className="div-img lg:w-1/4 md:w-1/2 p-4 w-full">
                                                <a href="/store" rel="noopener noreferrer" className="block relative h-48 rounded overflow-hidden">
                                                    <img alt="ecommerce" className="border-2 border-green-500 object-cover object-center w-full h-full block" src={pay3} />
                                                </a>
                                            </div>
                                            <div className="div-img lg:w-1/4 md:w-1/2 p-4 w-full">
                                                <a href="/store" rel="noopener noreferrer" className="block relative h-48 rounded overflow-hidden">
                                                    <img alt="ecommerce" className="border-2 border-green-500 object-cover object-center w-full h-full block" src={pay4} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </Popup>

            </article>
            <ToastContainer />


        </>
    );
};

export default Cart;