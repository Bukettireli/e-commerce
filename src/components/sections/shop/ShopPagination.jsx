function ShopPagination({ currentPage, setCurrentPage, totalProducts, productsPerPage }) {
    // Toplam sayfa sayısını hesapla
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Ürün yoksa pagination gösterme
    if (totalProducts === 0) {
        return null;
    }

    // Gösterilecek sayfa numaralarını oluştur (max 3 sayfa göster)
    const getVisiblePages = () => {
        const pages = [];
        const maxVisible = 3;
        
        let start = Math.max(1, currentPage - 1);
        let end = Math.min(totalPages, start + maxVisible - 1);
        
        // Eğer son sayfalardaysak, başlangıcı ayarla
        if (end - start < maxVisible - 1) {
            start = Math.max(1, end - maxVisible + 1);
        }
        
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        
        return pages;
    };

    return (
        <section className="bg-white py-8 sm:py-12 border-t border-[#ECECEC]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <nav className="flex justify-center">
                    <ul className="flex flex-wrap items-center justify-center gap-1 sm:gap-1">
                        {/* First Button */}
                        <li>
                            <button 
                                onClick={() => handlePageChange(1)}
                                disabled={currentPage === 1}
                                className={`px-3 sm:px-5 py-3 sm:py-[25px] font-bold text-xs sm:text-sm border rounded transition ${
                                    currentPage === 1
                                        ? 'text-[#BDBDBD] border-[#BDBDBD] cursor-not-allowed'
                                        : 'text-[#BDBDBD] hover:bg-[#F3F3F3] border-[#BDBDBD]'
                                }`}
                            >
                                First
                            </button>
                        </li>
                        
                        {/* Page Numbers */}
                        {getVisiblePages().map((page) => (
                            <li key={page}>
                                <button 
                                    onClick={() => handlePageChange(page)}
                                    className={`px-3 sm:px-5 py-3 sm:py-[25px] font-bold text-xs sm:text-sm border rounded transition ${
                                        currentPage === page
                                            ? 'bg-[#23A6F0] text-white border-[#23A6F0]'
                                            : 'text-[#23A6F0] hover:bg-[#F3F3F3] border-[#E8E8E8]'
                                    }`}
                                >
                                    {page}
                                </button>
                            </li>
                        ))}
                        
                        {/* Next Button */}
                        <li>
                            <button 
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`px-3 sm:px-5 py-3 sm:py-[25px] font-bold text-xs sm:text-sm border rounded transition ${
                                    currentPage === totalPages
                                        ? 'text-[#BDBDBD] border-[#BDBDBD] cursor-not-allowed'
                                        : 'text-[#23A6F0] hover:bg-[#F3F3F3] border-[#E8E8E8]'
                                }`}
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
                
                {/* Info Text */}
                <div className="text-center mt-4 text-sm text-[#737373]">
                    Showing {Math.min((currentPage - 1) * productsPerPage + 1, totalProducts)} - {Math.min(currentPage * productsPerPage, totalProducts)} of {totalProducts} products
                </div>
            </div>
        </section>
    );
}

export default ShopPagination;