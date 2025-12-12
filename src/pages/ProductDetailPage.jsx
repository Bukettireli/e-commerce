import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar, FaHeart, FaShoppingCart, FaEye, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Layout from '../components/layout/Layout';
import ShopTopBar from '../components/sections/shop/ShopTopBar';
import ProductTabs from '../components/sections/product/ProductTabs';
import { products } from '../data/products';
import BestsellerProducts from '../components/sections/product/BestsellerProducts';
import ShopBrands from '../components/sections/shop/ShopBrands';

function ProductDetailPage(props) {
  const id = parseInt(props.match.params.id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);

  // ID'ye göre ürünü bul
  const product = products.find(p => p.id === id);

  // Ürün bulunamadıysa
  if (!product) {
    return (
      <Layout topBar={<ShopTopBar />}>
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-[#252B42] mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-[#23A6F0] hover:underline">
            Back to Shop
          </Link>
        </div>
      </Layout>
    );
  }

  // Renkleri obje formatına çevir
  const colorObjects = product.colors.map((hex, index) => ({
    name: `Color ${index + 1}`,
    hex: hex
  }));

  return (
    <Layout topBar={<ShopTopBar />}>
      <div className="font-montserrat bg-white">
        {/* Breadcrumb */}
        <div className="bg-[#FAFAFA] py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-sm font-bold">
              <Link to="/" className="text-[#252B42] hover:text-[#23A6F0] transition">Home</Link>
              <span className="text-[#BDBDBD]">&gt;</span>
              <Link to="/shop" className="text-[#BDBDBD] hover:text-[#23A6F0] transition">Shop</Link>
            </div>
          </div>
        </div>

        {/* Product Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Left - Images */}
            <div className="flex flex-col gap-5">
              {/* Main Image */}
              <div className="relative bg-[#F5F5F5] rounded-lg overflow-hidden aspect-square">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows - Only show if multiple images */}
                {product.images.length > 1 && (
                  <>
                    <button 
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
                      onClick={() => setSelectedImage(prev => prev > 0 ? prev - 1 : product.images.length - 1)}
                      aria-label="Previous image"
                    >
                      <FaChevronLeft className="text-[#252B42]" size={16} />
                    </button>
                    <button 
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
                      onClick={() => setSelectedImage(prev => prev < product.images.length - 1 ? prev + 1 : 0)}
                      aria-label="Next image"
                    >
                      <FaChevronRight className="text-[#252B42]" size={16} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="flex gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-[100px] h-[75px] rounded-lg overflow-hidden border-2 transition ${
                        selectedImage === index ? 'border-[#23A6F0]' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      aria-label={`View image ${index + 1}`}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right - Product Info */}
            <div className="flex flex-col gap-4 lg:gap-5">
              {/* Title */}
              <h1 className="text-[#252B42] text-xl lg:text-2xl font-normal">{product.name}</h1>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    i < product.rating ? 
                      <FaStar key={i} className="text-[#F3CD03]" size={20} /> :
                      <FaRegStar key={i} className="text-[#F3CD03]" size={20} />
                  ))}
                </div>
                <span className="text-[#737373] text-sm font-bold">{product.reviews} Reviews</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-2">
                <span className="text-[#252B42] text-2xl font-bold">${product.price.toFixed(2)}</span>
                <span className="text-[#BDBDBD] text-xl font-bold line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-2">
                <span className="text-[#737373] text-sm font-bold">Availability :</span>
                <span className="text-[#23A6F0] text-sm font-bold">{product.availability}</span>
              </div>

              {/* Description */}
              <p className="text-[#858585] text-sm leading-6 border-b border-[#BDBDBD] pb-6 lg:pb-7">
                {product.description}
              </p>

              {/* Colors */}
              <div className="flex items-center gap-3 border-b border-[#BDBDBD] pb-6 lg:pb-7">
                {colorObjects.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-[30px] h-[30px] rounded-full border-2 transition hover:scale-110 ${
                      selectedColor === index ? 'border-[#252B42] scale-110' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                    aria-label={`Select ${color.name}`}
                  />
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <button className="bg-[#23A6F0] text-white px-5 py-2.5 rounded-[5px] text-sm font-bold hover:bg-[#1a8cd8] transition">
                  Select Options
                </button>
                
                <button 
                  className="w-10 h-10 flex items-center justify-center border border-[#E8E8E8] rounded-full hover:bg-[#FAFAFA] hover:border-[#23A6F0] transition"
                  aria-label="Add to wishlist"
                >
                  <FaHeart className="text-[#252B42]" />
                </button>
                
                <button 
                  className="w-10 h-10 flex items-center justify-center border border-[#E8E8E8] rounded-full hover:bg-[#FAFAFA] hover:border-[#23A6F0] transition"
                  aria-label="Add to cart"
                >
                  <FaShoppingCart className="text-[#252B42]" />
                </button>
                
                <button 
                  className="w-10 h-10 flex items-center justify-center border border-[#E8E8E8] rounded-full hover:bg-[#FAFAFA] hover:border-[#23A6F0] transition"
                  aria-label="Quick view"
                >
                  <FaEye className="text-[#252B42]" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <ProductTabs product={product} />
      <BestsellerProducts />
      <ShopBrands />
    </Layout>
  );
}

export default ProductDetailPage;