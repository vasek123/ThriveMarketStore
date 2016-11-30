import React, { Component } from 'react';

const ProductHeader = ({ product }) => {

  let name = product.name[0].toUpperCase() + product.name.substring(1).toLowerCase();
  let description = product.description.toLowerCase();

  return (
    <div className="product-header">
      <h2>{name}</h2>
      <h3>{description}</h3>
    </div>
  )
}

export default ProductHeader;
