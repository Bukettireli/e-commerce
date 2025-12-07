import React from 'react';

function ProductCard({ product }) {

    if (!product) {
        return null; 
    }
    
    return (
        <a href={`/product/${product.id}`} className="group block text-center">
            
            <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden">
                <img
                    src={product.imageUrl} 
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:opacity-75 transition duration-300"
                />
            </div>
        
            <div className="mt-4">
                <h3 className="text-base text-gray-800 font-bold">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                <div className="mt-1 flex justify-center space-x-2">
                    <p className="text-base font-bold text-gray-400 line-through">${product.originalPrice.toFixed(2)}</p>
                    <p className="text-base font-bold text-[#2DC071]">${product.salePrice.toFixed(2)}</p>
                </div>
            
                {product.colors && (
                    <div className="flex justify-center space-x-1 mt-2">
                        {product.colors.map((color, index) => (
                            <div key={index} className="w-4 h-4 rounded-full" style={{ backgroundColor: color }}></div>
                        ))}
                    </div>
                )}
            </div>
        </a>
    );
}

export default ProductCard;