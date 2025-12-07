function ProductsGrid({ viewMode, products }) {
    return (
        <section className="bg-white py-8 sm:py-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className={`grid gap-6 sm:gap-8 ${
                    viewMode === 'grid'
                        ? 'grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4'
                        : 'grid-cols-1'
                }`}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} viewMode={viewMode} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Product Card Component - Responsive
function ProductCard({ product, viewMode }) {
    if (viewMode === 'list') {
        return (
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 border border-[#ECECEC] rounded">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full sm:w-[239px] h-[250px] sm:h-[300px] object-cover"
                />
                <div className="flex-1 flex flex-col justify-center">
                    <h3 className="font-bold text-[#252B42] text-base mb-2">{product.name}</h3>
                    <p className="text-sm font-bold text-[#737373] mb-3 sm:mb-4">{product.department}</p>
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <span className="text-[#BDBDBD] font-bold line-through text-sm sm:text-base">${product.originalPrice}</span>
                        <span className="text-[#2DC071] font-bold text-base sm:text-lg">${product.price}</span>
                    </div>
                    <div className="flex gap-1.5">
                        {product.colors.map((color, idx) => (
                            <div
                                key={idx}
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="group cursor-pointer">
            <div className="relative overflow-hidden mb-4 sm:mb-6">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[300px] sm:h-[427px] object-cover"
                />
            </div>
            <div className="text-center px-2 sm:px-6">
                <h3 className="font-bold text-[#252B42] text-sm sm:text-base mb-2">{product.name}</h3>
                <p className="text-xs sm:text-sm font-bold text-[#737373] mb-2">{product.department}</p>
                <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                    <span className="text-[#BDBDBD] font-bold line-through text-sm">${product.originalPrice}</span>
                    <span className="text-[#2DC071] font-bold text-sm sm:text-base">${product.price}</span>
                </div>
                <div className="flex justify-center gap-1.5">
                    {product.colors.map((color, idx) => (
                        <div
                            key={idx}
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductsGrid;