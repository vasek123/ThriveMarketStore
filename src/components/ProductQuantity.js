import React, { Component } from 'react';

import Button from './Button';

const ProductQuantity = ({ quantity, setQuantity, small }) => {

  if (!small) {
    return (
      <div className="product-quantity row">
        <Button text="-" className="col-3 quantity-button" onClick={() => setQuantity(quantity - 1)} />
        <div className="col-6">{quantity}</div>
        <Button text="+" className="col-3 quantity-button" onClick={() => setQuantity(quantity + 1)} />
      </div>
    )
  } else {
    return (
      <div className="product-quantity small">
        <Button text="-" className="quantity-button small" onClick={() => setQuantity(quantity - 1)} />
        <span>{quantity}</span>
        <Button text="+" className="quantity-button small" onClick={() => setQuantity(quantity + 1)} />
      </div>
    )
  }
}

export default ProductQuantity;
