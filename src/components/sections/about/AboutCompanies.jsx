import React from 'react';

function AboutCompanies() {
    const brands = [
        { id: 1, name: 'Hooli', image: '/images/shop/hooli.png' },
        { id: 2, name: 'Lyft', image: '/images/shop/lyft.png' },
        { id: 3, name: 'Brand', image: '/images/shop/leaf.png' },
        { id: 4, name: 'Stripe', image: '/images/shop/stripe.png' },
        { id: 5, name: 'AWS', image: '/images/shop/aws.png' },
        { id: 6, name: 'Reddit', image: '/images/shop/reddit.png' }
    ];

    return (
        <section className="w-full bg-[#FAFAFA] py-12 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-4xl font-bold text-[#252B42] mb-4">
                        Big Companies Are Here
                    </h2>
                    <p className="text-sm text-[#737373] max-w-lg mx-auto">
                        Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>

                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 items-center justify-items-center">
                    {brands.map((brand) => (
                        <div 
                            key={brand.id}
                            className="flex items-center justify-center grayscale hover:grayscale-0 transition duration-300"
                        >
                            <img 
                                src={brand.image} 
                                alt={brand.name}
                                className="h-auto w-full max-w-[103px] object-contain"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default AboutCompanies;