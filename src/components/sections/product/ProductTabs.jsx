import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

function ProductTabs({ product }) {
    const [activeTab, setActiveTab] = useState('description');

    const tabs = [
        { id: 'description', label: 'Description' },
        { id: 'additional', label: 'Additional Information' },
        { id: 'reviews', label: 'Reviews (0)' },
    ];

    return (
        <section className="w-full py-12 bg-white font-montserrat">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Tabs Navigation */}
                <div className="flex justify-center border-b border-[#ECECEC] mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-4 text-sm font-bold transition ${
                                activeTab === tab.id
                                    ? 'text-[#252B42] border-b-2 border-[#23A6F0]'
                                    : 'text-[#737373] hover:text-[#252B42]'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left - Image */}
                    <div className="lg:col-span-1">
                        <img 
                            src={product.image}
                            alt={product.name}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>

                    {/* Middle - Description */}
                    <div className="lg:col-span-1">
                        <h3 className="text-2xl font-bold text-[#252B42] mb-6">
                            the quick fox jumps over
                        </h3>
                        
                        <div className="space-y-4 text-sm text-[#737373] leading-relaxed">
                            <p>
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                            </p>
                            <p>
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                            </p>
                            <p>
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                            </p>
                        </div>
                    </div>

                    {/* Right - Features */}
                    <div className="lg:col-span-1 space-y-8">
                        
                        {/* First List */}
                        <div>
                            <h3 className="text-2xl font-bold text-[#252B42] mb-6">
                                the quick fox jumps over
                            </h3>
                            <ul className="space-y-3">
                                {[1, 2, 3, 4].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-[#737373]">
                                        <ChevronRight size={16} className="text-[#737373] shrink-0" />
                                        <span>the quick fox jumps over the lazy dog</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Second List */}
                        <div>
                            <h3 className="text-2xl font-bold text-[#252B42] mb-6">
                                the quick fox jumps over
                            </h3>
                            <ul className="space-y-3">
                                {[1, 2, 3].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-[#737373]">
                                        <ChevronRight size={16} className="text-[#737373] shrink-0" />
                                        <span>the quick fox jumps over the lazy dog</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default ProductTabs;