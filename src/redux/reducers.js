import { ADD_TO_CART, REMOVE_FROM_CART, SET_QUANTITY } from './actions'

const initialState = {
  cart: {}
}

export function cartReducer (state = initialState, action) {

  switch(action.type) {

    case ADD_TO_CART:
      var newCart = Object.assign({}, state.cart);
      if (typeof state.cart[action.productId] === 'undefined' || state.cart[action.productId] === 0) newCart[action.productId] = action.quantity;
      return Object.assign({}, state, { cart: Object.assign({}, newCart) });

    case REMOVE_FROM_CART:
      var newCart = Object.assign({}, state.cart);
      delete newCart[action.productId];
      return Object.assign({}, state, { cart: Object.assign({}, newCart) });

    case SET_QUANTITY:
      var newCart = Object.assign({}, state.cart);
      newCart[action.productId] = action.quantity > 0 ? action.quantity : 0;
      return Object.assign({}, state, { cart: Object.assign({}, newCart) });

    default:
      return state

  }

}

export default cartReducer;
