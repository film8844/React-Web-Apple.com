import React from 'react';
import './GlobalNavBar.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const GlobalNavBar = (props) => {
  return (
    <nav
      className={`global-nav ${!!props.disableSticky ? '' : 'sticky top-0'}`}
    >
      <div className="hidden md:flex max-w-screen-lg px-5 mx-auto flex-row text-white text-sm font-extralight justify-between items-center">
        <Link to="/">
          <img src={logo} />
        </Link>
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
      <div className="flex md:hidden px-5 mx-auto flex-row text-white text-sm font-extralight justify-between items-center">
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
