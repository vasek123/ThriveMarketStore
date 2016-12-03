import React, { Component } from 'react';

import products from '../products.js';

const TotalPrice = ({ cart }) => {

  let totalPrice = 0;
  for (let item in cart) {
    let price;
    for (let i = 0; i < products.length; i++) {
      if (item === products[i].id) price = products[i].price;
    }
    totalPrice += cart[item] * price;
  }

  totalPrice = Math.round(totalPrice * 10) / 10;

  return (
    <div className="total-price">
      <span>Total price</span>
      <h2>${totalPrice}</h2>
    </div>
  )

}

export default TotalPrice;
