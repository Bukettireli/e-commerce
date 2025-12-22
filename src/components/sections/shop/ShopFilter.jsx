import { useState } from 'react';
import { Grid, List } from 'lucide-react';

function ShopFilter({ viewMode, setViewMode, totalProducts, sort, setSort, filter, setFilter }) {
    const [tempFilter, setTempFilter] = useState(filter);

    // Sort options
    const sortOptions = [
        { value: '', label: 'Default' },
        { value: 'price:asc', label: 'Price: Low to High' },
        { value: 'price:desc', label: 'Price: High to Low' },
        { value: 'rating:asc', label: 'Rating: Low to High' },
        { value: 'rating:desc', label: 'Rating: High to Low' },
    ];

    const handleFilterSubmit = (e) => {
        e.preventDefault();
        setFilter(tempFilter);
    };

    return (
        <section className="bg-white py-6 border-b" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    {/* Results Count */}
                    <div className="text-sm text-[#737373] font-bold">
                        Showing {totalProducts || 0} results
                    </div>

                    {/* Right Side Controls */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                        {/* View Mode Toggle */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-[#737373]">Views:</span>
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 border rounded ${
                                    viewMode === 'grid'
                                        ? 'bg-[#23A6F0] text-white border-[#23A6F0]'
                                        : 'bg-white text-[#737373] border-gray-300'
                                }`}
                            >
                                <Grid size={16} />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 border rounded ${
                                    viewMode === 'list'
                                        ? 'bg-[#23A6F0] text-white border-[#23A6F0]'
                                        : 'bg-white text-[#737373] border-gray-300'
                                }`}
                            >
                                <List size={16} />
                            </button>
                        </div>

                        {/* Sort Select */}
                        <div className="flex items-center gap-2 w-full sm:w-auto">
                            <label htmlFor="sort" className="text-sm font-bold text-[#737373] whitespace-nowrap">
                                Sort:
                            </label>
                            <select
                                id="sort"
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#23A6F0] focus:border-transparent w-full sm:w-auto"
                            >
                                {sortOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Filter Input */}
                        <form onSubmit={handleFilterSubmit} className="flex items-center gap-2 w-full sm:w-auto">
                            <label htmlFor="filter" className="text-sm font-bold text-[#737373] whitespace-nowrap">
                                Filter:
                            </label>
                            <div className="flex gap-2 w-full sm:w-auto">
                                <input
                                    id="filter"
                                    type="text"
                                    value={tempFilter}
                                    onChange={(e) => setTempFilter(e.target.value)}
                                    placeholder="Search..."
                                    className="px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#23A6F0] focus:border-transparent w-full sm:w-48"
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-[#23A6F0] text-white rounded font-bold hover:bg-[#1a8cd8] transition whitespace-nowrap"
                                >
                                    Apply
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShopFilter;