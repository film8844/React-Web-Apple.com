import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useStore } from '../../store/store';

import Footer from '../../components/Footer';
import GlobalNavBar from '../../components/GlobalNavBar';
import ProductNavBar from '../../components/ProductNavBar';
import QuestionBox from '../../components/QuestionBox';
import VariantOption from '../../components/VariantOption';
import VariantSelection from '../../components/VariantSelection';

import WhatsInTheBox from './WhatsInTheBox';
import AppleButton from '../../components/AppleButton';

const ipadminiPrice = {
  wifi: {
    '64GB': 17900,
    '256GB': 23400,
  },
  cellular: {
    '64GB': 23400,
    '256GB': 28900,
  },
};

const colorNameTH = {
  spacegray: 'เทาสเปซเกรย์',
  pink: 'ชมพู',
  purple: 'ม่วง',
  starlight: 'สตาร์ไลท์',
};

const IpadMini = () => {
  const history = useHistory();
  const store = useStore();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [price, setPrice] = useState(ipadminiPrice['wifi']['64GB']);
  const [priceText, setPriceText] = useState('เริ่มต้นที่ ฿17,900');
  const [productImage, setProductImage] = useState('ipadmini-family.jpeg');

  const [variantType, setVariantType] = useState('');
  const handleChangeVariantType = type => {
    setVariantType(type);
  };

  const [variantColor, setVariantColor] = useState('');
  const handleChangeVariantColor = color => {
    setVariantColor(color);
    setProductImage(`ipadmini-${color}.png`);
  };

  const [variantStorage, setVariantStorage] = useState('');
  const handleChangeVariantStorage = storage => {
    setVariantStorage(storage);
  };

  const [variantEngraving, setVariantEngraving] = useState('');
  const handleChangeVariantEngraving = engraving => {
    setVariantEngraving(engraving);
    setTimeout(() => {
      const element = document.getElementById('checkout');
      const yOffset = -50;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }, 100);
  };

  const [variantAppleCare, setVariantAppleCare] = useState(false);
  const handleChangeVariantAppleCare = () => {
    setVariantAppleCare(!variantAppleCare);
  };

  useEffect(() => {
    let calPrice;
    if (!variantType) {
      calPrice =
        ipadminiPrice['wifi'][!!variantStorage ? variantStorage : '64GB'];
      setPriceText(`เริ่มต้นที่ ฿${Number(calPrice).toLocaleString('en')}`);
    } else {
      calPrice = ipadminiPrice[variantType][variantStorage];
      if (variantAppleCare) {
        calPrice += 2590;
      }
      setPriceText(
        `฿${Number(calPrice).toLocaleString('en', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`
      );
    }
    setPrice(calPrice);
  }, [variantType, variantStorage, variantAppleCare]);

  const addProductToBag = () => {
    console.log('add product');
    const { bag, setBag } = store;
    const product = {
      id: Date.now(),
      product: 'iphone13pro',
      name: `iPad mini รุ่น ${
        variantType === 'wifi' ? 'Wi-fi' : 'Wi-fi + Cellular'
      } ${variantStorage} - สี${colorNameTH[variantColor]}`,
      shortName: `iPad mini (รุ่นที่ 6)`,
      color: variantColor,
      type: variantType,
      storage: variantStorage,
      appleCare: variantAppleCare,
      appleCareCost: 2590,
      price: price,
      image: `/assets/products/ipadmini/${productImage}`,
    };
    setBag([...bag, product]);
    history.push('/bag');
  };

  return (
    <>
      <GlobalNavBar disableSticky={true} />
      <ProductNavBar productName="iPad mini" priceText={priceText} />
      <div className="bg-gray-100">
        <div className="max-w-screen-lg m-auto">
          <p className="text-sm text-center px-5 py-3">
            มีการผ่อนชำระในอัตราดอกเบี้ย 0% นานสูงสุด 10 เดือน{' '}
            <span className="text-blue-600">ดูเพิ่มเติม</span>
          </p>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto px-5 min-h-screen">
        <div
          id="iphone13pro-selection"
          className="grid grid-cols-1 md:grid-cols-2 mb-10"
        >
          <div>
            <div className="sticky top-0">
              <div className="md:hidden text-center mt-14">
                <p className="text-red-600 mb-2">ใหม่</p>
                <h1 className="text-4xl font-semibold">ซื้อ iPad mini</h1>
              </div>
              <img
                src={`/assets/products/ipadmini/${productImage}`}
                alt="iPad mini"
                className="block mx-auto md:mt-14 mb-5"
              />
              <div className="mt-20 grid grid-cols-3 gap-3 mb-5">
                <div className="flex flex-col items-center">
                  <svg
                    viewBox="0 0 35 35"
                    role="img"
                    aria-hidden="true"
                    width="35px"
                    height="35px"
                  >
                    <path fill="none" d="M0 0h35v35H0z"></path>
                    <path d="M27.687 10.547l-9-4.852a2.5 2.5 0 00-2.373 0l-9 4.852A2.5 2.5 0 006 12.748v9.471a2.494 2.494 0 001.313 2.2l9 4.852a2.5 2.5 0 002.373 0l9-4.852a2.5 2.5 0 001.314-2.2v-9.471a2.5 2.5 0 00-1.313-2.201zm-10.9-3.971a1.5 1.5 0 011.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-4.538 2.446l9.651 5.566-4.4 2.5-9.823-5.58c.038-.026.07-.059.111-.081zM7.788 23.539A1.5 1.5 0 017 22.219v-9.471a1.494 1.494 0 01.069-.436L17 17.957v10.516a1.494 1.494 0 01-.212-.082zM28 22.219a1.5 1.5 0 01-.788 1.32l-9 4.851a1.481 1.481 0 01-.212.082V17.957l9.931-5.646a1.5 1.5 0 01.069.436z"></path>
                  </svg>
                  <p className="mt-1 text-xs font-bold">จัดส่งฟรี</p>
                </div>
                <div className="flex flex-col items-center">
                  <svg
                    viewBox="0 0 35 35"
                    role="img"
                    aria-hidden="true"
                    width="35px"
                    height="35px"
                  >
                    <path fill="none" d="M0 0h35v35H0z"></path>
                    <path d="M17.5 6.1A11.4 11.4 0 116.1 17.5 11.413 11.413 0 0117.5 6.1m0-1.1A12.5 12.5 0 1030 17.5 12.5 12.5 0 0017.5 5z"></path>
                    <path d="M23 20.5H12a.5.5 0 010-1h11a.5.5 0 010 1zM25 15.5H10a.5.5 0 010-1h15a.5.5 0 010 1z"></path>
                  </svg>
                  <p className="mt-1 text-xs font-bold">บริการสลักข้อความฟรี</p>
                </div>
                <div className="flex flex-col items-center">
                  <svg
                    viewBox="0 0 35 35"
                    role="img"
                    aria-hidden="true"
                    width="35px"
                    height="35px"
                  >
                    <path fill="none" d="M0 0h35v35H0z"></path>
                    <path
                      d="M12.249 9.022l-4.461 2.4c-.041.022-.073.055-.111.081l9.823 5.588 4.4-2.5zM27.322 11.507c-.038-.025-.069-.058-.11-.081l-9-4.852a1.5 1.5 0 00-1.424 0l-3.5 1.889 9.628 5.55zM10.8 18.5a.5.5 0 01-.5.5H7v3.219a1.5 1.5 0 00.788 1.32l9 4.852a1.494 1.494 0 00.212.082V17.957l-9.931-5.645a1.494 1.494 0 00-.069.436V18h3.3a.5.5 0 01.5.5zM18 17.957v10.515a1.481 1.481 0 00.212-.082l9-4.851a1.5 1.5 0 00.788-1.32v-9.471a1.5 1.5 0 00-.069-.436z"
                      fill="none"
                    ></path>
                    <path d="M27.687 10.547l-9-4.852a2.5 2.5 0 00-2.373 0l-9 4.852A2.5 2.5 0 006 12.748V17h1v-4.252a1.494 1.494 0 01.069-.436L17 17.957v10.516a1.494 1.494 0 01-.212-.082l-9-4.852A1.5 1.5 0 017 22.219V20H6v2.219a2.494 2.494 0 001.313 2.2l9 4.852a2.5 2.5 0 002.373 0l9-4.852a2.5 2.5 0 001.314-2.2v-9.471a2.5 2.5 0 00-1.313-2.201zm-10.9-3.971a1.5 1.5 0 011.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-9.11 4.932c.038-.026.07-.059.111-.081l4.461-2.4 9.651 5.561-4.4 2.5zM28 22.219a1.5 1.5 0 01-.788 1.32l-9 4.851a1.481 1.481 0 01-.212.082V17.957l9.931-5.646a1.5 1.5 0 01.069.436z"></path>
                    <path d="M2.507 18l1.646-1.646a.5.5 0 00-.707-.707l-2.5 2.5a.5.5 0 000 .707l2.5 2.5a.5.5 0 10.707-.707L2.507 19H6v-1zM10.3 19a.5.5 0 000-1H7v1zM6 18h1v1H6z"></path>
                  </svg>
                  <p className="mt-1 text-xs font-bold">ส่งคืนสะดวกและฟรี</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:pl-20">
            <div className="mt-14">
              <div className="hidden md:block">
                <p className="text-red-600 text-xl mb-2">ใหม่</p>
                <h1 className="text-4xl font-semibold">ซื้อ iPad mini</h1>
              </div>
              <div className="divide-y divide-gray-300">
                <VariantColorSelection
                  variantColor={variantColor}
                  onChange={handleChangeVariantColor}
                />
                <VariantStorageSelection
                  allowSelect={!!variantColor}
                  variantStorage={variantStorage}
                  onChange={handleChangeVariantStorage}
                />
                <VariantTypeSelection
                  allowSelect={!!variantStorage}
                  variantType={variantType}
                  variantStorage={variantStorage}
                  onChange={handleChangeVariantType}
                />
                <VariantEngravingSelection
                  allowSelect={!!variantType}
                  variantEngraving={variantEngraving}
                  onChange={handleChangeVariantEngraving}
                />
              </div>
            </div>
            <div id="checkout" className="p-5 pt-16 divide-y">
              <div className="mb-10">
                <p className="text-3xl font-medium">{priceText}</p>
                <div className={`${!!variantType ? '' : 'hidden'}`}>
                  <p className="text-xs">
                    รวม VAT โดยประมาณ: ฿
                    {Number((price / 1.07) * 0.07).toLocaleString('en', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                    *
                  </p>
                  <p className="text-sm text-blue-500">
                    {Number(price / 10).toLocaleString('en', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                    /เดือน ดอกเบี้ย 0% เป็นเวลา 10 เดือน
                  </p>
                </div>
              </div>
              <div className="relative pt-5 mb-5">
                <div
                  className={`absolute bg-white bg-opacity-50 h-full w-full ${
                    !!variantEngraving ? 'hidden' : ''
                  }`}
                ></div>
                <div id="variantAppleCare">
                  <h4 className="text-lg font-bold">
                    ปกป้อง iPad mini เครื่องใหม่ของคุณ
                  </h4>
                  <div className="mt-3 flex justify-between gap-2 mb-5">
                    <div className="flex">
                      <div className="pt-1 mr-2">
                        <svg width="18px" height="18px" viewBox="0 0 256 315">
                          <g>
                            <path
                              d="M213.803394,167.030943 C214.2452,214.609646 255.542482,230.442639 256,230.644727 C255.650812,231.761357 249.401383,253.208293 234.24263,275.361446 C221.138555,294.513969 207.538253,313.596333 186.113759,313.991545 C165.062051,314.379442 158.292752,301.507828 134.22469,301.507828 C110.163898,301.507828 102.642899,313.596301 82.7151126,314.379442 C62.0350407,315.16201 46.2873831,293.668525 33.0744079,274.586162 C6.07529317,235.552544 -14.5576169,164.286328 13.147166,116.18047 C26.9103111,92.2909053 51.5060917,77.1630356 78.2026125,76.7751096 C98.5099145,76.3877456 117.677594,90.4371851 130.091705,90.4371851 C142.497945,90.4371851 165.790755,73.5415029 190.277627,76.0228474 C200.528668,76.4495055 229.303509,80.1636878 247.780625,107.209389 C246.291825,108.132333 213.44635,127.253405 213.803394,167.030988 M174.239142,50.1987033 C185.218331,36.9088319 192.607958,18.4081019 190.591988,0 C174.766312,0.636050225 155.629514,10.5457909 144.278109,23.8283506 C134.10507,35.5906758 125.195775,54.4170275 127.599657,72.4607932 C145.239231,73.8255433 163.259413,63.4970262 174.239142,50.1987249"
                              fill="#ec0002"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium">AppleCare+</p>
                        <p className="text-sm">฿2,590.00</p>
                        <p className="text-sm">
                          ปกป้อง iPad, Apple Pencil และคีย์บอร์ดของ Apple
                          จากอุบัติเหตุการตกกระแทกและทำน้ำหกใส่ สูงสุด 2 ปี ด้วย
                          AppleCare+
                        </p>
                      </div>
                    </div>
                    <div
                      className="pl-5 text-right"
                      style={{ minWidth: '100px' }}
                    >
                      <button
                        className="text-sm text-blue-600 hover:underline"
                        onClick={handleChangeVariantAppleCare}
                      >
                        {variantAppleCare ? 'ลบออก' : 'เพิ่ม'}
                      </button>
                    </div>
                  </div>
                </div>
                <div className={`flex ${!!variantEngraving ? 'hidden' : ''}`}>
                  <AppleButton className="w-full text-xl">ต่อไป</AppleButton>
                  <svg
                    viewBox="0 0 35 35"
                    role="img"
                    aria-hidden="true"
                    width="35px"
                    height="35px"
                    className="ml-5"
                  >
                    <path fill="none" d="M0 1.213h35v35H0z"></path>
                    <path
                      fill="#0071e3"
                      d="M17.5 29.263a1.194 1.194 0 01-.85-.352L6.967 19.2a6.531 6.531 0 01.46-9.617 6.708 6.708 0 018.943.647l1.13 1.133 1.13-1.133a6.706 6.706 0 018.943-.647 6.531 6.531 0 01.46 9.617l-9.683 9.711a1.192 1.192 0 01-.85.352zm-6.06-20a5.154 5.154 0 00-3.31 1.167 5.352 5.352 0 00-1.948 3.913 5.424 5.424 0 001.564 4.081l9.684 9.711.53.388-.39-.388 9.684-9.711a5.424 5.424 0 001.564-4.081 5.352 5.352 0 00-1.948-3.913 5.6 5.6 0 00-7.461.577l-1.7 1.7a.3.3 0 01-.425 0l-1.7-1.7a5.89 5.89 0 00-4.144-1.741z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className={`pt-5 ${!!variantEngraving ? '' : 'hidden'}`}>
                <div className="mb-4 flex gap-2">
                  <div>
                    <svg
                      viewBox="0 0 25 25"
                      role="img"
                      aria-hidden="true"
                      width="25px"
                      height="25px"
                    >
                      <path fill="none" d="M0 0h25v25H0z"></path>
                      <path d="M19.69 7.154l-6-3.245a2.5 2.5 0 00-2.38 0l-6 3.245A2.5 2.5 0 004 9.354v6.269a2.5 2.5 0 001.311 2.2l6 3.245a2.5 2.5 0 002.379 0l6-3.245a2.5 2.5 0 001.31-2.2V9.354a2.5 2.5 0 00-1.31-2.2zm-7.9-2.365a1.492 1.492 0 011.427 0l6 3.244a1.454 1.454 0 01.151.11l-2.931 1.665-6.743-3.886zM8.661 6.48l6.768 3.9-2.929 1.666-6.864-3.9a1.456 1.456 0 01.151-.11zM5.787 16.941A1.5 1.5 0 015 15.622V9.354a1.5 1.5 0 01.053-.39L12 12.912v7.358a1.463 1.463 0 01-.213-.083zM20 15.622a1.5 1.5 0 01-.786 1.319l-6 3.245a1.5 1.5 0 01-.214.084v-7.358l6.947-3.949a1.508 1.508 0 01.053.391z"></path>
                    </svg>
                  </div>
                  <p className="text-sm leading-none">
                    <span className="font-bold">การจัดส่ง:</span>
                    <br />
                    4-5 สัปดาห์
                    <br />
                    บริการจัดส่งฟรี
                    <br />
                    <span className="text-blue-500">ดูวันส่งมอบสินค้า</span>
                  </p>
                </div>
                <div className="mb-8 flex gap-2">
                  <div>
                    <svg
                      viewBox="0 0 25 25"
                      role="img"
                      aria-hidden="true"
                      width="25px"
                      height="25px"
                    >
                      <path fill="none" d="M0 0h25v25H0z"></path>
                      <path d="M18.5 5h-1.775a4.231 4.231 0 00-8.45 0H6.5A2.5 2.5 0 004 7.5v11A2.5 2.5 0 006.5 21h12a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0018.5 5zm-6-3a3.245 3.245 0 013.225 3h-6.45A3.245 3.245 0 0112.5 2zM20 18.5a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 015 18.5v-11A1.5 1.5 0 016.5 6h12A1.5 1.5 0 0120 7.5z"></path>
                      <path d="M14.4 12.448a1.592 1.592 0 01.738-1.328 1.607 1.607 0 00-1.37-.687c-.52 0-.941.317-1.22.317s-.663-.3-1.129-.3a1.861 1.861 0 00-1.739 2.068 4.32 4.32 0 00.723 2.3c.346.491.648.883 1.084.883s.617-.287 1.144-.287c.55 0 .663.279 1.137.279s.791-.43 1.084-.853a3.24 3.24 0 00.474-.989 1.516 1.516 0 01-.926-1.403zM12.583 10.357a1.346 1.346 0 00.941-.5 1.594 1.594 0 00.361-.974.731.731 0 00-.008-.136 1.5 1.5 0 00-1.016.528 1.547 1.547 0 00-.384.943c0 .053.008.106.008.128.03.004.06.011.098.011z"></path>
                    </svg>
                  </div>
                  <p className="text-sm leading-none">
                    <span className="font-bold">การรับสินค้า:</span>
                    <br />
                    <span className="text-blue-500">
                      ตรวจสอบความพร้อมในการจำหน่าย
                    </span>
                  </p>
                </div>
                <div className="flex">
                  <AppleButton
                    onClick={addProductToBag}
                    className="w-full text-xl"
                  >
                    ใส่ลงในถุง
                  </AppleButton>
                  <svg
                    viewBox="0 0 35 35"
                    role="img"
                    aria-hidden="true"
                    width="35px"
                    height="35px"
                    className="ml-5"
                  >
                    <path fill="none" d="M0 1.213h35v35H0z"></path>
                    <path
                      fill="#0071e3"
                      d="M17.5 29.263a1.194 1.194 0 01-.85-.352L6.967 19.2a6.531 6.531 0 01.46-9.617 6.708 6.708 0 018.943.647l1.13 1.133 1.13-1.133a6.706 6.706 0 018.943-.647 6.531 6.531 0 01.46 9.617l-9.683 9.711a1.192 1.192 0 01-.85.352zm-6.06-20a5.154 5.154 0 00-3.31 1.167 5.352 5.352 0 00-1.948 3.913 5.424 5.424 0 001.564 4.081l9.684 9.711.53.388-.39-.388 9.684-9.711a5.424 5.424 0 001.564-4.081 5.352 5.352 0 00-1.948-3.913 5.6 5.6 0 00-7.461.577l-1.7 1.7a.3.3 0 01-.425 0l-1.7-1.7a5.89 5.89 0 00-4.144-1.741z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WhatsInTheBox />
      </div>
      <QuestionBox />
      <Footer />
    </>
  );
};

export default IpadMini;

const VariantColorSelection = props => {
  const [show, setShow] = useState(true);
  const toggleShow = () => {
    setShow(!show);
  };
  const { variantColor, onChange } = props;

  const handleChangeVariantColor = event => {
    onChange(event.target.value);
    toggleShow();
  };

  if (!show) {
    return (
      <>
        <div className="mt-5"></div>
        <button onClick={toggleShow} className="block w-full">
        <div className="py-5 flex justify-between items-center hover:text-blue-600">
          <h4 className="text-2xl font-medium">{colorNameTH[variantColor]}</h4>
          <span className="text-sm text-blue-600 hover:underline">เปลี่ยน</span>
        </div>
      </button>
      </>
    );
  } else {
    return (
      <VariantSelection id="variantColor" allowSelect={true}>
        <div className="mb-2">
          <h4 className="text-xl font-bold">สี</h4>
        </div>
        <div id="variantColorOptions" className="grid grid-cols-2 gap-3">
          <VariantOption
            variant="color"
            value="spacegray"
            selected={variantColor === 'spacegray'}
            onChange={handleChangeVariantColor}
          >
            <img
              src="/assets/productVariantColors/ipadmini/spacegray.png"
              alt="variant-color-spacegray"
              style={{ maxWidth: '32px' }}
              className="block mx-auto"
            />
            <p className="mt-2 text-center text-sm">เทาสเปซเกรย์</p>
          </VariantOption>
          <VariantOption
            variant="color"
            value="pink"
            selected={variantColor === 'pink'}
            onChange={handleChangeVariantColor}
          >
            <img
              src="/assets/productVariantColors/ipadmini/pink.png"
              alt="variant-color-pink"
              style={{ maxWidth: '32px' }}
              className="block mx-auto"
            />
            <p className="mt-2 text-center text-sm">ชมพู</p>
          </VariantOption>
          <VariantOption
            variant="color"
            value="purple"
            selected={variantColor === 'purple'}
            onChange={handleChangeVariantColor}
          >
            <img
              src="/assets/productVariantColors/ipadmini/purple.png"
              alt="variant-color-purple"
              style={{ maxWidth: '32px' }}
              className="block mx-auto"
            />
            <p className="mt-2 text-center text-sm">ม่วง</p>
          </VariantOption>
          <VariantOption
            variant="color"
            value="starlight"
            selected={variantColor === 'starlight'}
            onChange={handleChangeVariantColor}
          >
            <img
              src="/assets/productVariantColors/ipadmini/starlight.png"
              alt="variant-color-starlight"
              style={{ maxWidth: '32px' }}
              className="block mx-auto"
            />
            <p className="mt-2 text-center text-sm">สตาร์ไลท์</p>
          </VariantOption>
        </div>
      </VariantSelection>
    );
  }
};

const VariantStorageSelection = props => {
  const [show, setShow] = useState(true);
  const toggleShow = () => {
    setShow(!show);
  };
  const { variantStorage, onChange, allowSelect } = props;
  const handleChangeVariantStorage = event => {
    onChange(event.target.value);
    toggleShow();
  };
  if (!show) {
    return (
      <button onClick={toggleShow} className="block w-full">
        <div className="py-5 flex justify-between items-center hover:text-blue-600">
          <h4 className="text-2xl font-medium">{variantStorage}¹</h4>
          <span className="text-sm text-blue-600 hover:underline">เปลี่ยน</span>
        </div>
      </button>
    );
  } else {
    return (
      <VariantSelection id="variantStorage" allowSelect={allowSelect}>
        <div className="mb-2">
          <h4 className="text-xl font-semibold">พื้นที่จัดเก็บข้อมูล</h4>
          <span className="text-blue-600">ความจุเท่าไหร่ที่เหมาะกับคุณ</span>
        </div>
        <div id="variantStorageOptions" className="grid grid-cols-2 gap-3">
          <VariantOption
            variant="storage"
            value="64GB"
            selected={variantStorage === '64GB'}
            onChange={handleChangeVariantStorage}
          >
            <div className="flex flex-col text-center py-1">
              <p>
                <span className="text-3xl">64</span>
                <span className="font-medium text-lg">GB¹</span>
              </p>
              <span className="text-xs">
                เริ่มต้นที่ ฿
                {Number(ipadminiPrice['wifi']['64GB']).toLocaleString('en')}
              </span>
            </div>
          </VariantOption>
          <VariantOption
            variant="storage"
            value="256GB"
            selected={variantStorage === '256GB'}
            onChange={handleChangeVariantStorage}
          >
            <div className="flex flex-col text-center py-1">
              <p>
                <span className="text-3xl">256</span>
                <span className="font-medium text-lg">GB¹</span>
              </p>
              <span className="text-xs">
                เริ่มต้นที่ ฿
                {Number(ipadminiPrice['wifi']['256GB']).toLocaleString('en')}
              </span>
            </div>
          </VariantOption>
        </div>
      </VariantSelection>
    );
  }
};

const VariantTypeSelection = props => {
  const [show, setShow] = useState(true);
  const toggleShow = () => {
    setShow(!show);
  };
  const { variantStorage, variantType, onChange, allowSelect } = props;

  const handleChangeVariantType = event => {
    onChange(event.target.value);
    toggleShow();
  };
  if (!show) {
    return (
      <button onClick={toggleShow} className="block w-full">
        <div className="py-5 flex justify-between items-center hover:text-blue-600">
          <h4 className="text-2xl font-medium">
            {variantType === 'wifi' ? 'Wi-Fi' : 'Wi-Fi + Cellular'}
          </h4>
          <span className="text-sm text-blue-600 hover:underline">เปลี่ยน</span>
        </div>
      </button>
    );
  } else {
    return (
      <VariantSelection id="variantType" allowSelect={allowSelect}>
        <div className="mb-2">
          <h4 className="text-xl font-bold">การเชื่อมต่อ</h4>
          <span className="text-blue-600">รุ่นไหนเหมาะกับคุณ</span>
        </div>
        <div id="variantTypeOptions" className="grid grid-cols-2 gap-3">
          <VariantOption
            variant="type"
            value="wifi"
            selected={variantType === 'wifi'}
            onChange={handleChangeVariantType}
          >
            <div className="flex flex-col text-center py-1">
              <p>
                <span className="font-medium text-lg">Wi-Fi</span>
              </p>
              <span className="text-xs">
                {!!variantStorage
                  ? `฿${Number(
                      ipadminiPrice['wifi'][variantStorage]
                    ).toLocaleString('en', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}`
                  : `เริ่มต้นที่ ฿${Number(
                      ipadminiPrice['wifi']['64GB']
                    ).toLocaleString('en')}`}
              </span>
            </div>
          </VariantOption>
          <VariantOption
            variant="type"
            value="cellular"
            selected={variantType === 'cellular'}
            onChange={handleChangeVariantType}
          >
            <div className="flex flex-col text-center py-1">
              <p>
                <span className="font-medium text-lg">Wi-Fi + Cellular</span>
              </p>
              <span className="text-xs">
                {!!variantStorage
                  ? `฿${Number(
                      ipadminiPrice['cellular'][variantStorage]
                    ).toLocaleString('en', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}`
                  : `เริ่มต้นที่ ฿${Number(
                      ipadminiPrice['cellular']['64GB']
                    ).toLocaleString('en')}`}
              </span>
            </div>
          </VariantOption>
        </div>
      </VariantSelection>
    );
  }
};

const VariantEngravingSelection = props => {
  const [show, setShow] = useState(true);
  const toggleShow = () => {
    setShow(!show);
  };
  const { variantEngraving, onChange, allowSelect } = props;

  const handleChangeVariantEngraving = event => {
    onChange(event.target.value);
    toggleShow();
  };
  if (!show) {
    return (
      <button onClick={toggleShow} className="block w-full">
        <div className="py-5 flex justify-between items-center hover:text-blue-600">
          <h4 className="text-2xl font-medium">
            {variantEngraving === '1' ? 'เพิ่มการสลัก' : 'ไม่สลัก'}
          </h4>
          <span className="text-sm text-blue-600 hover:underline">เปลี่ยน</span>
        </div>
      </button>
    );
  } else {
    return (
      <VariantSelection id="variantEngraving" allowSelect={allowSelect}>
        <div className="mb-5">
          <h4 className="text-lg font-bold">ใส่ความเป็นคุณบนอุปกรณ์</h4>
        </div>
        <div id="varaintEngravingOptions" className="space-y-3">
          <VariantOption
            variant="engraving"
            value="1"
            selected={variantEngraving === '1'}
            onChange={handleChangeVariantEngraving}
          >
            <div className="flex justify-between">
              <p className="text-lg font-semibold">เพิ่มการสลัก</p>
              <p className="text-lg">ฟรี</p>
            </div>
          </VariantOption>
          <VariantOption
            variant="engraving"
            value="0"
            selected={variantEngraving === '0'}
            onChange={handleChangeVariantEngraving}
          >
            <p className="text-lg font-semibold">ไม่สลัก</p>
          </VariantOption>
        </div>
      </VariantSelection>
    );
  }
};
