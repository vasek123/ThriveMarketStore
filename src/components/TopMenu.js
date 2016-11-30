import React, { Component } from 'react';

import Icon from './Icon';

let logoImg = require('../assets/logo.png');

const TopMenu = () => (
  <div className="row top-menu">
    <div className="col-2">
      <img src={logoImg}></img>
    </div>
    <div className="col-8"></div>
    <div className="col-1 right"><Icon name="search" size="36" /></div>
    <div className="col-1 right"><Icon name="shopping_cart" size="36" /></div>
  </div>
)

export default TopMenu;
