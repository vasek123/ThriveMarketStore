/*
 * Action types
 */

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_QUANTITY = 'SET_QUANTITY';

/*
 * Action creators
 */

 export function addToCart(productId, quantity) {
   return {
     type: ADD_TO_CART,
     productId: productId,
     quantity: quantity || 1
   }
 }

 export function removeFromCart(productId) {
   return {
     type: REMOVE_FROM_CART,
     productId: productId
   }
 }

export function setQuantity(productId, quantity) {
  return {
    type: SET_QUANTITY,
    productId: productId,
    quantity: quantity
  }
}
