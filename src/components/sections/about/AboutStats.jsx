import React from 'react';

function AboutStats() {
    const stats = [
        { number: '15K', label: 'Happy Customers' },
        { number: '150K', label: 'Monthly Visitors' },
        { number: '15', label: 'Countries Worldwide' },
        { number: '100+', label: 'Top Partners' },
    ];

    return (
        <section className="w-full bg-white py-12 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Desktop - 4 Columns */}
                <div className="hidden lg:grid lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <h3 className="text-5xl font-bold text-[#252B42] mb-2">
                                {stat.number}
                            </h3>
                            <p className="text-base font-bold text-[#737373]">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mobile - Stacked */}
                <div className="lg:hidden flex flex-col gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <h3 className="text-5xl font-bold text-[#252B42] mb-2">
                                {stat.number}
                            </h3>
                            <p className="text-base font-bold text-[#737373]">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default AboutStats;