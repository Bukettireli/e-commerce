import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ShopTopBar from '../components/sections/shop/ShopTopBar';
import ShopHero from '../components/sections/shop/ShopHero';
import ShopFilter from '../components/sections/shop/ShopFilter';
import ProductsGrid from '../components/sections/shop/ProductsGrid';
import ShopPagination from '../components/sections/shop/ShopPagination';
import ShopBrands from '../components/sections/shop/ShopBrands';
import TopCategories from '../components/sections/home/TopCategories';
import { fetchProducts } from '../actions/productActions';

function ShopPage() {
    const [viewMode, setViewMode] = useState('grid');
    const [sort, setSort] = useState('');
    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(25); // Sabit: Her sayfada 25 ürün
    
    const dispatch = useDispatch();
    const { categoryId } = useParams(); // URL'den categoryId al
    
    // Redux'tan ürünleri ve loading state'ini al
    const { productList, fetchState, total } = useSelector((state) => state.product);

    // Category, sort, filter veya page değiştiğinde ürünleri yeniden çek
    useEffect(() => {
        const params = {};
        
        // URL'den gelen categoryId varsa ekle
        if (categoryId) {
            params.category = categoryId;
        }
        
        // Sort seçiliyse ekle
        if (sort) {
            params.sort = sort;
        }
        
        // Filter giriliyse ekle
        if (filter) {
            params.filter = filter;
        }
        
        // Pagination
        params.limit = limit;
        params.offset = (currentPage - 1) * limit;
        
        console.log('Fetching products with:', params);
        dispatch(fetchProducts(params));
        
        // Sayfa değiştiğinde scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
    }, [categoryId, sort, filter, currentPage, limit, dispatch]);

    return (
        <Layout topBar={<ShopTopBar />}>
            <ShopHero />
            
            {/* Top 5 Categories */}
            <TopCategories />
            
            <ShopFilter 
                viewMode={viewMode} 
                setViewMode={setViewMode}
                totalProducts={total}
                sort={sort}
                setSort={setSort}
                filter={filter}
                setFilter={setFilter}
            />
            
            {/* Loading Spinner */}
            {fetchState === 'LOADING' && (
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#23A6F0]"></div>
                </div>
            )}
            
            {/* Products Grid */}
            {fetchState === 'FETCHED' && productList && productList.length > 0 && (
                <ProductsGrid 
                    viewMode={viewMode} 
                    products={productList} 
                />
            )}
            
            {/* Empty State */}
            {fetchState === 'FETCHED' && (!productList || productList.length === 0) && (
                <div className="flex justify-center items-center py-20">
                    <p className="text-gray-500 text-lg">No products found</p>
                </div>
            )}
            
            {/* Error State */}
            {fetchState === 'FAILED' && (
                <div className="flex justify-center items-center py-20">
                    <div className="text-center">
                        <p className="text-red-500 text-lg mb-4">Failed to load products</p>
                        <button 
                            onClick={() => dispatch(fetchProducts({ categoryId, sort, filter }))}
                            className="px-6 py-2 bg-[#23A6F0] text-white rounded hover:bg-[#1a8cd8]"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            )}
            
            <ShopPagination 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalProducts={total}
                productsPerPage={limit}
            />
            <ShopBrands />
        </Layout>
    );
}

export default ShopPage;