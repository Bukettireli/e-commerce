import axiosInstance from '../api/axiosInstance';
import { SET_USER, SET_ROLES, SET_THEME, SET_LANGUAGE } from './actionTypes';

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