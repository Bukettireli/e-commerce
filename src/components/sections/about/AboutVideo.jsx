import React from 'react';
import { Play } from 'lucide-react';

function AboutVideo() {
    return (
        <section className="w-full bg-white py-12 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Video Container */}
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
                    
                    {/* Background Image */}
                    <img 
                        src="/images/about/aboutvideo.jpg" 
                        alt="Video Background"
                        className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div 
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(89.85deg, #000000 0.13%, #000000 0.14%, rgba(0, 0, 0, 0) 99.56%)'
                        }}
                    ></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                        
                        {/* Play Button */}
                        <button className="w-20 h-20 lg:w-24 lg:h-24 bg-[#23A6F0] rounded-full flex items-center justify-center mb-6 hover:bg-[#1a8cd8] transition shadow-2xl">
                            <Play size={32} className="text-white fill-white ml-1" />
                        </button>

                        {/* Title */}
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 max-w-2xl">
                            Designing Better Experience
                        </h2>

                        {/* Description */}
                        <p className="text-sm lg:text-base text-white max-w-md">
                            Problems trying to resolve the conflict between the two major realms of Classical physics
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default AboutVideo;