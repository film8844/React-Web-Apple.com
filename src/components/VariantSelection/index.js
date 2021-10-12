import React from 'react';

const VariantSelection = (props) => {
  return (
    <div
      id={props.id}
      className={`mt-5 pt-5 relative ${props.hidden ? 'hidden' : ''}`}
    >
      <div
        className={`${
          props.allowSelect ? 'hidden' : ''
        } absolute bg-white bg-opacity-50 h-full w-full`}
      ></div>
      {props.children}
    </div>
  );
};

export default VariantSelection;
