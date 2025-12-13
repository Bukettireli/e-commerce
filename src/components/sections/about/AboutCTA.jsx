import React from 'react';
import { Link } from 'react-router-dom';

function AboutCTA() {
    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto">
                
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    
                    <div className="bg-[#2A7CC7] text-white py-16 lg:py-24 px-8 lg:px-16 flex items-center justify-center lg:justify-start">
                        <div className="max-w-md text-center lg:text-left">
                            <p className="text-sm font-bold mb-6">
                                WORK WITH US
                            </p>
                            
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Now Let's grow Yours
                            </h2>
                            
                            <p className="text-sm mb-8 leading-relaxed">
                                The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
                            </p>
                            
                            <Link to="/contact">
                                <button className="border-2 border-white text-white px-10 py-3 rounded-[5px] text-sm font-bold hover:bg-white hover:text-[#2A7CC7] transition">
                                    Button
                                </button>
                            </Link>
                        </div>
                    </div>

                    
                    <div className="hidden lg:block relative h-auto">
                        <img 
                            src="/images/shop/product8.jpg" 
                            alt="Work with us"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}

export default AboutCTA;