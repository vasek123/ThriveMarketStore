import React, { Component } from 'react';

const PriceLabel = ({ product, quantity, rounded, additionalClassNames }) => {

  let price = product.price * (quantity ? quantity : 1);
  if (rounded != undefined && rounded) {
    price = Math.round(price);
  }
  let className = "price-label" + (additionalClassNames ? " " + additionalClassNames : "");

  return (
    <span className={className}>${price}</span>
  )
}

export default PriceLabel;
