import React, { Component } from 'react';

const ProductImage = ({ product }) => {
  let productImg = require('../assets/products/' + product.img);
  
  return (
    <img className="product-image" src={productImg}></img>
  )
}

export default ProductImage;
