import React, { Component } from 'react';

import Star from './Star';

const ProductRating = ({ rating }) => (
  <div className="product-rating">
    <Star filled={rating > 0} />
    <Star filled={rating > 1} />
    <Star filled={rating > 2} />
    <Star filled={rating > 3} />
    <Star filled={rating > 4} />
  </div>
)

export default ProductRating;
