import React from 'react';
import ProductCard from './ProductCard'; 

function BestsellerSection() {
    // Ürün verisi (Renkler ve fiyatlar tasarıma göre ayarlanmıştır)
    const bestsellers = [
        { id: 101, name: 'Graphic Design', category: 'English Department', originalPrice: 16.48, salePrice: 6.48, imageUrl: '/images/bestseller1.jpg', colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'] },
        { id: 102, name: 'Graphic Design', category: 'English Department', originalPrice: 16.48, salePrice: 6.48, imageUrl: '/images/bestseller2.jpg', colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'] },
        { id: 103, name: 'Graphic Design', category: 'English Department', originalPrice: 16.48, salePrice: 6.48, imageUrl: '/images/bestseller3.jpg', colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'] },
        { id: 104, name: 'Graphic Design', category: 'English Department', originalPrice: 16.48, salePrice: 6.48, imageUrl: '/images/bestseller4.jpg', colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'] },
        { id: 105, name: 'Graphic Design', category: 'English Department', originalPrice: 16.48, salePrice: 6.48, imageUrl: '/images/bestseller5.jpg', colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'] },
        { id: 106, name: 'Graphic Design', category: 'English Department', originalPrice: 16.48, salePrice: 6.48, imageUrl: '/images/bestseller6.jpg', colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'] },
        { id: 107, name: 'Graphic Design', category: 'English Department', originalPrice: 16.48, salePrice: 6.48, imageUrl: '/images/bestseller7.jpg', colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'] },
        { id: 108, name: 'Graphic Design', category: 'English Department', originalPrice: 16.48, salePrice: 6.48, imageUrl: '/images/bestseller8.jpg', colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'] },
    ];

    return (
        <section className="py-12 md:py-24 bg-white"> 
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Başlık Alanı */}
                <header className="text-center mb-12">
                    <p className="text-sm font-bold text-gray-500 mb-1">
                        Featured Products
                    </p>
                    <h2 className="text-3xl font-bold text-gray-800 uppercase tracking-wider mb-2">
                        BESTSELLER PRODUCTS
                    </h2>
                    <p className="text-sm text-gray-500 max-w-xl mx-auto">
                        Problems trying to resolve the conflict between
                    </p>
                </header>

                <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                    {bestsellers.map(product => (
                        <ProductCard key={product.id} product={product} /> 
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BestsellerSection;