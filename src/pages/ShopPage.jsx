import { useState } from 'react';
import Layout from '../components/layout/Layout';
import ShopTopBar from '../components/sections/shop/ShopTopBar';
import ShopHero from '../components/sections/shop/ShopHero';
import ShopFilter from '../components/sections/shop/ShopFilter';
import ProductsGrid from '../components/sections/shop/ProductsGrid';
import ShopPagination from '../components/sections/shop/ShopPagination';

function ShopPage() {
    const [viewMode, setViewMode] = useState('grid');

    const products = [
        {
            id: 1,
            name: 'Graphic Design',
            department: 'English Department',
            price: 6.48,
            originalPrice: 16.48,
            image: '/images/shop6.jpg',
            colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
        },
        {
            id: 2,
            name: 'Graphic Design',
            department: 'English Department',
            price: 6.48,
            originalPrice: 16.48,
            image: '/images/shop7.jpg',
            colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
        },
        {
            id: 3,
            name: 'Graphic Design',
            department: 'English Department',
            price: 6.48,
            originalPrice: 16.48,
            image: '/images/shop8.jpg',
            colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
        },
        {
            id: 4,
            name: 'Graphic Design',
            department: 'English Department',
            price: 6.48,
            originalPrice: 16.48,
            image: '/images/shop9.jpg',
            colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
        },
        {
            id: 5,
            name: 'Graphic Design',
            department: 'English Department',
            price: 6.48,
            originalPrice: 16.48,
            image: '/images/shop10.jpg',
            colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
        },
        {
            id: 6,
            name: 'Graphic Design',
            department: 'English Department',
            price: 6.48,
            originalPrice: 16.48,
            image: '/images/shop11.jpg',
            colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
        },
        {
            id: 7,
            name: 'Graphic Design',
            department: 'English Department',
            price: 6.48,
            originalPrice: 16.48,
            image: '/images/shop12.jpg',
            colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
        },
        {
            id: 8,
            name: 'Graphic Design',
            department: 'English Department',
            price: 6.48,
            originalPrice: 16.48,
            image: '/images/shop13.jpg',
            colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
        },
    ];

    return (
        <Layout topBar={<ShopTopBar />}>
            <ShopHero />
            <ShopFilter viewMode={viewMode} setViewMode={setViewMode} />
            <ProductsGrid viewMode={viewMode} products={products} />
            <ShopPagination />
        </Layout>
    );
}

export default ShopPage;
