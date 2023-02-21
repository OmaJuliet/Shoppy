import React, { useState, useEffect } from 'react';
import { FaCog, FaHeading, FaLaptop } from 'react-icons/fa';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import "../styles/account.css";




const Account = () => {
    const [word, setWord] = useState(<>
        <h2 className="tech-title">Oops! Nothing here yet</h2>
        <img src="" className="w-8 h-8" alt="dummy nothing here" />
    </>
    )

    useEffect(() => {
        console.log("Services changed")

        return () => {
            console.log("Return from service changed: Cleanup function called")
        };
    }, [word])



    return (
        <>
            <Navbar />
            <section className="services-section">
                <section>
                    <section onClick={() => setWord(
                        <>
                            <heading className="tech-title">Profile</heading>
                            <div className="flex flex-wrap">
                                <img src="" classname="w-2 h-2 rounded-full" alt="profile" />
                                <p className="tech-info">User Name</p>
                            </div>
                            <p className="text-left">Bio</p>
                            <Link to="/store"><button className="port-btn">Edit Profile</button></Link>
                        </>
                    )} className='service-name'><FaHeading /><span>Profile</span>
                    </section>


                    <section onClick={() => setWord(
                        <>
                            <heading className="tech-title">Collection</heading>
                            <p className="tech-info">I'm a developer who likes to document her tech.</p>
                            <a href="/success" target="_blank" rel="noreferrer">
                                <button className="port-btn">Button</button></a>
                        </>
                    )} className='service-name'><FaLaptop /><span>Collection</span>
                    </section>


                    <section onClick={() => setWord(
                        <>
                            <heading className="tech-title">Settings</heading>
                            <div className="text-left align-left mt-4">
                                <input type="checkbox" className="" />
                                <label htmlFor="remember"> Enable Dark Mode</label>
                            </div>
                            <a href="/" target="_blank" rel="noreferrer"><button className="port-btn">button</button></a>
                        </>
                    )} className='service-name'><FaCog /><span>Settings</span>
                    </section>
                </section>

                <div className="info">
                    <p className="info-title">{word}</p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Account