import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/layout/Layout';
import ShopTopBar from '../components/sections/shop/ShopTopBar';
import ShopHero from '../components/sections/shop/ShopHero';
import ShopFilter from '../components/sections/shop/ShopFilter';
import ProductsGrid from '../components/sections/shop/ProductsGrid';
import ShopPagination from '../components/sections/shop/ShopPagination';
import ShopBrands from '../components/sections/shop/ShopBrands';
import { fetchProducts } from '../actions/productActions';

function ShopPage() {
    const [viewMode, setViewMode] = useState('grid');
    const dispatch = useDispatch();
    
    // Redux'tan ürünleri ve loading state'ini al
    const { productList, fetchState, total } = useSelector((state) => state.product);

    // Sayfa yüklendiğinde ürünleri çek
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <Layout topBar={<ShopTopBar />}>
            <ShopHero />
            <ShopFilter 
                viewMode={viewMode} 
                setViewMode={setViewMode}
                totalProducts={total}
            />
            
            {/* Loading Spinner */}
            {fetchState === 'LOADING' && (
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#23A6F0]"></div>
                </div>
            )}
            
            {/* Products Grid */}
            {fetchState === 'FETCHED' && (
                <ProductsGrid 
                    viewMode={viewMode} 
                    products={productList} 
                />
            )}
            
            {/* Error State */}
            {fetchState === 'FAILED' && (
                <div className="flex justify-center items-center py-20">
                    <div className="text-center">
                        <p className="text-red-500 text-lg mb-4">Failed to load products</p>
                        <button 
                            onClick={() => dispatch(fetchProducts())}
                            className="px-6 py-2 bg-[#23A6F0] text-white rounded hover:bg-[#1a8cd8]"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            )}
            
            <ShopPagination />
            <ShopBrands />
        </Layout>
    );
}

export default ShopPage;
