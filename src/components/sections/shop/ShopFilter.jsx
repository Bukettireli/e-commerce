import { Grid, List } from 'lucide-react';

function ShopFilter({ viewMode, setViewMode }) {
    return (
        <section className="bg-white py-6 border-b border-[#ECECEC]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between">
                   
                    
                    <p className="text-sm font-bold text-[#737373]">
                        Showing all 12 results
                    </p>

                    
                    <div className="flex items-center gap-16">
                        
                      
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-[#737373]">Views:</span>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 border rounded ${
                                        viewMode === 'grid'
                                            ? 'border-[#252B42] text-[#252B42]'
                                            : 'border-[#ECECEC] text-[#737373]'
                                    }`}
                                >
                                    <Grid size={16} />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 border rounded ${
                                        viewMode === 'list'
                                            ? 'border-[#252B42] text-[#252B42]'
                                            : 'border-[#ECECEC] text-[#737373]'
                                    }`}
                                >
                                    <List size={16} />
                                </button>
                            </div>
                        </div>

                       
                        <div className="flex items-center gap-3">
                            <select className="border border-[#DDDDDD] rounded px-5 py-2.5 text-sm text-[#737373] bg-[#F9F9F9] min-w-[180px]">
                                <option>Popularity</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest</option>
                            </select>

                            <button className="bg-[#23A6F0] text-white px-6 py-2.5 rounded text-sm font-bold hover:bg-[#1a8cd8] transition">
                                Filter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShopFilter;