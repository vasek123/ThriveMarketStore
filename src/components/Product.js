import React, { Component } from 'react';

import ProductHeader from './ProductHeader';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import AddToCartButton from '../containers/AddToCartButton';
import CurrentProductQuantity from '../containers/CurrentProductQuantity';

const Product = ({ product }) => (
  <div className="col-4 product">
    <ProductHeader product={product} />
    <ProductImage product={product} />
    <ProductInfo product={product} />
    {/*<AddToCartButton className="add-to-cart-button" text="ADD TO CART" productId={product.id} />*/}
    <CurrentProductQuantity productId={product.id} />
  </div>
)

export default Product;
