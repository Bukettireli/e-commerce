import React from 'react';

function ShopBrands() {
    const brands = [
        { name: 'Hooli', logo: '/images/shop/hooli.png' },
        { name: 'Lyft', logo: '/images/shop/lyft.png' },
        { name: 'Leaf', logo: '/images/shop/leaf.png' },
        { name: 'Stripe', logo: '/images/shop/stripe.png' },
        { name: 'AWS', logo: '/images/shop/aws.png' },
        { name: 'Reddit', logo: '/images/shop/reddit.png' },
    ];

    return (
        <section className="w-full bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div 
                    className="
                        w-full 
                        lg:max-w-[1054px] 
                        lg:h-[175px] 
                        mx-auto
                        flex 
                        flex-col
                        lg:flex-row
                        items-center 
                        justify-center
                        lg:justify-between
                        gap-12
                        lg:gap-[30px]
                        py-12
                        lg:py-[50px]
                    "
                    style={{ opacity: 1 }}
                >
                    {brands.map((brand, index) => (
                        <div 
                            key={index}
                            className="flex items-center justify-center transition-all duration-300 hover:scale-110"
                        >
                            <img 
                                src={brand.logo} 
                                alt={brand.name}
                                className="w-[103px] h-[34px] object-contain"
                                style={{ 
                                    opacity: 1,
                                    filter: 'brightness(0) saturate(100%) invert(45%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(88%)' 
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ShopBrands;