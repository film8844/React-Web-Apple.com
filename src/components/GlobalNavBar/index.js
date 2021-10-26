import React from 'react';
import './GlobalNavBar.css';
import { Link } from 'react-router-dom';

const GlobalNavBar = (props) => {
  return (
    <nav
      className={`global-nav ${!!props.disableSticky ? '' : 'sticky top-0'}`}
    >
      <div className="hidden md:flex max-w-screen-lg px-5 mx-auto flex-row text-white text-xs font-extralight justify-between items-center">
        <Link to="/">
          <svg
            height="44"
            viewBox="0 0 14 44"
            width="14"
            className="global-nav-icon"
          >
            <path d="m13.0729 17.5214c-.093.0723-1.7248.9915-1.7248 3.0364 0 2.3651 2.0759 3.2017 2.1379 3.2223-.0103.0516-.3305 1.1464-1.0948 2.2618-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6835-.9089-2.4787-2.0243c-.9192-1.3117-1.6628-3.3463-1.6628-5.2776 0-3.0984 2.014-4.7406 3.9969-4.7406 1.0535 0 1.9313.692 2.5923.692.63 0 1.6112-.7333 2.8092-.7333.4545.0001 2.0864.0415 3.1605 1.5803zm-3.7284-2.8918c.4957-.5887.8469-1.4046.8469-2.2205 0-.1136-.0103-.2272-.031-.3202-.8056.031-1.7661.5371-2.3445 1.2084-.4544.5164-.8779 1.3323-.8779 2.1586 0 .1239.0207.2479.031.2892.0516.0103.1343.0207.2169.0207.723-.0001 1.6318-.4855 2.1586-1.1362z" />
          </svg>
        </Link>
        <a href="#" className="text-gray-300 hover:text-white">
          ร้าน
        </a>
        <a href="#" className="text-gray-300 hover:text-white">
          Mac
        </a>
        <a href="#" className="text-gray-300 hover:text-white">
          iPad
        </a>
        <a href="#" className="text-gray-300 hover:text-white">
          iPhone
        </a>
        <a href="#" className="text-gray-300 hover:text-white">
          Watch
        </a>
        <a href="#" className="text-gray-300 hover:text-white">
          AirPods
        </a>
        <a href="#" className="text-gray-300 hover:text-white">
          TV และบ้าน
        </a>
        <a href="#" className="text-gray-300 hover:text-white">
          เฉพาะที่ Apple
        </a>
        <a href="#" className="text-gray-300 hover:text-white">
          อุปกรณ์เสริม
        </a>
        <Link to="/help">
          <a href="#" className="text-gray-300 hover:text-white">
            บริการช่วยเหลือ
          </a>
        </Link>
        <a href="#">
          <svg
            height="44"
            viewBox="0 0 13 44"
            width="13"
            className="global-nav-icon"
          >
            <path d="M13.98,27.343l-3.5-3.5a5.436,5.436,0,1,0-.778.777l3.5,3.5a.55.55,0,1,0,.778-.778ZM1.959,20.418a4.319,4.319,0,1,1,4.319,4.32A4.323,4.323,0,0,1,1.959,20.418Z" />
          </svg>
        </a>
        <Link to="/bag">
          <svg
            height="44"
            viewBox="0 0 13 44"
            width="13"
            className="global-nav-icon"
          >
            <path d="m12 25.9c0 .6-.5 1.1-1.1 1.1h-8.8c-.6 0-1.1-.5-1.1-1.1v-7.9c0-.5.5-1 1.1-1h8.9c.6 0 1.1.5 1.1 1.1v7.8zm-5.5-11.9c1.2 0 2.1.9 2.3 2h-4.6c.2-1.1 1.1-2 2.3-2zm4.4 2h-1.1c-.2-1.7-1.6-3-3.3-3s-3.1 1.3-3.3 3h-1.1c-1.2 0-2.1.9-2.1 2.1v7.9c0 1.1.9 2 2.1 2h8.9c1.1 0 2.1-.9 2.1-2.1v-7.9c-.1-1.1-1-2-2.2-2z" />
          </svg>
        </Link>
      </div>
      <div className="flex md:hidden px-5 mx-auto flex-row text-white text-sm font-extralight justify-between items-center">
        <a href="#">เมนู</a>
        <Link to="/">
          <img src="/assets/globalNavbar/logo.svg" alt="Apple" />
        </Link>
        <Link to="/bag">
          {' '}
          <img src="/assets/globalNavbar/bag.svg" alt="Bag" />
        </Link>
      </div>
    </nav>
  );
};

export default GlobalNavBar;
