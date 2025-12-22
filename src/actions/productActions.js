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

// Tek ürün detayı için action (yeni)
export const setProductDetail = (product) => ({
  type: 'SET_PRODUCT_DETAIL',
  payload: product,
});

// ====================================
// Fetch Single Product Thunk Action
// ====================================

/**
 * fetchProduct - Tek bir ürünün detayını API'den çek
 * 
 * @param {number|string} productId - Ürün ID
 * 
 * ÖRNEK KULLANIM:
 * dispatch(fetchProduct(322))
 * → GET /products/322
 * 
 * RESPONSE FORMAT:
 * {
 *   "id": 322,
 *   "name": "Gri Regular Astar",
 *   "description": "...",
 *   "price": 461.99,
 *   "stock": 140,
 *   "rating": 3.64,
 *   "images": [...]
 * }
 */
export const fetchProduct = (productId) => {
  return async (dispatch) => {
    try {
      // 1. Loading başlat
      dispatch(setFetchState('LOADING'));
      
      console.log(`Fetching product ${productId}...`);
      
      // 2. API'den ürün detayını çek
      const response = await axiosInstance.get(`/products/${productId}`);
      
      console.log('✅ Product fetched:', response.data);
      
      // 3. Product detayını Redux'a kaydet
      dispatch(setProductDetail(response.data));
      
      // 4. Loading bitir
      dispatch(setFetchState('FETCHED'));

    } catch (error) {
      console.error('❌ Error fetching product:', error);
      
      // Hata durumunda null kaydet
      dispatch(setProductDetail(null));
      dispatch(setFetchState('FAILED'));
    }
  };
};

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

/**
 * Top N kategoriyi rating'e göre getir
 * @param {Array} categories - Tüm kategoriler
 * @param {Number} limit - Kaç kategori (default: 5)
 * @returns {Array} - En yüksek rating'li kategoriler
 */
export const getTopCategories = (categories, limit = 5) => {
  return [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

// ====================================
// Fetch Products Thunk Action
// ====================================

/**
 * fetchProducts - API'den ürünleri çek
 * 
 * QUERY PARAMETERS:
 * @param {Object} params - Query parametreleri
 * @param {string} params.category - Kategori ID (örn: "2")
 * @param {string} params.sort - Sıralama (örn: "price:desc", "rating:asc")
 * @param {string} params.filter - Filtre metni (örn: "siyah")
 * @param {number} params.limit - Kaç ürün (default: 25)
 * @param {number} params.offset - Kaç ürün atla (default: 0)
 * 
 * ÖRNEK KULLANIM:
 * dispatch(fetchProducts({ category: "2", sort: "price:desc", filter: "siyah", limit: 25, offset: 0 }))
 * → GET /products?category=2&sort=price:desc&filter=siyah&limit=25&offset=0
 * 
 * PAGINATION ÖRNEKLER:
 * Sayfa 1: limit=25&offset=0   (0-25 arası)
 * Sayfa 2: limit=25&offset=25  (25-50 arası)
 * Sayfa 3: limit=25&offset=50  (50-75 arası)
 * 
 * RESPONSE FORMAT:
 * {
 *   total: 185,
 *   products: [...]
 * }
 */
export const fetchProducts = (params = {}) => {
  return async (dispatch) => {
    try {
      // 1. Loading başlat
      dispatch(setFetchState('LOADING'));
      
      console.log('Fetching products with params:', params);
      
      // 2. Query string oluştur
      const queryParams = new URLSearchParams();
      
      if (params.category) {
        queryParams.append('category', params.category);
      }
      if (params.sort) {
        queryParams.append('sort', params.sort);
      }
      if (params.filter) {
        queryParams.append('filter', params.filter);
      }
      
      // Pagination parameters
      const limit = params.limit || 25;
      const offset = params.offset || 0;
      queryParams.append('limit', limit);
      queryParams.append('offset', offset);
      
      const queryString = queryParams.toString();
      const url = `/products?${queryString}`;
      
      console.log('API URL:', url);
      
      // 3. API'den ürünleri çek
      const response = await axiosInstance.get(url);
      
      console.log('✅ Products fetched:', response.data.products.length, 'products');
      console.log('Total products:', response.data.total);
      
      // 4. Total'i Redux'a kaydet
      dispatch(setTotal(response.data.total));
      
      // 5. Products'ı Redux'a kaydet
      dispatch(setProductList(response.data.products));
      
      // 6. Limit ve Offset'i Redux'a kaydet
      dispatch(setLimit(limit));
      dispatch(setOffset(offset));
      
      // 7. Loading bitir
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