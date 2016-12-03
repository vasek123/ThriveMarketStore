import React, { Component } from 'react';

import products from '../products';

import TopMenu from '../components/TopMenu';
import Hero from '../components/Hero';
import CartListContainer from '../containers/CartListContainer';

const Cart = () => (
  <div className='cart view'>
    <TopMenu />
    <Hero text="Summary" />
    <CartListContainer />
  </div>
)

export default Cart
