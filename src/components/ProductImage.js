import React, { Component } from 'react';

const ProductImage = ({ product, small }) => {
  let productImg = require('../assets/products/' + product.img);
  let className= "product-image" + ( small ? " small col-3" : "");

  return (
    <img className={className} src={productImg}></img>
  )
}

export default ProductImage;
