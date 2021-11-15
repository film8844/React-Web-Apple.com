import React from 'react';

const Iphone13ProAR = () => {
  return (
    <div style={{ backgroundColor: '#fafafa' }}>
      <div className="relative mx-auto max-w-screen-lg px-5 pt-20">
        <div style={{ maxWidth: '440px' }} className="mx-auto md:mx-0">
          <img alt="" src="assets/productServices/iphone/ar-icon.png" />
          <p
            style={{ color: '#1d1d1f' }}
            className="mt-10 text-3xl md:text-6xl font-semibold"
          >
            ใช้ AR เพื่อดูให้หมดทุกมุม
          </p>
          <p className="mt-5 pb-10 md:pb-48 text-2xl text-gray-500 font-semibold ">
            เปิดหน้านี้ใน Safari บน iPhone
            <br />
            หรือ iPad ของคุณ
          </p>
        </div>
        <img
          alt=""
          className="hidden lg:block lg:absolute bottom-0 right-14"
          src="assets/productServices/iphone/iphone-13-pro-ar.jfif"
        />
        <img
          alt=""
          className="mx-auto md:block md:absolute lg:hidden bottom-0 right-14"
          src="assets/productServices/iphone/iphone-13-pro-ar.jfif"
          style={{ maxWidth: '320px' }}
        />
      </div>
    </div>
  );
};

export default Iphone13ProAR;
