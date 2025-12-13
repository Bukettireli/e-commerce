import React from 'react';

function AboutProblem() {
    return (
        <section className="w-full bg-white py-12 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
              
                <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
                    
                    <div>
                        <p className="text-sm font-bold text-[#E74040] mb-6">
                            Problems trying
                        </p>
                        <h2 className="text-2xl font-bold text-[#252B42] leading-relaxed">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                        </h2>
                    </div>

                    
                    <div>
                        <p className="text-sm text-[#737373] leading-relaxed">
                            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                        </p>
                    </div>
                </div>

               
                <div className="lg:hidden text-center">
                    <p className="text-sm font-bold text-[#E74040] mb-6">
                        Problems trying
                    </p>
                    <h2 className="text-xl font-bold text-[#252B42] leading-relaxed mb-6">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                    </h2>
                    <p className="text-sm text-[#737373] leading-relaxed max-w-md mx-auto">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>

            </div>
        </section>
    );
}

export default AboutProblem;