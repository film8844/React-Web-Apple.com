import React, { useState } from 'react';
import Footer from '../../components/Footer';
import GlobalNavBar from '../../components/GlobalNavBar';
import ProductNavBar from '../../components/ProductNavBar';

import './style.css';

const Iphone13Pro = () => {
  const [variantType, setVariantType] = useState('');
  const handleChangeVariantType = (event) => {
    console.log(event.target.value);
    setVariantType(event.target.value);
  };
  return (
    <>
      <GlobalNavBar disableSticky={true} />
      <ProductNavBar
        productName="iPhone 13 Pro"
        priceText={'เริ่มต้นที่ ฿38,900'}
      />
      <div className="max-w-screen-lg mx-auto px-5 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center flex-row">
            <img
              src={
                '/assets/src_image/iphon13Pro/product/iphone-13-pro-family-hero.png'
              }
              alt="iPhone 13 Pro"
            />
          </div>
          <div className="md:pl-20">
            <div className="mt-14">
              <p className="text-red-600 text-xl mb-2">ใหม่</p>
              <h1 className="text-4xl font-semibold">ซื้อ iPhone 13 Pro</h1>
              <div className="mt-5">
                <h4 className="text-xl font-bold">เลือกรุ่น</h4>
                <span className="text-blue-600">รุ่นไหนเหมาะกับคุณ</span>
                <div id="varaintTypeOptions" className="mt-3 space-y-3">
                  <div className="variant-option">
                    <input
                      type="radio"
                      id="variantType-pro"
                      value="pro"
                      name="variantType"
                      onChange={handleChangeVariantType}
                      className="hidden"
                    />
                    <label htmlFor="variantType-pro">
                      <div
                        className={`flex flex-row justify-between items-center border-gray-300 rounded-xl p-5 ${
                          variantType == 'pro'
                            ? 'border border-blue-500 outline-blue-500'
                            : 'border'
                        }`}
                      >
                        <div>
                          <p className="text-lg font-medium">iPhone 13 Pro</p>
                          <p className="text-sm">จอภาพขนาด 6.1 นิ้ว¹</p>
                        </div>
                        <span>เริ่มต้นที่ ฿38,900</span>
                      </div>
                    </label>
                  </div>
                  <div className="variant-option">
                    <input
                      type="radio"
                      id="variantType-promax"
                      value="promax"
                      name="variantType"
                      onChange={handleChangeVariantType}
                      className="hidden"
                    />
                    <label htmlFor="variantType-promax">
                      <div
                        className={`flex flex-row justify-between items-center border-gray-300 rounded-xl p-5 ${
                          variantType == 'promax'
                            ? 'border border-blue-500 outline-blue-500'
                            : 'border'
                        }`}
                      >
                        <div>
                          <p className="text-lg font-medium">
                            iPhone 13 Pro Max
                          </p>
                          <p className="text-sm">จอภาพขนาด 6.7 นิ้ว¹</p>
                        </div>
                        <span>เริ่มต้นที่ ฿42,900</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Iphone13Pro;
