function ShopPagination() {
    return (
        <section className="bg-white py-8 sm:py-12 border-t border-[#ECECEC]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <nav className="flex justify-center">
                    <ul className="flex flex-wrap items-center justify-center gap-1 sm:gap-1">
                        <li>
                            <button className="px-3 sm:px-5 py-3 sm:py-[25px] text-[#BDBDBD] hover:bg-[#F3F3F3] font-bold text-xs sm:text-sm border border-[#BDBDBD] rounded">
                                First
                            </button>
                        </li>
                        <li>
                            <button className="px-3 sm:px-5 py-3 sm:py-[25px] bg-[#23A6F0] text-white font-bold text-xs sm:text-sm border border-[#23A6F0] rounded">
                                1
                            </button>
                        </li>
                        <li>
                            <button className="px-3 sm:px-5 py-3 sm:py-[25px] text-[#23A6F0] hover:bg-[#F3F3F3] font-bold text-xs sm:text-sm border border-[#E8E8E8] rounded">
                                2
                            </button>
                        </li>
                        <li>
                            <button className="px-3 sm:px-5 py-3 sm:py-[25px] text-[#23A6F0] hover:bg-[#F3F3F3] font-bold text-xs sm:text-sm border border-[#E8E8E8] rounded">
                                3
                            </button>
                        </li>
                        <li>
                            <button className="px-3 sm:px-5 py-3 sm:py-[25px] text-[#23A6F0] hover:bg-[#F3F3F3] font-bold text-xs sm:text-sm border border-[#E8E8E8] rounded">
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}

export default ShopPagination;