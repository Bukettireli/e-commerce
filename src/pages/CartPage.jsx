import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { 
  removeFromCart, 
  updateCartItemCount, 
  toggleCartItem 
} from '../actions/shoppingCartActions';

function CartPage() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.shoppingCart);

  // Seçili ürünlerin toplam tutarı
  const totalAmount = cart
    .filter((item) => item.checked)
    .reduce((sum, item) => sum + item.product.price * item.count, 0);

  // Seçili ürün sayısı
  const selectedCount = cart.filter((item) => item.checked).length;

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

  const handleToggle = (productId) => {
    dispatch(toggleCartItem(productId));
  };

  // Boş sepet durumu
  if (cart.length === 0) {
    return (
      <Layout>
        <div className="bg-[#FAFAFA] py-20" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <ShoppingBag size={80} className="mx-auto text-[#BDBDBD] mb-6" />
            <h2 className="text-2xl font-bold text-[#252B42] mb-4">
              Your cart is empty
            </h2>
            <p className="text-[#737373] mb-8">
              Add items to get started
            </p>
            <Link
              to="/shop"
              className="inline-block px-8 py-3 bg-[#23A6F0] text-white font-bold rounded hover:bg-[#1a8cd8] transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-white py-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#252B42] mb-2">Shopping Cart</h1>
            <p className="text-[#737373]">{cart.length} items in your cart</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="bg-white border border-[#ECECEC] rounded-lg p-6 hover:shadow-md transition"
                  >
                    <div className="flex items-center gap-4">
                      {/* Checkbox */}
                      <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => handleToggle(item.product.id)}
                        className="w-5 h-5 text-[#23A6F0] border-[#BDBDBD] rounded focus:ring-[#23A6F0] cursor-pointer"
                      />

                      {/* Product Image */}
                      <Link to={`/product/${item.product.id}`}>
                        <img
                          src={
                            item.product.images?.[0]?.url ||
                            item.product.image ||
                            'https://via.placeholder.com/100'
                          }
                          alt={item.product.name}
                          className="w-24 h-24 object-cover rounded border border-[#ECECEC]"
                        />
                      </Link>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <Link
                          to={`/product/${item.product.id}`}
                          className="block"
                        >
                          <h3 className="font-bold text-[#252B42] mb-1 hover:text-[#23A6F0] transition truncate">
                            {item.product.name}
                          </h3>
                        </Link>
                        <p className="text-sm text-[#737373] mb-3">
                          {item.product.description?.substring(0, 80)}...
                        </p>

                        <div className="flex items-center gap-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-[#ECECEC] rounded">
                            <button
                              onClick={() => handleDecrement(item.product.id, item.count)}
                              className="p-2 hover:bg-[#F3F3F3] transition"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={16} className="text-[#737373]" />
                            </button>
                            <span className="px-4 text-sm font-bold text-[#252B42] min-w-[40px] text-center">
                              {item.count}
                            </span>
                            <button
                              onClick={() => handleIncrement(item.product.id, item.count)}
                              className="p-2 hover:bg-[#F3F3F3] transition"
                              aria-label="Increase quantity"
                            >
                              <Plus size={16} className="text-[#737373]" />
                            </button>
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => handleRemove(item.product.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded transition"
                            aria-label="Remove item"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-xl font-bold text-[#23A6F0]">
                          ${(item.product.price * item.count).toFixed(2)}
                        </p>
                        <p className="text-sm text-[#737373]">
                          ${item.product.price.toFixed(2)} each
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#FAFAFA] border border-[#ECECEC] rounded-lg p-6 sticky top-4">
                <h2 className="text-xl font-bold text-[#252B42] mb-6">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#737373]">Selected Items:</span>
                    <span className="font-bold text-[#252B42]">{selectedCount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#737373]">Subtotal:</span>
                    <span className="font-bold text-[#252B42]">
                      ${totalAmount.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#737373]">Shipping:</span>
                    <span className="font-bold text-[#2DC071]">Free</span>
                  </div>
                </div>

                <div className="border-t border-[#ECECEC] pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-[#252B42]">Total:</span>
                    <span className="text-2xl font-bold text-[#23A6F0]">
                      ${totalAmount.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  disabled={selectedCount === 0}
                  className="w-full bg-[#23A6F0] text-white py-3 rounded font-bold hover:bg-[#1a8cd8] transition disabled:bg-[#BDBDBD] disabled:cursor-not-allowed"
                >
                  Proceed to Checkout
                </button>

                <Link
                  to="/shop"
                  className="block text-center text-[#23A6F0] text-sm font-bold mt-4 hover:text-[#1a8cd8] transition"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CartPage;