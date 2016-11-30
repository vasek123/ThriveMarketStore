import React, { Component } from 'react';

const ProductQuantity = ({ quantity }) => (
  <div className="product-quantity container">
    <div className="col-3">-</div>
    <div className="col-6">{quantity}</div>
    <div className="col-3">+</div>
  </div>
)

export default ProductQuantity;
