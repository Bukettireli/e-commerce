import React from 'react';
import Layout from '../components/layout/Layout';
import TopBar from '../components/sections/home/TopBar';
import HeroSection from '../components/sections/home/HeroSection'; 
import EditorPickSection from '../components/sections/home/EditorPickSection'; 
import BestsellerSection from '../components/sections/home/BestsellerSection'; 
import BannerSection from '../components/sections/home/BannerSection'; 
import BannerTwoSection from '../components/sections/home/BannerTwoSection'; 
import FeaturedPostsSection from '../components/sections/home/FeaturedPostsSection';

function HomePage() {
    return (
        <Layout topBar={<TopBar />}>
            <HeroSection />
            <EditorPickSection />
            <BestsellerSection /> 
            <BannerSection /> 
            <BannerTwoSection /> 
            <FeaturedPostsSection />
        </Layout>
    );
}

export default HomePage;