import React from 'react';
import './AppleButton.css';

const AppleButton = (props) => {
  return (
    <button
      className={`apple-btn text-white rounded-lg p-1 ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default AppleButton;
