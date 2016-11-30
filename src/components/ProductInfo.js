import React, { Component } from 'react';

import ProductRating from './ProductRating';
import PriceLabel from './PriceLabel';

const ProductInfo = ({ product }) => (
  <div className="product-info container">
    <div className="col-6">
      <ProductRating rating={product.rating} />
    </div>
    <div className="col-6 center">
      <PriceLabel price={product.price} />
    </div>
  </div>
)

export default ProductInfo;
