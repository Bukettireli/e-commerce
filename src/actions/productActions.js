import axiosInstance from '../api/axiosInstance';
import {
  SET_CATEGORIES,
  SET_PRODUCT_LIST,
  SET_TOTAL,
  SET_FETCH_STATE,
  SET_LIMIT,
  SET_OFFSET,
  SET_FILTER,
} from './actionTypes';

// Existing action creators
export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setProductList = (productList) => ({
  type: SET_PRODUCT_LIST,
  payload: productList,
});

export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total,
});

export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState,
});

export const setLimit = (limit) => ({
  type: SET_LIMIT,
  payload: limit,
});

export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: offset,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

// ====================================
// YENİ: Fetch Categories Thunk Action
// ====================================

/**
 * fetchCategories - API'den kategorileri çek
 * 
 * AMAÇ: Uygulama başlangıcında veya Header component'inde
 *       kategorileri API'den çekip Redux'a kaydet
 * 
 * KULLANIM:
 * - Header dropdown'da Kadın/Erkek kategorileri göster
 * - Ana sayfada Top 5 kategori göster (rating'e göre)
 * - Shop sayfasında kategori filtreleme
 */
export const fetchCategories = () => {
  return async (dispatch, getState) => {
    // Kategoriler zaten yüklüyse tekrar çekme (performance)
    const { product } = getState();
    
    if (product.categories.length > 0) {
      console.log('Categories already loaded');
      return;
    }

    try {
      console.log('Fetching categories...');
      
      const response = await axiosInstance.get('/categories');
      
      console.log('✅ Categories fetched:', response.data.length);
      
      dispatch(setCategories(response.data));

    } catch (error) {
      console.error('❌ Error fetching categories:', error);
      dispatch(setCategories([]));
    }
  };
};

// ====================================
// Helper Functions (Kategorileri Filtreleme)
// ====================================

/**
 * Kadın kategorilerini filtrele
 * @param {Array} categories - Tüm kategoriler
 * @returns {Array} - Kadın kategorileri (k: ile başlayanlar)
 */
export const getWomenCategories = (categories) => {
  return categories.filter(cat => cat.code.startsWith('k:'));
};

/**
 * Erkek kategorilerini filtrele
 * @param {Array} categories - Tüm kategoriler
 * @returns {Array} - Erkek kategorileri (e: ile başlayanlar)
 */
export const getMenCategories = (categories) => {
  return categories.filter(cat => cat.code.startsWith('e:'));
};

// ====================================
// Fetch Products Thunk Action
// ====================================

/**
 * fetchProducts - API'den ürünleri çek
 * 
 * AMAÇ: Shop sayfasında ürünleri göstermek için
 *       API'den ürünleri çekip Redux'a kaydet
 * 
 * RESPONSE FORMAT:
 * {
 *   total: 185,
 *   products: [...]
 * }
 */
export const fetchProducts = () => {
  return async (dispatch, getState) => {
    try {
      // 1. Loading başlat
      dispatch(setFetchState('LOADING'));
      
      console.log('Fetching products from API...');
      
      // 2. API'den ürünleri çek
      const response = await axiosInstance.get('/products');
      
      console.log('✅ Products fetched:', response.data.products.length, 'products');
      console.log('Total products in DB:', response.data.total);
      
      // 3. Total'i Redux'a kaydet
      dispatch(setTotal(response.data.total));
      
      // 4. Products'ı Redux'a kaydet
      dispatch(setProductList(response.data.products));
      
      // 5. Loading bitir
      dispatch(setFetchState('FETCHED'));

    } catch (error) {
      console.error('❌ Error fetching products:', error);
      
      // Hata durumunda boş array kaydet
      dispatch(setProductList([]));
      dispatch(setTotal(0));
      dispatch(setFetchState('FAILED'));
    }
  };
};