import React, { Component } from 'react';

const ProductHeader = ({ product }) => (
  <div className="product-header">
    <h2>{product.name}</h2>
    <h3>{product.description}</h3>
  </div>
)

export default ProductHeader;
