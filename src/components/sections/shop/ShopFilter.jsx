import { Grid, List } from 'lucide-react';

function ShopFilter({ viewMode, setViewMode }) {
    return (
        <section className="bg-white py-4 sm:py-6 border-b border-[#ECECEC]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    {/* Results Count */}
                    <p className="text-xs sm:text-sm font-bold text-[#737373]">
                        Showing all 12 results
                    </p>

                    {/* Controls */}
                    <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 sm:gap-4">
                        {/* View Toggle */}
                        <div className="flex items-center gap-3">
                            <span className="text-xs sm:text-sm font-bold text-[#737373]">Views:</span>
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

                        {/* Sort & Filter */}
                        <div className="flex gap-2 sm:gap-3 w-full xs:w-auto">
                            {/* Sort Dropdown */}
                            <select className="flex-1 xs:flex-none border border-[#DDDDDD] rounded px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-[#737373] bg-[#F9F9F9] min-w-[140px] sm:min-w-[180px]">
                                <option>Popularity</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest</option>
                            </select>

                            {/* Filter Button */}
                            <button className="bg-[#23A6F0] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded text-xs sm:text-sm font-bold hover:bg-[#1a8cd8] transition whitespace-nowrap">
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