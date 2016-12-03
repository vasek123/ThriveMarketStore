import React, { Component } from 'react';

import products from '../products.js';

import TopMenu from '../components/TopMenu';
import Hero from '../components/Hero';
import Product from '../components/Product';

const Shop = (props) => (
  <div className='shop view'>
    <TopMenu />
    <div className="row">
      <Hero text="Hand picked, best quality snacks." />
    </div>
    <div className="row">
      <Product product={products[0]} />
      <Product product={products[1]} />
      <Product product={products[2]} />
    </div>
  </div>
)

export default Shop;
