import React, { Component } from 'react';

import products from '../products.js';

import CartItem from './CartItem';

const renderCartItem = (productId, quantity, key) => {

  let product;
  for (let index in products) {
    if (productId === products[index].id) {
      product = products[index];
      break;
    }
  }

  if (quantity > 0) return <CartItem key={key} product={product} quantity={quantity} />
}

const CartList = ({ cart }) => (
  <div className="cart-list row">
    {
      Object.keys(cart).map((productId, index) => renderCartItem(productId, cart[productId], index))
    }
  </div>
)

export default CartList;
