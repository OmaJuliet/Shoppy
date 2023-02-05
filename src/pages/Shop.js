import React, { useState, useEffect } from "react";
import Details from "../Components/Details";
import Navbar from "../Components/Navbar";
import Cart from "../Components/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);


    const handleClick = (item) => {
        if (cart.indexOf(item) !== -1) return;
        setCart([...cart, item]);
        toast.success((item.title) + ' ' + 'has been added to cart', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };

    const handleChange = (item, d) => {
        const ind = cart.indexOf(item);
        const arr = cart;
        arr[ind].amount += d;

        if (arr[ind].amount === 0) arr[ind].amount = 1;
        setCart([...arr]);
    };


    return (
        <>
            <React.Fragment>
                <Navbar setShow={setShow} size={cart.length} />
                {show ? (
                    <Details handleClick={handleClick} />
                ) : (
                    <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
                )}
            </React.Fragment>
            <ToastContainer />
        </>
    );
};

export default App;