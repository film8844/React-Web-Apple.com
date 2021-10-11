import React from 'react';
import Footer from '../../components/Footer';
import GlobalNavBar from '../../components/GlobalNavBar';
import ProductNavBar from '../../components/ProductNavBar';

const Iphone13Pro = () => {
  return (
    <>
      <GlobalNavBar disableSticky={true} />
      <ProductNavBar productName="iPhone 13 Pro" priceText={'เริ่มต้นที่ ฿38,900'}/>
      <div className="max-w-screen-lg mx-auto px-5 min-h-screen">
        <div className="grid grid-cols-2">
            <div><img src={"/assets/src_image/iphone13Pro/product/iphone-13-pro-family-hero.jpg"} alt="iPhone 13 Pro"/></div>
            <div><h1>ซื้อ iPhone 13 Pro</h1></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Iphone13Pro;
