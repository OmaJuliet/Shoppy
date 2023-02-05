import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Cards = ({ item, handleClick }) => {
    const { title, price, img } = item;

    return (
        <>
            <div className="p-4 md:w-1/3 sm:w-1/2">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img className="lg:h-72 md:h-36 h-48 w-full object-cover object-center" src={img} alt="item" />
                    <div className="px-2 py-2">
                        <h1 className="text-lg font-semibold mb-3">{title}</h1>
                        <div className="flex flex-wrap justify-between mb-2">
                            <p className="leading-relaxed">Price: ${price}</p>
                            <button onClick={() => handleClick(item)} className="bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-600">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        
        </>

    );
};

export default Cards;