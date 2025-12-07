function EditorPickSection() {
    return (
        <section className="py-12 md:py-20 bg-[#FAFAFA]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <div className="max-w-[1050px] mx-auto px-4 sm:px-6">
              
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#252B42] mb-2.5">
                        EDITOR'S PICK
                    </h2>
                    <p className="text-sm text-[#737373]">
                        Problems trying to resolve the conflict between
                    </p>
                </div>

                <div className="hidden md:flex gap-[30px] h-[500px]">
            
                    <div className="flex-[2] relative overflow-hidden cursor-pointer group">
                        <img 
                            src="/images/men.jpg" 
                            alt="Men" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-6 left-6">
                            <button className="bg-white px-16 py-3 font-bold text-[#252B42] text-base hover:bg-gray-100 transition">
                                MEN
                            </button>
                        </div>
                    </div>

                    <div className="flex-[1] relative overflow-hidden cursor-pointer group">
                        <img 
                            src="/images/women.jpg" 
                            alt="Women" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                            <button className="bg-white px-12 py-3 font-bold text-[#252B42] text-base hover:bg-gray-100 transition">
                                WOMEN
                            </button>
                        </div>
                    </div>
                    <div className="flex-[1] flex flex-col gap-[30px]">
                        <div className="flex-1 relative overflow-hidden cursor-pointer group">
                            <img 
                                src="/images/accessories.jpg" 
                                alt="Accessories" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                                <button className="bg-white px-6 py-2.5 font-bold text-[#252B42] text-sm hover:bg-gray-100 transition whitespace-nowrap">
                                    ACCESSORIES
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 relative overflow-hidden cursor-pointer group">
                            <img 
                                src="/images/kids.jpg" 
                                alt="Kids" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                                <button className="bg-white px-12 py-2.5 font-bold text-[#252B42] text-sm hover:bg-gray-100 transition">
                                    KIDS
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:hidden grid grid-cols-2 gap-4">
                    
                    <div className="col-span-2 relative overflow-hidden cursor-pointer h-[300px]">
                        <img 
                            src="/images/men.jpg" 
                            alt="Men" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-4">
                            <button className="bg-white px-8 py-2 font-bold text-[#252B42] text-sm hover:bg-gray-100 transition">
                                MEN
                            </button>
                        </div>
                    </div>
                    <div className="col-span-2 relative overflow-hidden cursor-pointer h-[300px]">
                        <img 
                            src="/images/women.jpg" 
                            alt="Women" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                            <button className="bg-white px-8 py-2 font-bold text-[#252B42] text-sm hover:bg-gray-100 transition">
                                WOMEN
                            </button>
                        </div>
                    </div>
                    <div className="relative overflow-hidden cursor-pointer h-[200px]">
                        <img 
                            src="/images/accessories.jpg" 
                            alt="Accessories" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                            <button className="bg-white px-4 py-2 font-bold text-[#252B42] text-xs hover:bg-gray-100 transition whitespace-nowrap">
                                ACCESSORIES
                            </button>
                        </div>
                    </div>
                    <div className="relative overflow-hidden cursor-pointer h-[200px]">
                        <img 
                            src="/images/kids.jpg" 
                            alt="Kids" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                            <button className="bg-white px-6 py-2 font-bold text-[#252B42] text-xs hover:bg-gray-100 transition">
                                KIDS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EditorPickSection;