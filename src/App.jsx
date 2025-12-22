import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

// Actions
import { verifyToken } from './actions/clientActions';
import { fetchCategories } from './actions/productActions';

function App() {
  const dispatch = useDispatch();

  // Uygulama açılışında çalışacak işlemler
  useEffect(() => {
    // 1. Token kontrolü (otomatik login)
    dispatch(verifyToken());
    
    // 2. Kategorileri yükle
    dispatch(fetchCategories());
  }, []); // dispatch'i kaldırdık - çünkü dispatch değişmez

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ToastContainer /> 
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:gender/:categoryName/:categoryId" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;