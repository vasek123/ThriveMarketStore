import React, { Component } from 'react';

const ProductHeader = ({ product, small }) => {

  let name = product.name[0].toUpperCase() + product.name.substring(1).toLowerCase();
  let description = product.description.toLowerCase();
  let className = "product-header" + (small ? " small" : "");

  return (
    <div className={className}>
      <h2>{name}</h2>
      <h3>{description}</h3>
    </div>
  )
}

export default ProductHeader;
