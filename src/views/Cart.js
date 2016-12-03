import React, { Component } from 'react';

import products from '../products';

import TopMenu from '../components/TopMenu';
import Hero from '../components/Hero';
import CartListContainer from '../containers/CartListContainer';
import CartFooterContainer from '../containers/CartFooterContainer';

const Cart = () => (
  <div className='cart view'>
    <TopMenu />
    <Hero text="Order summary" />
    <CartListContainer />
    <CartFooterContainer />
  </div>
)

export default Cart
