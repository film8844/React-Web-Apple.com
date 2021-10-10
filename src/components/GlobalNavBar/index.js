import React from 'react';
import './GlobalNavBar.css';
import logo from '../../assets/logo.svg';

const GlobalNavBar = () => {
  return (
    <nav className="global-nav sticky top-0">
      <div className="hidden md:flex max-w-screen-lg px-5 mx-auto  flex-row text-white text-sm font-extralight justify-between items-center">
        <a>
          <img src={logo} />
        </a>
        <a>ร้าน</a>
        <a>Mac</a>
        <a>iPad</a>
        <a>iPhone</a>
        <a>Watch</a>
        <a>TV</a>
        <a>Music</a>
        <a>บริการช่วยเหลือ</a>
        <a>ค้นหา</a>
        <a>ถุง</a>
      </div>
      <div className="flex md:hidden px-5 mx-auto  flex-row text-white text-sm font-extralight justify-between items-center">
        <a>เมนู</a>
        <a>
          <img src={logo} />
        </a>
        <a>ถุง</a>
      </div>
    </nav>
  );
};

export default GlobalNavBar;
