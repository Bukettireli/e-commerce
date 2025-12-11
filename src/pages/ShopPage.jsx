import { useState } from 'react';
import Layout from '../components/layout/Layout';
import ShopTopBar from '../components/sections/shop/ShopTopBar';
import ShopHero from '../components/sections/shop/ShopHero';
import ShopFilter from '../components/sections/shop/ShopFilter';
import ProductsGrid from '../components/sections/shop/ProductsGrid';
import ShopPagination from '../components/sections/shop/ShopPagination';
import ShopBrands from '../components/sections/shop/ShopBrands';
import { products } from '../data/products';

function ShopPage() {
    const [viewMode, setViewMode] = useState('grid');

    return (
        <Layout topBar={<ShopTopBar />}>
            <ShopHero />
            <ShopFilter viewMode={viewMode} setViewMode={setViewMode} />
            <ProductsGrid viewMode={viewMode} products={products} />
            <ShopPagination />
            <ShopBrands/>
        </Layout>
    );
}

export default ShopPage;
