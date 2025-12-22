import { useState, useRef, useEffect } from 'react';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItemCount } from '../../actions/shoppingCartActions';

function CartDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const { cart } = useSelector((state) => state.shoppingCart);
    const dispatch = useDispatch();

    // Toplam ürün sayısı
    const totalItems = cart.reduce((sum, item) => sum + item.count, 0);
    
    // Toplam fiyat
    const totalPrice = cart.reduce((sum, item) => sum + (item.product.price * item.count), 0);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleIncrement = (productId, currentCount) => {
        dispatch(updateCartItemCount(productId, currentCount + 1));
    };

    const handleDecrement = (productId, currentCount) => {
        if (currentCount > 1) {
            dispatch(updateCartItemCount(productId, currentCount - 1));
        }
    };

    const handleRemove = (productId) => {
        dispatch(removeFromCart(productId));
    };

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Cart Icon */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative cursor-pointer"
            >
                <ShoppingCart size={16} className="text-[#23A6F0]" />
                {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 text-xs font-bold text-[#23A6F0]">
                        {totalItems}
                    </span>
                )}
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-96 bg-white shadow-2xl border border-gray-200 rounded-lg z-50 max-h-[600px] flex flex-col">
                    {/* Header */}
                    <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                        <h3 className="font-bold text-[#252B42]">Shopping Cart ({totalItems})</h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto p-4">
                        {cart.length === 0 ? (
                            <div className="text-center py-8 text-gray-500">
                                Your cart is empty
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {cart.map((item) => (
                                    <div key={item.product.id} className="flex gap-3 border-b border-gray-100 pb-4">
                                        {/* Product Image */}
                                        <img
                                            src={item.product.images?.[0]?.url || item.product.image || 'https://via.placeholder.com/80'}
                                            alt={item.product.name}
                                            className="w-20 h-20 object-cover rounded"
                                        />

                                        {/* Product Info */}
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-bold text-sm text-[#252B42] truncate mb-1">
                                                {item.product.name}
                                            </h4>
                                            <p className="text-[#23A6F0] font-bold text-sm mb-2">
                                                ${item.product.price}
                                            </p>

                                            {/* Quantity Controls */}
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => handleDecrement(item.product.id, item.count)}
                                                    className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                                                >
                                                    <Minus size={12} />
                                                </button>
                                                <span className="text-sm font-bold w-8 text-center">
                                                    {item.count}
                                                </span>
                                                <button
                                                    onClick={() => handleIncrement(item.product.id, item.count)}
                                                    className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                                                >
                                                    <Plus size={12} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Remove Button */}
                                        <button
                                            onClick={() => handleRemove(item.product.id)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <X size={18} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {cart.length > 0 && (
                        <div className="p-4 border-t border-gray-200">
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-bold text-[#252B42]">Total:</span>
                                <span className="text-xl font-bold text-[#2DC071]">
                                    ${totalPrice.toFixed(2)}
                                </span>
                            </div>
                            <Link
                                to="/cart"
                                onClick={() => setIsOpen(false)}
                                className="block w-full bg-[#23A6F0] text-white text-center py-3 rounded-lg font-bold hover:bg-[#1a8cd8] transition"
                            >
                                View Cart
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default CartDropdown;