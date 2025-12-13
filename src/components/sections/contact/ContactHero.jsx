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
            address: '2715 Ash Dr. San Jose,',
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
            address: '3517 W. Gray St. Utica,',
            zipCode: '75000 Paris',
            phone: '+451 215 215',
            fax: '+451 215 215'
        }
    ];

   return (
        <section className="relative w-full min-h-screen bg-[#0D7C9E] overflow-hidden">
            
            
            <div className="absolute inset-0">
                <img 
                    src="/homebg.jpg" 
                    alt="Contact Background"
                    className="w-full h-full object-cover"
                />
                
                <div 
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(89.85deg, #000000 0.13%, #000000 0.14%, rgba(0, 0, 0, 0) 99.56%)'
                    }}
                ></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    
                   
                    <div className="text-[#FFFFFF]">
                        
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            CONTACT US
                        </h1>
                        
                        <p className="text-base mb-8 leading-relaxed max-w-md">
                            Problems trying to resolve the conflict between<br/> the two major realms of Classical physics:<br/> Newtonian mechanics
                        </p>
                        
                        <button className="bg-[#23A6F0] text-white px-10 py-3 rounded-[5px] text-sm font-bold hover:bg-[#1a8cd8] transition">
                            CONTACT US
                        </button>
                    </div>

                   
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                        {locations.map((location, index) => (
                            <div key={index} className="text-white">
                            
                                <h3 
                                    className="text-2xl font-bold leading-8 mb-4"
                                    style={{ letterSpacing: '0.1px' }}
                                >
                                    {location.city}
                                </h3>
                                
                                
                                <div 
                                    className="space-y-1 text-base font-bold leading-6"
                                    style={{ letterSpacing: '0.1px' }}
                                >
                                    <p>{location.address}</p>
                                    
                                    
                                    <div className="w-16 h-0.5 bg-[#23A6F0] my-3"></div>
                                     <p className="text-[#ECECEC]">{location.zipCode}</p>
                                    
                                   
                                    <p className="text-[#ECECEC] pt-2">Phone: {location.phone}</p>
                                    <p className="text-[#ECECEC]">Fax: {location.fax}</p>
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