import React, { Component } from 'react';

import AddToCartButton from '../containers/AddToCartButton';
import CurrentProductQuantity from '../containers/CurrentProductQuantity';

const ProductFooter = ({ quantity, product }) => {
  let component;
  if (quantity > 0) {
    component = <CurrentProductQuantity product={product} />;
  } else {
    component = <AddToCartButton className="add-to-cart-button col-12" text="ADD TO CART" product={product} />;
  }

  return (
    <div className="product-footer container">
      {component}
    </div>
  )
}

export default ProductFooter;
