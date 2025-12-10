import { ChevronRight } from 'lucide-react';

function ShopHero() {
    const categories = [
        { id: 1, name: 'CLOTHS', items: 5, image: '/images/shop/shop1.jpg' },
        { id: 2, name: 'CLOTHS', items: 5, image: '/images/shop/shop2.jpg' },
        { id: 3, name: 'CLOTHS', items: 5, image: '/images/shop/shop3.jpg' },
        { id: 4, name: 'CLOTHS', items: 5, image: '/images/shop/shop4.jpg' },
        { id: 5, name: 'CLOTHS', items: 5, image: '/images/shop/shop5.jpg' },
    ];

    return (
        <section className="bg-[#FAFAFA] py-4 sm:py-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
               
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#252B42]">Shop</h2>
                    <div className="flex items-center gap-2 text-sm">
                        <a href="/" className="font-bold text-[#252B42] hover:text-[#23A6F0]">Home</a>
                        <ChevronRight size={16} className="text-[#BDBDBD]" />
                        <span className="text-[#BDBDBD] font-bold">Shop</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="relative h-[180px] sm:h-[223px] overflow-hidden cursor-pointer group"
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 flex flex-col items-center justify-center">
                                <h3 className="text-white font-bold text-sm sm:text-base mb-1">
                                    {category.name}
                                </h3>
                                <p className="text-white text-xs sm:text-sm font-bold">{category.items} Items</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ShopHero;