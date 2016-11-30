import React, { Component } from 'react';

import Button from './Button';

const ProductQuantity = ({ quantity, setQuantity }) => (
  <div className="product-quantity row">
    <Button text="-" className="col-3 quantity-button" onClick={() => { setQuantity(quantity - 1)}} />
    <div className="col-6">{quantity}</div>
    <Button text="+" className="col-3 quantity-button" onClick={() => { setQuantity(quantity + 1)}} />
  </div>
)

export default ProductQuantity;
