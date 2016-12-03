import React, { Component } from 'react';

import TotalPrice from './TotalPrice';
import Button from './Button';

const CartFooter = ({ cart }) => {

  let quantity = 0;

  for (let item in cart) {
    quantity += cart[item];
  }

  if (quantity > 0) {
    return (
      <div className="cart-footer row">
        <TotalPrice cart={cart} />
        <Button text="ORDER NOW" className="large" onClick={() => { console.log("test")}} />
      </div>
    )
  } else {
    return (
      <div className="cart-footer row"></div>
    )
  }
}

export default CartFooter;
