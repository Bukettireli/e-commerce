import { SET_CART, SET_PAYMENT, SET_ADDRESS } from './actionTypes';

// Mevcut actions (korundu)
export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart,
});

export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
});

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});

// ====================================
// YENİ: Cart Management Actions
// ====================================

/**
 * addToCart - Ürünü sepete ekle
 * 
 * Eğer ürün sepette varsa: count + 1
 * Eğer ürün sepette yoksa: yeni item ekle
 * 
 * @param {Object} product - Ürün objesi
 */
export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: { product },
});

/**
 * removeFromCart - Ürünü sepetten çıkar
 * 
 * @param {string|number} productId - Ürün ID
 */
export const removeFromCart = (productId) => ({
  type: 'REMOVE_FROM_CART',
  payload: { productId },
});

/**
 * updateCartItemCount - Sepetteki ürünün sayısını güncelle
 * 
 * @param {string|number} productId - Ürün ID
 * @param {number} count - Yeni miktar
 */
export const updateCartItemCount = (productId, count) => ({
  type: 'UPDATE_CART_ITEM_COUNT',
  payload: { productId, count },
});

/**
 * toggleCartItem - Ürünün checked durumunu değiştir
 * 
 * @param {string|number} productId - Ürün ID
 */
export const toggleCartItem = (productId) => ({
  type: 'TOGGLE_CART_ITEM',
  payload: { productId },
});

/**
 * clearCart - Sepeti temizle
 */
export const clearCart = () => ({
  type: 'CLEAR_CART',
});