import { SET_CART, SET_PAYMENT, SET_ADDRESS } from '../actions/actionTypes';

const initialState = {
  cart: [],
  payment: {},
  address: {},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
      
    case 'ADD_TO_CART': {
      const { product } = action.payload;
      
      // Ürün zaten sepette mi?
      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingItemIndex !== -1) {
        // Ürün varsa, count'u artır
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          count: updatedCart[existingItemIndex].count + 1,
        };
        
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        // Ürün yoksa, yeni ekle
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              count: 1,
              checked: true,
              product: product,
            },
          ],
        };
      }
    }

    case 'REMOVE_FROM_CART': {
      const { productId } = action.payload;
      
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== productId),
      };
    }

    case 'UPDATE_CART_ITEM_COUNT': {
      const { productId, count } = action.payload;
      
      const updatedCart = state.cart.map((item) =>
        item.product.id === productId
          ? { ...item, count: Math.max(0, count) }
          : item
      );
      
      // Count 0 ise, sepetten çıkar
      return {
        ...state,
        cart: updatedCart.filter((item) => item.count > 0),
      };
    }

    case 'TOGGLE_CART_ITEM': {
      const { productId } = action.payload;
      
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === productId
            ? { ...item, checked: !item.checked }
            : item
        ),
      };
    }

    case 'CLEAR_CART': {
      return {
        ...state,
        cart: [],
      };
    }
      
    case SET_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
      
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
      
    default:
      return state;
  }
};

export default shoppingCartReducer;