import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTopCategories } from '../../../actions/productActions';

/**
 * TopCategories - Ana sayfada rating'e göre top 5 kategoriyi gösterir
 * 
 * Görev Gereksinimleri:
 * - Top 5 categories by rating
 * - With images
 * - Clickable links to /shop/:gender/:categoryName/:categoryId
 */
function TopCategories() {
    const { categories } = useSelector((state) => state.product);
    
    // Rating'e göre top 5 kategoriyi al
    const topCategories = getTopCategories(categories, 5);

    if (topCategories.length === 0) {
        return null;
    }

    // Gender kodundan tam isim al
    const getGenderName = (code) => {
        return code.startsWith('k:') ? 'kadin' : 'erkek';
    };

    return (
        <section className="py-20 bg-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#252B42] mb-4">
                        Top Categories
                    </h2>
                    <p className="text-[#737373] text-lg">
                        Explore our most popular categories
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {topCategories.map((category) => (
                        <Link
                            key={category.id}
                            to={`/shop/${getGenderName(category.code)}/${category.title.toLowerCase()}/${category.id}`}
                            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            {/* Category Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={category.img}
                                    alt={category.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            </div>

                            {/* Category Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-[#23A6F0] transition-colors">
                                    {category.title}
                                </h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-400">★</span>
                                    <span className="text-sm font-semibold">{category.rating}</span>
                                    <span className="text-xs text-gray-300">Rating</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TopCategories;