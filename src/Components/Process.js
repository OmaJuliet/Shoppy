import React from 'react'

const Process = () => {
    return (
        <>
            <section>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-semibold mb-2">Steps</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">Steps involved to enjoy a seamless experience at MyShopping Paddy.</p>
                    </div>

                    <div className="flex flex-wrap -mx-4 -mt-14 mb-6 text-center">

                        <div className="p-4 md:w-1/4 sm:w-1/2 w-1/2">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <div className="text-white text-2xl font-semibold rounded-full p-2 m-auto bg-green-500 w-12 h-12 mb-3 inline-block">1</div>
                                <h3 className="font-semibold text-xl">Ordering</h3>
                                <p className="leading-relaxed">Texts here</p>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 sm:w-1/2 w-1/2">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <div className="text-white text-2xl font-semibold rounded-full p-2 m-auto bg-green-500 w-12 h-12 mb-3 inline-block">2</div>
                                <h3 className="font-semibold text-xl">Payment</h3>
                                <p className="leading-relaxed">Texts here</p>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 sm:w-1/2 w-1/2">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <div className="text-white text-2xl font-semibold rounded-full p-2 m-auto bg-green-500 w-12 h-12 mb-3 inline-block">3</div>
                                <h3 className="font-semibold text-xl">Packaging</h3>
                                <p className="leading-relaxed">Texts here</p>
                            </div>
                        </div>
                        
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-1/2">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <div className="text-white text-2xl font-semibold rounded-full p-2 m-auto bg-green-500 w-12 h-12 mb-3 inline-block">4</div>
                                <h3 className="font-semibold text-xl">And Delivery</h3>
                                <p className="leading-relaxed">Texts here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Process