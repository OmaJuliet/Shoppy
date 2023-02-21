import { useState, useEffect } from 'react'
import Slider from 'react-slick'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "../styles/comingsoon.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const notifyme = () => {
    toast.success('Item has been added to your saved items', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}


function ComingSoon() {
    //Timer function
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`04/02/${year}`) - +new Date();

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    // const [year] = useState(new Date().getFullYear());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];
    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });



    //sliding function
    const [sliderRef, setSliderRef] = useState(null);

    const sliderSettings = {
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                },
            },
        ],
    }

    const courseCards = [
        {
            id: '1',
            imageSrc:
                'https://source.unsplash.com/Hin-rzhOdWs/600x300',
            title: 'Macbooks',
            description: 'Lorem ipsum dolor sit amet, consectur dolori. A townhall different from balablu....bulabla.....blublu....',
        },
        {
            id: '2',
            imageSrc:
                'https://source.unsplash.com/WM7RomoFmy0/600x300',
            title: 'iPhones',
            description: 'Lorem ipsum dolor sit amet, consectur dolori. A townhall different from balablu....bulabla.....blublu....',
        },
        {
            id: '3',
            imageSrc:
                'https://source.unsplash.com/ejLp_lrQvyI/600x300',
            title: 'Dell Laptops',
            description: 'Lorem ipsum dolor sit amet, consectur dolori. A townhall different from balablu....bulabla.....blublu....',
        },
        {
            id: '4',
            imageSrc:
                'https://source.unsplash.com/1t1CBECuqvs/600x300',
            title: 'Xiaomi Phones',
            description: 'Lorem ipsum dolor sit amet, consectur dolori. A townhall different from balablu....bulabla.....blublu....',
        },
        {
            id: '5',
            imageSrc:
                'https://source.unsplash.com/XlEafYGDvV0/600x300',
            title: 'Monitors & Wireless Keyboards',
            description: 'Lorem ipsum dolor sit amet, consectur dolori. A townhall different from balablu....bulabla.....blublu....',
        },
        {
            id: '6',
            imageSrc:
                'https://source.unsplash.com/Hing5iQTUnM/600x300',
            title: 'iPads, Airpods, Apple Watches, etc..',
            description: 'Lorem ipsum dolor sit amet, consectur dolori. A townhall different from balablu....bulabla.....blublu....',
        },
        {
            id: '7',
            imageSrc:
                'https://source.unsplash.com/77aeRev0fl8/600x300',
            title: 'Huawei Phones',
            description: 'Lorem ipsum dolor sit amet, consectur dolori. A townhall different from balablu....bulabla.....blublu....',
        },
        {
            id: '8',
            imageSrc:
                'https://source.unsplash.com/hGV2TfOh0ns/600x300',
            title: 'Monitors and Wireless Mouses',
            description: 'Lorem ipsum dolor sit amet, consectur dolori. A townhall different from balablu....bulabla.....blublu....',
        },
    ]

    return (
        <>
            <div className='center-3 z-0' />
            <div className='content z-10'>
                <h2 className="coming-soon-title">Gadgets Plug</h2>
                <div className="bottom-p">
                    <p>This is to announce to our beloved customers that we'd be adding a new line of products to our shopping collection - Gadgets. Stay Tuned</p>
                    <span className="date">Coming in: {timerComponents.length ? timerComponents : <span className="open">We're Open! 🔥</span>}</span>
                </div>

                <Slider ref={setSliderRef} {...sliderSettings}>
                    {courseCards.map((card, index) => (
                        <div key={index} className='cards'>
                            <div>
                                <img src={card.imageSrc} className='card-image' alt={card.title} />
                            </div>
                            <div className='text-info'>
                                <div className='card-header'>
                                    <h2 className="">{card.title}</h2>
                                </div>
                                <p className="">{card.description}</p>
                            </div>
                            <div className="card-btns">
                                <button className='' onClick={notifyme}>Save </button>
                            </div>
                        </div>
                    ))}
                </Slider>

                <div className='controls'>
                    <button onClick={sliderRef?.slickPrev}>
                        <FaArrowLeft />
                    </button>
                    <button onClick={sliderRef?.slickNext}>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default ComingSoon;
