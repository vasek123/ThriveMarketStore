import React, { Component } from 'react';

//import stars
let starEmpty = require('../assets/star-empty.png');
let starFilled = require('../assets/star-filled.png');

const Star = ({ filled }) => (
  <img className="star" src={filled ? starFilled : starEmpty}></img>
)

export default Star;
