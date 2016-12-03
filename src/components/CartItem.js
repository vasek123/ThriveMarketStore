import React, { Component } from 'react';

import ProductImage from './ProductImage';
import ProductHeader from './ProductHeader';
import CurrentProductQuantity from '../containers/CurrentProductQuantity';
import PriceLabel from './PriceLabel';

const CartItem = ({ product, quantity }) => (
  <div className="cart-item container col-10">
    <div className="col-3">
      <ProductImage product={product} small={true} />
    </div>
    <div className="col-4">
      <ProductHeader product={product} small={true} />
    </div>
    <div className="col-3">
      <CurrentProductQuantity product={product} small={true} />
    </div>
    <div className="col-2">
      <PriceLabel additionalClassNames="cart" product={product} quantity={quantity} rounded={true} />
    </div>
  </div>
)

export default CartItem;
