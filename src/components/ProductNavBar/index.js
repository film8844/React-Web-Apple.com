import React from 'react';
import './ProductNavBar.css';

const ProductNavBar = (props) => {
  return (
    <nav
      className={`product-nav ${
        !!props.disableSticky ? '' : 'sticky top-0'
      } border-b`}
    >
      <div className="flex max-w-screen-lg px-5 mx-auto flex-row text-black justify-between items-center">
        <h1 className="text-xl font-medium">{props.productName}</h1>
        <span className="text-lg">{props.priceText}</span>
      </div>
    </nav>
  );
};

export default ProductNavBar;
