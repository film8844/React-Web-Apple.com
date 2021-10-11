import React from 'react';
import Footer from '../../components/Footer';
import GlobalNavBar from '../../components/GlobalNavBar';

const Home = () => {
  return (
    <>
      <GlobalNavBar />
      <div>
        <div className="mt-20 text-center">
          <h2 className="text-5xl font-bold">iPhone 13 Pro</h2>
          <p className="text-3xl mt-2">โปรสมชื่อ</p>
        </div>
        <div className="mt-5 text-center text-xl text-blue-600">
          <a className="mr-4">ดูเพิ่มเติม</a>
          <a>ซื้อ</a>
        </div>
        <img
          src="/assets/hero_iphone13pro.jpg"
          className="hidden md:block mx-auto px-5 mt-10"
          style={{ maxWidth: '600px' }}
        />
        <img
          src="/assets/hero_iphone13pro_small.jpg"
          className="block md:hidden mx-auto px-5 mt-10"
          style={{ maxWidth: '300px' }}
        />
      </div>
      <Footer/>
    </>
  );
};

export default Home;