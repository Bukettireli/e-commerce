import React from 'react';

function AboutHero() {
    return (
        <section className="w-full bg-white overflow-hidden border-b border-[#ECECEC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
                    
                  
                    <div className="flex flex-col gap-5 text-center lg:text-left order-1 lg:order-1">
                        <p className="text-base font-bold text-[#252B42] tracking-wide">
                            ABOUT COMPANY
                        </p>
                        
                        <h1 className="text-4xl lg:text-6xl font-bold text-[#252B42] leading-tight">
                            ABOUT US
                        </h1>
                        
                        <p className="text-base lg:text-lg text-[#737373] max-w-sm mx-auto lg:mx-0 leading-relaxed">
                            We know how large objects will act, <br/>but things on a small scale 
                        </p>
                        
                        <div className="flex justify-center lg:justify-start mt-2">
                            <button className="bg-[#23A6F0] text-white px-10 py-3 rounded-[5px] text-sm font-bold hover:bg-[#1a8cd8] transition">
                                Get Quote Now
                            </button>
                        </div>
                    </div>

                    
                    <div className="relative order-2 lg:order-2 h-[400px] lg:h-[700px] overflow-visible">
                        
                    
                        <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-visible">
                            
                            <div 
                                className="absolute rounded-full bg-[#FFE9EA]"
                                style={{
                                    width: '484px',
                                    height: '484px',
                                    left: '58.4px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    opacity: 1,
                                    zIndex: 0
                                }}
                            ></div>

                            
                            <div 
                                className="absolute rounded-full bg-[#FFE9EA]"
                                style={{
                                    width: '77.39px',
                                    height: '77.39px',
                                    top: '11.96px',
                                    left: '0px',
                                    opacity: 1,
                                    zIndex: 1
                                }}
                            ></div>

                        
                            <div 
                                className="absolute rounded-full bg-[#FFE9EA]"
                                style={{
                                    width: '30.25px',
                                    height: '30.25px',
                                    top: '247.66px',
                                    left: '554.42px',
                                    opacity: 1,
                                    zIndex: 1
                                }}
                            ></div>

                            <div 
                                className="absolute rounded-full bg-[#977DF4]"
                                style={{
                                    width: '18px',
                                    height: '18px',
                                    top: '10%',
                                    right: '5%',
                                    zIndex: 2
                                }}
                            ></div>

                            <div 
                                className="absolute rounded-full bg-[#977DF4]"
                                style={{
                                    width: '15px',
                                    height: '15px',
                                    top: '55%',
                                    left: '0%',
                                    zIndex: 2
                                }}
                            ></div>
                        </div>

                        
                        <div className="absolute inset-0 pointer-events-none lg:hidden overflow-visible">
                          
                            <div 
                                className="absolute rounded-full bg-[#FFE9EA]"
                                style={{
                                    width: '300px',
                                    height: '300px',
                                    left: '50%',
                                    top: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: 0
                                }}
                            ></div>

                           
                            <div 
                                className="absolute rounded-full bg-[#FFE9EA]"
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    top: '-20px',
                                    left: '-20px',
                                    zIndex: 1
                                }}
                            ></div>

                          
                            <div 
                                className="absolute rounded-full bg-[#FFE9EA]"
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    top: '10px',
                                    right: '-10px',
                                    zIndex: 1
                                }}
                            ></div>

                            <div 
                                className="absolute rounded-full bg-[#977DF4]"
                                style={{
                                    width: '12px',
                                    height: '12px',
                                    top: '12%',
                                    right: '12%',
                                    zIndex: 2
                                }}
                            ></div>

                          
                            <div 
                                className="absolute rounded-full bg-[#977DF4]"
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    bottom: '15%',
                                    left: '8%',
                                    zIndex: 2
                                }}
                            ></div>
                        </div>

                       
                        <div 
                            className="absolute hidden lg:block"
                            style={{
                                width: '840px',
                                height: '668px',
                                top: '-18px',
                                left: '-60px',
                                opacity: 1,
                                zIndex: 10
                            }}
                        >
                            <img 
                                src="/images/about/image.png" 
                                alt="About Us"
                                className="w-full h-full object-contain"
                            />
                        </div>

                    
                        <div className="relative w-full h-full flex items-center justify-center lg:hidden" style={{ zIndex: 10 }}>
                            <img 
                                src="/images/about/image.png" 
                                alt="About Us"
                                className="w-full max-w-[320px] h-auto object-contain"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default AboutHero;