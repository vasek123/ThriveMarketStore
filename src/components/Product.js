import React, { Component } from 'react';

import ProductHeader from './ProductHeader';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import ProductFooterManager from '../containers/ProductFooterManager';

const Product = ({ product }) => (
  <div className="col-4 product">
    <ProductHeader product={product} />
    <ProductImage product={product} />
    <ProductInfo product={product} />
    <ProductFooterManager productId={product.id} />
  </div>
)

export default Product;
