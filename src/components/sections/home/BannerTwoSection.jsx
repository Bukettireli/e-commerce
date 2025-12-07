import React from 'react';

function BannerTwoSection() {
    return (
        <section className="w-full bg-[#FAFAFA] py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="relative flex flex-col lg:flex-row lg:items-center justify-between bg-white shadow-lg rounded-lg overflow-hidden lg:overflow-visible">
                    
                    <div className="w-full lg:w-[45%] p-10 md:p-16 flex flex-col justify-center text-center lg:text-left lg:order-1 lg:gap-7">
                      
                        <p className="text-sm font-bold text-gray-500 mb-2">
                            SUMMER 2020
                        </p>
                        
                        <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
                            Part of the Neural Universe
                        </h2>
                        
                        <p className="text-base text-gray-500 mb-8 max-w-md mx-auto lg:mx-0">
                            We know how large objects will act, but things on a small scale.
                        </p>

                    
                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                            
                            <a 
                                href="/buy"
                                className="bg-[#2DC071] text-white font-bold text-sm py-[15px] px-10 rounded-[5px] w-full sm:w-fit text-center transition duration-300 hover:bg-[#24a05e] uppercase tracking-wide"
                            >
                                BUY NOW
                            </a>
                            
                            <a 
                                href="/read"
                                className="border border-[#2DC071] text-[#2DC071] font-bold text-sm py-[15px] px-10 rounded-[5px] w-full sm:w-fit text-center transition duration-300 hover:bg-[#f0f9f4] uppercase tracking-wide"
                            >
                                READ MORE
                            </a>
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex-shrink-0 lg:order-2">
                        <img 
                            src="/images/banner2.png" 
                            alt="Neural Universe Model"
                            className="
                                hidden lg:block           
                                absolute z-10             
                                w-[725px] h-[774px]       
                                -top-[211px] -left-[137px] 
                                object-cover
                            "
                            style={{ filter: 'drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))' }} 
                        />
                        
                        <img 
                            src="/images/banner2.png" 
                            alt="Neural Universe Model"
                            className="lg:hidden w-full h-auto object-cover" 
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default BannerTwoSection;