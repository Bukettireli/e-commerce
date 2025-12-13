import React from 'react';

function ContactHero() {
    const locations = [
        {
            city: 'Paris',
            address: '1901 Thorn ridge Cir.',
            zipCode: '75000 Paris',
            phone: '+451 215 215',
            fax: '+451 215 215'
        },
        {
            city: 'New York',
            address: '4517 Salt Dr. San Jose,',
            zipCode: '75000 Paris',
            phone: '+451 215 215',
            fax: '+451 215 215'
        },
        {
            city: 'Berlin',
            address: '4140 Parker Rd.',
            zipCode: '75000 Paris',
            phone: '+451 215 215',
            fax: '+4531 985 310'
        },
        {
            city: 'London',
            address: '19 Sac St. ULUCA,',
            zipCode: '75000 Paris',
            phone: '+451 215 215',
            fax: '+451 215 215'
        }
    ];

    return (
        <section className="relative w-full min-h-screen bg-[#0D7C9E] overflow-hidden">
            
            {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                    src="/homebg.jpg" 
                    alt="Contact Background"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div 
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(89.85deg, #000000 0.13%, #000000 0.14%, rgba(0, 0, 0, 0) 99.56%)'
                    }}
                ></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    
                    {/* Left - Contact Info */}
                    <div className="text-white">
                        <p className="text-base font-bold mb-6">
                            CONTACT US
                        </p>
                        
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            CONTACT US
                        </h1>
                        
                        <p className="text-base mb-8 leading-relaxed max-w-md">
                            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                        </p>
                        
                        <button className="bg-[#23A6F0] text-white px-10 py-3 rounded-[5px] text-sm font-bold hover:bg-[#1a8cd8] transition">
                            CONTACT US
                        </button>
                    </div>

                    {/* Right - Locations Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                        {locations.map((location, index) => (
                            <div key={index} className="text-white pb-6 border-b-2 border-[#23A6F0]">
                                <h3 className="text-xl font-bold mb-4">
                                    {location.city}
                                </h3>
                                <div className="space-y-1 text-sm">
                                    <p>{location.address}</p>
                                    <p>{location.zipCode}</p>
                                    <p className="pt-2">Phone: {location.phone}</p>
                                    <p>Fax: {location.fax}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>

        </section>
    );
}

export default ContactHero;