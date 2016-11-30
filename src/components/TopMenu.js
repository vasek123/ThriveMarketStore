import React, { Component } from 'react';

import { Link } from 'react-router';
import Icon from './Icon';

let logoImg = require('../assets/logo.png');

const TopMenu = () => (
  <div className="row top-menu">

    <div className="col-2">
      <Link to="/"><img src={logoImg}></img></Link>
    </div>

    <div className="col-8"></div>

    <div className="col-1 right">
      <Icon name="search" size="36px" />
    </div>

    <div className="col-1 right">
      <Link to="/cart"><Icon name="shopping_cart" size="36px" /></Link>
    </div>

  </div>
)

export default TopMenu;
