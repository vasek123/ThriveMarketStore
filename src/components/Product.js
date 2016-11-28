import React, { Component } from 'react';

import ProductHeader from './ProductHeader';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

const Product = ({ product }) => (
  <div className="product">
    <ProductHeader product={product} />
    <ProductImage product={product} />
    <ProductInfo product={product} />
    {/* Add to cart button */}
  </div>
)

export default Product;
