import { Link } from 'react-router-dom';

function ProductsGrid({ viewMode, products = [] }) {
    // Güvenlik kontrolü: products undefined veya null olabilir
    if (!products || products.length === 0) {
        return (
            <section className="bg-white py-8 sm:py-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No products found</p>
                    </div>
                </div>
            </section>
        );
    }

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

function ProductCard({ product, viewMode }) {
    // Güvenlik kontrolü: product undefined olabilir
    if (!product) {
        return null;
    }

    // Resim URL'ini al (API formatına göre)
    const getImageUrl = (product) => {
        // API'den gelen format: images array
        if (product.images && product.images.length > 0) {
            // images array of objects: [{url: '...'}, ...]
            if (product.images[0].url) {
                return product.images[0].url;
            }
            // images array of strings: ['url1', 'url2']
            if (typeof product.images[0] === 'string') {
                return product.images[0];
            }
        }
        // Mock data format: image string
        if (product.image) {
            return product.image;
        }
        // Fallback
        return 'https://via.placeholder.com/400x500?text=No+Image';
    };

    const imageUrl = getImageUrl(product);

    if (viewMode === 'list') {
        return (
            <Link to={`/product/${product.id}`} className="block">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 border border-[#ECECEC] rounded hover:shadow-lg transition-shadow">
                    <img
                        src={imageUrl}
                        alt={product.name || 'Product'}
                        className="sm:w-[239px] h-[250px] sm:h-[300px] object-cover"
                    />
                    <div className="flex flex-col justify-center">
                        <h3 className="font-bold text-[#252B42] text-base mb-2">{product.name}</h3>
                        <p className="text-sm font-bold text-[#737373] mb-3 sm:mb-4">{product.department}</p>
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                            <span className="text-[#BDBDBD] font-bold line-through text-sm sm:text-base">${product.originalPrice}</span>
                            <span className="text-[#2DC071] font-bold text-base sm:text-lg">${product.price}</span>
                        </div>
                        <div className="flex gap-1.5">
                            {product.colors && product.colors.map((color, idx) => (
                                <div
                                    key={idx}
                                    className="w-4 h-4 rounded-full"
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <Link to={`/product/${product.id}`} className="block group cursor-pointer">
            <div className="relative overflow-hidden mb-4 sm:mb-6">
                <img
                    src={imageUrl}
                    alt={product.name || 'Product'}
                    className="w-full h-[300px] sm:h-[427px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="text-center px-2 sm:px-6">
                <h3 className="font-bold text-[#252B42] text-sm sm:text-base mb-2 group-hover:text-[#23A6F0] transition-colors">{product.name}</h3>
                <p className="text-xs sm:text-sm font-bold text-[#737373] mb-2">{product.department}</p>
                <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                    <span className="text-[#BDBDBD] font-bold line-through text-sm">${product.originalPrice}</span>
                    <span className="text-[#2DC071] font-bold text-sm sm:text-base">${product.price}</span>
                </div>
                <div className="flex justify-center gap-1.5">
                    {product.colors && product.colors.map((color, idx) => (
                        <div
                            key={idx}
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>
            </div>
        </Link>
    );
}

export default ProductsGrid;