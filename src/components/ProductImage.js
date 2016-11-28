import React, { Component } from 'react';

const ProductImage = ({ product }) => (
  <img className="product-image" src={product.img}></img>
)

export default ProductImage;
