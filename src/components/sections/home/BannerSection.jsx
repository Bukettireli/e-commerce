import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BANNER_BG_COLOR = '#23856D'; 

function BannerSection() {
    return (
        <section 
            className="w-full relative flex justify-center items-center overflow-hidden my-16" 
            style={{ backgroundColor: BANNER_BG_COLOR }}
        >
            
            <div 
                className="relative z-10 flex items-center"
                style={{
                    width: '1036px',
                    height: '711px',
                    gap: '80px',
                    paddingTop: '112px',
                    paddingBottom: '112px',
                }}
            >
            
                <div 
                    className="flex flex-col justify-center text-[#FFFFFF] flex-shrink-0"
                    style={{ 
                        width: '509px', 
                        height: '432px', 
                        paddingTop: '60px', 
                    }}
                >
                    
                    <p 
                        className="font-normal text-white mb-4" 
                        style={{ 
                            
                            width: '154px',
                            height: '30px',
                            fontFamily: 'Montserrat', 
                            fontWeight: 400, 
                            fontSize: '20px', 
                            lineHeight: '30px', 
                            letterSpacing: '0.2px',
                            marginBottom: '30px', 
                        }}
                    >
                        SUMMER 2020
                    </p>
                    
               
                    <h2 
                        className="font-bold text-white mb-4 leading-tight" 
                        style={{
                            width: '509px',
                            height: '160px',
                            fontFamily: 'Montserrat', 
                            fontWeight: 700, 
                            fontSize: '58px', 
                            lineHeight: '80px', 
                            letterSpacing: '0.2px',
                            marginBottom: '30px', 
                        }}
                    >
                        Vita Classic Product
                    </h2>
                    
                    <p className="text-base sm:text-xl mb-6 leading-[30px] max-w-[376px]" style={{ marginBottom: '30px' }}>
                        We know how large objects will act, but things on a small scale.
                    </p>
                    
                    <span className="text-xl font-bold mb-6">$16.48</span>

                    <a 
                        href="/product/vita-classic"
                        className="bg-white text-[#2DC071] font-bold text-sm py-[15px] px-10 rounded-[5px] w-fit transition duration-300 hover:bg-gray-100 uppercase tracking-wide"
                    >
                        ADD TO CART
                    </a>
                </div>
            </div>

            <img 
                src="/images/banner.png" 
                alt="Vita Classic Model"
                className="absolute right-0 object-contain z-0"
                style={{ width: '443px', height: '685px', top: '50%', transform: 'translateY(-50%)' }}
            />
            
            <button 
                className="absolute left-6 md:left-8 text-white/50 z-20 hover:text-white transition" 
                aria-label="Previous"
                style={{ width: '24px', height: '44px', top: '50%', transform: 'translateY(-50%)' }}
            >
                <ChevronLeft size={24} strokeWidth={2.5} style={{ height: '44px' }}/>
            </button>
            
            <button 
                className="absolute right-6 md:right-8 text-white/50 z-20 hover:text-white transition" 
                aria-label="Next"
                style={{ width: '24px', height: '44px', top: '50%', transform: 'translateY(-50%)' }}
            >
                <ChevronRight size={24} strokeWidth={2.5} style={{ height: '44px' }}/>
            </button>

        </section>
    );
}

export default BannerSection;