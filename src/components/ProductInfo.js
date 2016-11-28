import React, { Component } from 'react';

import ProductRating from './ProductRating';
import PriceLabel from './PriceLabel';

const ProductInfo = ({ product }) => (
  <div className="product-info">
    <ProductRating rating={product.rating} />
    <PriceLabel price={product.price} />
  </div>
)

export default ProductInfo;
