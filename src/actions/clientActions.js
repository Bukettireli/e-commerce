import axiosInstance from '../api/axiosInstance';
import { SET_USER, SET_ROLES, SET_THEME, SET_LANGUAGE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';
import { toast } from 'react-toastify';

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


export const loginUser = (credentials, rememberMe = false, navigate, from = '/') => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });

      const response = await axiosInstance.post('/login', credentials);
      const { token, ...userData } = response.data;

      
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


export const logoutUser = () => {
  return (dispatch) => {
   
    localStorage.removeItem('token');
    
    
    delete axiosInstance.defaults.headers.common['Authorization'];
    
    dispatch(setUser({}));
   
    toast.info('Successfully logged out', {
      position: 'top-right',
      autoClose: 2000,
    });
    
  };
};


export const verifyToken = () => {
  return async (dispatch) => {
    try {
      
      const token = localStorage.getItem('token');
      
      if (!token) {
        return;
      }

     
      axiosInstance.defaults.headers.common['Authorization'] = token;

      const response = await axiosInstance.get('/verify');
      if (response.data) {
        dispatch(setUser(response.data));
        
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          axiosInstance.defaults.headers.common['Authorization'] = response.data.token;
        }
      }

    } catch (error) {
      
      console.error('Token verification failed:', error);
    
      localStorage.removeItem('token');
      
      delete axiosInstance.defaults.headers.common['Authorization'];
      
      dispatch(setUser({}));
    }
  };
};