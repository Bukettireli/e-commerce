import { ChevronLeft, ChevronRight } from 'lucide-react';

function HeroSection() {
    return (
        <section className="relative w-full h-[716px] flex items-center overflow-hidden" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <img 
                src="/homebg.jpg" 
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
            
            <div className="max-w-[1440px] mx-auto px-6 w-full h-full relative z-10 flex items-center">
                <div className="flex flex-col justify-center max-w-[600px]">
                    <h5 className="text-base font-bold tracking-wide mb-8 text-[#FFFFFF]">
                        SUMMER 2020
                    </h5>
                    
                    <h1 className="text-[58px] font-bold mb-8 leading-tight text-[#FFFFFF]">
                        NEW COLLECTION
                    </h1>
                    
                    <h4 className="text-xl mb-8 leading-[30px] text-[#FAFAFA] max-w-[376px]">
                        We know how large objects will act, but things on a small scale.
                    </h4>

                    <button className="bg-[#2DC071] hover:bg-[#24a05e] text-[#FFFFFF] font-bold text-sm py-[15px] px-10 rounded-[5px] w-fit uppercase tracking-wide transition">
                        SHOP NOW
                    </button>
                </div>
            </div>

            <button 
                className="absolute left-8 top-1/2 transform -translate-y-1/2 text-[#FFFFFF] hover:bg-white/10 transition z-20 p-2"
                aria-label="Previous"
            >
                <ChevronLeft size={50} strokeWidth={2} className="text-[#FFFFFF]" />
            </button>
    
            <button 
                className="absolute right-8 top-1/2 transform -translate-y-1/2 text-[#FFFFFF] hover:bg-white/10 transition z-20 p-2"
                aria-label="Next"
            >
                <ChevronRight size={50} strokeWidth={2} className="text-[#FFFFFF]" />
            </button>
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2.5 z-20">
                <span className="h-2.5 w-16 bg-[#FFFFFF] rounded-full"></span> 
                <span className="h-2.5 w-16 bg-[#FFFFFF] opacity-50 rounded-full"></span>
            </div>
        </section>
    );
}

export default HeroSection;