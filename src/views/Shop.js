import React, { Component } from 'react';

import products from '../products.js';
console.log(products);

import TopMenu from '../components/TopMenu';
import Product from '../components/Product';

const Shop = (props) => (
  <div className='shop view'>
    <TopMenu />
    <Product product={products[0]} />
    <p>Shop view</p>
  </div>
)

export default Shop;
