import { Link } from 'react-router-dom';
import { products } from '../../../data/products';

function BestsellerProducts() {
    
    const bestsellerProducts = products.slice(0, 8);

    return (
        <section className="w-full py-12 bg-[#FAFAFA] font-montserrat">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                
                <h2 className="text-2xl font-bold text-[#252B42] mb-8">
                    BESTSELLER PRODUCTS
                </h2>

            
                <div className="border-b border-[#ECECEC] mb-8"></div>


                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {bestsellerProducts.map((product) => (
                        <Link 
                            key={product.id} 
                            to={`/product/${product.id}`}
                            className="group"
                        >
                            <div className="flex flex-col">
                                
                                <div className="relative overflow-hidden mb-4 bg-[#F5F5F5] aspect-square">
                                    <img 
                                        src={product.image} 
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                            
                                <div className="text-center">
                                    <h3 className="text-base font-bold text-[#252B42] mb-2 group-hover:text-[#23A6F0] transition">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm font-bold text-[#737373] mb-3">
                                        {product.department}
                                    </p>
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-[#BDBDBD] font-bold text-base line-through">
                                            ${product.originalPrice.toFixed(2)}
                                        </span>
                                        <span className="text-[#2DC071] font-bold text-base">
                                            ${product.price.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default BestsellerProducts;