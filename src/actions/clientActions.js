import axiosInstance from '../api/axiosInstance';
import { SET_USER, SET_ROLES, SET_THEME, SET_LANGUAGE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';
import { toast } from 'react-toastify';

// Existing actions
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const fetchRoles = () => {
  return async (dispatch, getState) => {
    const { client } = getState();
    
    if (client.roles.length > 0) {
      return;
    }

    try {
      const response = await axiosInstance.get('/roles');
      dispatch(setRoles(response.data));
    } catch (error) {
      console.error('Error fetching roles:', error);
    }
  };
};

// Login action
export const loginUser = (credentials, rememberMe = false, navigate, from = '/') => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });

      const response = await axiosInstance.post('/login', credentials);
      const { token, ...userData } = response.data;

      // Remember me varsa token'ı kaydet
      if (rememberMe && token) {
        localStorage.setItem('token', token);
      }

      dispatch(setUser(userData));
      dispatch({ type: LOGIN_SUCCESS });

      toast.success('Successfully logged in!', {
        position: 'top-right',
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate(from);
      }, 500);

    } catch (error) {
      dispatch({ type: LOGIN_FAILURE });

      const errorMessage = error.response?.data?.message || 'Login failed. Please check your credentials.';
      toast.error(errorMessage, {
        position: 'top-right',
        autoClose: 3000,
      });

      console.error('Login error:', error);
    }
  };
};

// Logout action
export const logoutUser = () => {
  return (dispatch) => {
    // Token'ı temizle
    localStorage.removeItem('token');
    
    // Axios header'dan token'ı sil
    delete axiosInstance.defaults.headers.common['Authorization'];
    
    // User state'ini temizle
    dispatch(setUser({}));
    
    // Toast mesajı göster
    toast.info('Successfully logged out', {
      position: 'top-right',
      autoClose: 2000,
    });
    
    // NOT: navigate() kaldırıldı - kullanıcı bulunduğu sayfada kalır
  };
};

// ====================================
// Token Verification Action
// ====================================

/**
 * verifyToken - Uygulama başlangıcında token'ı doğrular
 * 
 * AMAÇ: Kullanıcı sayfayı yenilediğinde veya tekrar açtığında
 *       localStorage'daki token'ı kontrol eder ve geçerliyse
 *       kullanıcıyı otomatik olarak login yapar.
 * 
 * ÇALIŞMA MANTIĞI:
 * 1. localStorage'dan token'ı al
 * 2. Token yoksa → return (hiçbir şey yapma)
 * 3. Token varsa:
 *    - Axios header'a token ekle (Bearer prefix olmadan!)
 *    - GET /verify endpoint'ine istek at
 *    - Token geçerliyse → User bilgisini Redux'a kaydet
 *    - Token geçersizse → localStorage ve header'dan sil
 */
export const verifyToken = () => {
  return async (dispatch) => {
    try {
      // 1. localStorage'dan token'ı al
      const token = localStorage.getItem('token');
      
      // 2. Token yoksa işlem yapma
      if (!token) {
        return;
      }

      // 3. Axios header'a token ekle (NOT: Bearer prefix EKLEME!)
      axiosInstance.defaults.headers.common['Authorization'] = token;

      // 4. /verify endpoint'ine GET request at
      const response = await axiosInstance.get('/verify');

      // 5. Token geçerliyse: User bilgisini Redux'a kaydet
      if (response.data) {
        dispatch(setUser(response.data));
        
        // 6. Backend yeni token dönüyorsa güncelle
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          axiosInstance.defaults.headers.common['Authorization'] = response.data.token;
        }
      }

    } catch (error) {
      // 7. Token geçersizse: Temizlik yap
      console.error('Token verification failed:', error);
      
      // localStorage'dan token'ı sil
      localStorage.removeItem('token');
      
      // Axios header'dan token'ı sil
      delete axiosInstance.defaults.headers.common['Authorization'];
      
      // User state'ini temizle
      dispatch(setUser({}));
    }
  };
};