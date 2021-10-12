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
          <img src={logo} alt="Apple" />
        </Link>
        <a href="#">ร้าน</a>
        <a href="#">Mac</a>
        <a href="#">iPad</a>
        <a href="#">iPhone</a>
        <a href="#">Watch</a>
        <a href="#">TV</a>
        <a href="#">Music</a>
        <Link to="/help">
          <a href="#">บริการช่วยเหลือ</a>
        </Link>
        <a href="#">ค้นหา</a>
        <a href="#">ถุง</a>
      </div>
      <div className="flex md:hidden px-5 mx-auto flex-row text-white text-sm font-extralight justify-between items-center">
        <a href="#">เมนู</a>
        <Link to="/">
          <img src={logo} alt="Apple" />
        </Link>
        <a href="#">ถุง</a>
      </div>
    </nav>
  );
};

export default GlobalNavBar;
