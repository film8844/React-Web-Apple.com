import React from 'react';
import Footer from '../../components/Footer';
import GlobalNavBar from '../../components/GlobalNavBar';
import './index.css';
import logo from '../../assets/logo.svg';

const Home = () => {
  return (
    <>
      <GlobalNavBar />
      <div className="pt-20 my-2 bg-iPhone13pro">
        <div className="text-center">
          <h2 className="text-5xl font-bold">iPhone 13 Pro</h2>
          <p className="text-3xl mt-2">โปรสมชื่อ</p>
        </div>
        <div className="mt-5 text-center text-xl text-blue-600">
          <a className="mr-4">ดูเพิ่มเติม</a>
          <a>ซื้อ</a>
        </div>
        <img
          src="/assets/home_images/hero_iphone13pro.jpg"
          className="hidden md:block mx-auto px-5 mt-10"
          style={{ maxWidth: '600px' }}
        />
        <img
          src="/assets/home_images/hero_iphone13pro_small.jpg"
          className="block md:hidden mx-auto px-5 mt-10"
          style={{ maxWidth: '300px' }}
        />
      </div>
      <div className="my-2 bg-iPhone13 overflow-hidden">
        <img
          src="/assets/home_images/top_iPhone13_small.png"
          className="block md:hidden mx-auto px-5 mb-5"
          style={{ maxWidth: '300px' }}
        />
        <div className="text-center md:mt-20">
          <h2 className="text-5xl font-bold text-white">iPhone 13 </h2>
          <p className="text-3xl mt-2 color-iPhone13">พลังพิเศษในมือคุณ</p>
        </div>
        <div className="mt-5 text-center text-xl text-blue-600">
          <a className="mr-4">ดูเพิ่มเติม</a>
          <a>ซื้อ</a>
        </div>
        <img
          src="/assets/home_images/hero_iphone13.png"
          className="hidden md:block mx-auto px-5 mt-10"
          style={{ maxWidth: '1050px' }}
        />
        <img
          src="/assets/home_images/bottom_iPhone13_small.png"
          className="block md:hidden mx-auto px-5 mt-5"
          style={{ maxWidth: '300px' }}
        />
      </div>
      <div className="pt-20 my-2 bg-iPhone13pro">
        <div className="text-center">
          <h2 className="text-4xl font-bold"><img src={logo} />WATCH</h2>
          <p className="text-3l mt-2 ">SERIES 7</p>
          <p className="text-3xl mt-2">จัดเต็มแบบเต็มจอ</p>
        </div>
        <div className="mt-5 text-center text-xl text-blue-600">
          <a className="mr-4">ดูเพิ่มเติม</a>
          <a>ซื้อ</a>
        </div>
        <img
          src="/assets/home_images/apple_watch.jpg"
          className="hidden md:block mx-auto px-5 mt-10"
          style={{ maxWidth: '550px' }}
        />
        <img
          src="/assets/home_images/hero_iphone13pro_small.jpg"
          className="block md:hidden mx-auto px-5 mt-10"
          style={{ maxWidth: '300px' }}
        />
      </div>
      <div className="grid grid-cols-2 gap-2 text-center ">
        <div className=" bg-blue-500">1</div>
        <div className="bg-red-400">2</div>
        <div className="bg-yellow-300" >3</div>
        <div className=" bg-blue-500">1</div>
        <div className="bg-red-400">2</div>
        <div className="bg-yellow-300" >3</div>
        <div className=" bg-blue-500">1</div>
        <div className="bg-red-400">2</div>
        <div className="bg-yellow-300" >3</div>
        <div className=" bg-blue-500">1</div>
        <div className="bg-red-400">2</div>
        <div className="bg-yellow-300" >3</div>


      </div>
      <Footer />
    </>
  );
};

export default Home;