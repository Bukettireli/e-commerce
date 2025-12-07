function EditorPickSection() {
    return (
        <section className="py-12 md:py-20 bg-[#FAFAFA]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <div className="max-w-[1050px] mx-auto px-4 sm:px-6">
              
                {/* Başlık */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#252B42] mb-2.5">
                        EDITOR'S PICK
                    </h2>
                    <p className="text-sm text-[#737373]">
                        Problems trying to resolve the conflict between
                    </p>
                </div>

                {/* Desktop Layout - md ve üzeri */}
                <div className="hidden md:flex gap-4 h-[500px]">
            
                    {/* MEN */}
                    <div className="w-[510px] relative overflow-hidden cursor-pointer">
                        <img 
                            src="/images/men.jpg" 
                            alt="Men" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-6 left-6">
                            <div className="bg-white px-16 py-3">
                                <span className="font-bold text-[#252B42] text-base">MEN</span>
                            </div>
                        </div>
                    </div>

                    {/* WOMEN */}
                    <div className="w-[240px] relative overflow-hidden cursor-pointer">
                        <img 
                            src="/images/women.jpg" 
                            alt="Women" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                            <div className="bg-white px-12 py-3">
                                <span className="font-bold text-[#252B42] text-base">WOMEN</span>
                            </div>
                        </div>
                    </div>

                    {/* ACCESSORIES & KIDS */}
                    <div className="w-[240px] flex flex-col gap-4">
                        {/* ACCESSORIES */}
                        <div className="h-[242px] relative overflow-hidden cursor-pointer">
                            <img 
                                src="/images/accessories.jpg" 
                                alt="Accessories" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                                <div className="bg-white px-6 py-2.5">
                                    <span className="font-bold text-[#252B42] text-sm">ACCESSORIES</span>
                                </div>
                            </div>
                        </div>

                        {/* KIDS */}
                        <div className="h-[242px] relative overflow-hidden cursor-pointer">
                            <img 
                                src="/images/kids.jpg" 
                                alt="Kids" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                                <div className="bg-white px-12 py-2.5">
                                    <span className="font-bold text-[#252B42] text-sm">KIDS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout - md altı */}
                <div className="md:hidden space-y-4">
                    
                    {/* MEN */}
                    <div className="relative overflow-hidden cursor-pointer h-[300px]">
                        <img 
                            src="/images/men.jpg" 
                            alt="Men" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-4">
                            <div className="bg-white px-8 py-2">
                                <span className="font-bold text-[#252B42] text-sm">MEN</span>
                            </div>
                        </div>
                    </div>

                    {/* WOMEN */}
                    <div className="relative overflow-hidden cursor-pointer h-[300px]">
                        <img 
                            src="/images/women.jpg" 
                            alt="Women" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                            <div className="bg-white px-8 py-2">
                                <span className="font-bold text-[#252B42] text-sm">WOMEN</span>
                            </div>
                        </div>
                    </div>

                    {/* ACCESSORIES & KIDS */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative overflow-hidden cursor-pointer h-[200px]">
                            <img 
                                src="/images/accessories.jpg" 
                                alt="Accessories" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                                <div className="bg-white px-3 py-2">
                                    <span className="font-bold text-[#252B42] text-xs">ACCESSORIES</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden cursor-pointer h-[200px]">
                            <img 
                                src="/images/kids.jpg" 
                                alt="Kids" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                                <div className="bg-white px-6 py-2">
                                    <span className="font-bold text-[#252B42] text-xs">KIDS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EditorPickSection;