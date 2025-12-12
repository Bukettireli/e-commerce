import React from 'react';

function AboutHero() {
    return (
        <section className="w-full bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    
                   
                    <div className="flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1">
                        <p className="text-base font-bold text-[#252B42]">
                            ABOUT COMPANY
                        </p>
                        
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#252B42] leading-tight">
                            ABOUT US
                        </h1>
                        
                        <p className="text-base text-[#737373] max-w-md mx-auto lg:mx-0">
                            We know how large objects will act, but things on a small scale
                        </p>
                        
                        <div className="flex justify-center lg:justify-start">
                            <button className="bg-[#23A6F0] text-white px-10 py-3 rounded-[5px] text-sm font-bold hover:bg-[#1a8cd8] transition">
                                Get Quote Now
                            </button>
                        </div>
                    </div>

                    <div className="relative order-1 lg:order-2 h-[400px] lg:h-[600px]">
                        
                        <div className="absolute inset-0 pointer-events-none">
                         
                            <div 
                                className="absolute rounded-full bg-[#FFE9EA]"
                                style={{
                                    width: '484px',
                                    height: '484px',
                                    right: '-100px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    opacity: 1
                                }}
                            ></div>
                            
                           
                            <div 
                                className="absolute rounded-full bg-[#FFE9EA]"
                                style={{
                                    width: '77px',
                                    height: '77px',
                                    top: '20px',
                                    left: '-20px',
                                    opacity: 1
                                }}
                            ></div>

                            <div 
                                className="absolute rounded-full bg-[#977DF4]"
                                style={{
                                    width: '15px',
                                    height: '15px',
                                    top: '100px',
                                    right: '50px',
                                    opacity: 1
                                }}
                            ></div>

                            
                            <div 
                                className="absolute rounded-full bg-[#977DF4]"
                                style={{
                                    width: '12px',
                                    height: '12px',
                                    bottom: '80px',
                                    left: '30px',
                                    opacity: 1
                                }}
                            ></div>
                        </div>

                    

                       
                        <div className="relative z-10 w-full h-full flex items-center justify-center">
                            <img 
                                src="/images/about/image.png" 
                                alt="About Us"
                                className="w-full max-w-[571px] h-auto object-contain"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default AboutHero;