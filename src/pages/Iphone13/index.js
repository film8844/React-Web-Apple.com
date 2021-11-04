import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useStore } from '../../store/store';

import Footer from '../../components/Footer';
import GlobalNavBar from '../../components/GlobalNavBar';
import ProductNavBar from '../../components/ProductNavBar';
import VariantOption from '../../components/VariantOption';
import VariantSelection from '../../components/VariantSelection';

import WhatsInTheBox from './WhatsInTheBox';
import AppleButton from '../../components/AppleButton';
import Iphone13FAQ from './FAQ';

const iphone13Price = {
  mini: {
    '128GB': 25900,
    '256GB': 29900,
    '512GB': 37900,
  },
  regular: {
    '128GB': 29900,
    '256GB': 33900,
    '512GB': 41900,
  },
};

const colorNameTH = {
  pink: 'สีชมพู',
  blue: 'สีน้ำเงิน',
  midnight: 'สีมิดไนท์',
  startlight: 'สีสตาร์ไลท์',
  red: 'รุ่น (PRODUCT)RED',
};

const Iphone13 = () => {
  const history = useHistory();
  const store = useStore();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [price, setPrice] = useState(iphone13Price['mini']['128GB']);
  const [priceText, setPriceText] = useState('เริ่มต้นที่ ฿25,900');
  const [productImage, setProductImage] = useState('iphone13-hero.jpg');

  const [variantType, setVariantType] = useState('');
  const handleChangeVariantType = async (event) => {
    setVariantType(event.target.value);
    switch (event.target.value) {
      case 'mini':
        if (!!variantColor) {
          setProductImage(`iphone13-mini-${variantColor}.png`);
        } else {
          setProductImage('iphone13-mini-family.jpg');
        }
        break;
      case 'regular':
        if (!!variantColor) {
          setProductImage(`iphone13-regular-${variantColor}.png`);
        } else {
          setProductImage('iphone13-regular-family.jpg');
        }
        break;
    }

    const element = document.getElementById('variantColor');
    const yOffset = -50;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const [variantColor, setVariantColor] = useState('');
  const handleChangeVariantColor = (event) => {
    setVariantColor(event.target.value);
    setProductImage(`iphone13-${variantType}-${event.target.value}.png`);

    const element = document.getElementById('variantStorage');
    const yOffset = -50;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const [variantStorage, setVariantStorage] = useState('');
  const handleChangeVariantStorage = (event) => {
    setVariantStorage(event.target.value);

    setTimeout(() => {
      const element = document.getElementById('variantAppleCare');
      const yOffset = -50;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }, 100);
  };

  const [variantAppleCare, setVariantAppleCare] = useState(null);
  const handleChangeVariantAppleCare = (event) => {
    setVariantAppleCare(event.target.value);

    const element = document.getElementById('checkout');
    const yOffset = -50;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  useEffect(() => {
    let calPrice;
    if (!variantStorage) {
      calPrice = iphone13Price[!!variantType ? variantType : 'mini']['128GB'];
      setPriceText(
        `เริ่มต้นที่ ฿${Number(
          iphone13Price[!!variantType ? variantType : 'mini']['128GB']
        ).toLocaleString('en')}`
      );
    } else {
      calPrice = iphone13Price[variantType][variantStorage];
      if (variantAppleCare === '1') {
        calPrice += 5990;
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
      product: 'iphone13',
      name: `iPhone 13 ${
        variantType === 'mini' ? 'mini' : ''
      } ความจุ ${variantStorage} ${colorNameTH[variantColor]}`,
      shortName: `iPhone 13 Pro ${variantType === 'mini' ? 'mini' : ''}`,
      color: variantColor,
      type: variantType,
      storage: variantStorage,
      appleCare: variantAppleCare === '1',
      appleCareCost: 5990,
      price: price,
      image: `/assets/products/iphone13/${productImage}`
    };
    setBag([...bag, product]);
    history.push('/bag');
  };

  return (
    <>
      <GlobalNavBar disableSticky={true} />
      <ProductNavBar productName="iPhone 13 Pro" priceText={priceText} />
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
                <h1 className="text-4xl font-semibold">ซื้อ iPhone 13</h1>
              </div>
              <img
                src={`/assets/products/iphone13/${productImage}`}
                alt="iPhone 13"
                className="block mx-auto md:mt-14 mb-5"
              />
              <div className="divide-y divide-gray-300">
                <div className="grid grid-cols-2 gap-3 mb-5">
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
                    <p className="text-sm font-bold">จัดส่งฟรี</p>
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
                    <p className="text-sm font-bold">ส่งคืนสะดวกและฟรี</p>
                  </div>
                </div>
                <div className="pt-5 flex justify-center">
                  <svg
                    viewBox="0 0 35 35"
                    role="img"
                    aria-hidden="true"
                    width="35px"
                    height="35px"
                    className="mr-3"
                  >
                    {' '}
                    <path fill="none" d="M0 .213h35v35H0z"></path>{' '}
                    <path d="M14.4 21.048a13.284 13.284 0 01-1.344.076q-.411 0-.829-.025l-.334-.02-.279.185a15.461 15.461 0 01-4.388 2.109 16.182 16.182 0 001.365-2.054l.484-.923-.941-.446a7.127 7.127 0 01-4.384-6.276c0-4.114 4.274-7.461 9.529-7.461s9.529 3.347 9.529 7.461c0 .059-.009.116-.011.174.33-.029.664-.046 1-.046 0-.043.008-.085.008-.128 0-4.677-4.67-8.461-10.529-8.461S2.75 9 2.75 13.674a8.1 8.1 0 004.95 7.181 18.048 18.048 0 01-1.573 2.305c-.481.6-.236 1.28.613 1.28 1.17 0 3.557-1.1 5.425-2.343q.448.027.888.027c.455 0 .9-.028 1.34-.069-.011-.157-.029-.312-.029-.472 0-.183.018-.357.036-.535z"></path>{' '}
                    <path d="M32.25 21.583c0-3.749-3.745-6.782-8.443-6.782h-.1c-.351 0-.694.027-1.032.063-3.876.413-6.886 2.906-7.269 6.036a5.584 5.584 0 00-.042.678c0 .117.015.23.021.345.222 3.737 3.994 6.428 8.6 6.428.235 0 .473-.007.712-.021a10.723 10.723 0 004.35 1.878c.681 0 .878-.543.492-1.026a14.459 14.459 0 01-1.263-1.848 6.5 6.5 0 003.974-5.751zm-4.4 4.852l-.942.446.484.923a10.673 10.673 0 00.759 1.2 14.28 14.28 0 01-2.9-1.5l-.279-.185-.334.02c-.219.013-.437.019-.653.019-4.21 0-7.515-2.462-7.614-5.629 0-.048-.009-.1-.009-.144a4.521 4.521 0 01.1-.922c.5-2.386 2.87-4.288 5.908-4.75a9.506 9.506 0 011.092-.1c.113 0 .225-.013.339-.013 4.1 0 7.443 2.594 7.443 5.782a5.517 5.517 0 01-3.394 4.853z"></path>{' '}
                  </svg>
                  <p className="text-sm font-bold">
                    หากมีคำถามเกี่ยวกับการสั่งซื้อ iPhone
                    <br />
                    <span className="text-blue-500">
                      แชทกับ Specialist เรื่อง iPhone ได้เลย
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:pl-20">
            <div className="mt-14">
              <div className="hidden md:block">
                <p className="text-red-600 text-xl mb-2">ใหม่</p>
                <h1 className="text-4xl font-semibold">ซื้อ iPhone 13</h1>
              </div>
              <div className="divide-y divide-gray-300">
                <VariantSelection id="variantType" allowSelect={true}>
                  <div className="mb-2">
                    <h4 className="text-xl font-bold">เลือกรุ่น</h4>
                    <span className="text-blue-600">รุ่นไหนเหมาะกับคุณ</span>
                  </div>
                  <div id="varaintTypeOptions" className="space-y-3">
                    <VariantOption
                      variant="type"
                      value="mini"
                      selected={variantType === 'mini'}
                      onChange={handleChangeVariantType}
                    >
                      <div className="flex flex-row justify-between items-center">
                        <div>
                          <p className="text-lg font-medium">iPhone 13 mini</p>
                          <p className="text-sm">จอภาพขนาด 5.4 นิ้ว¹</p>
                        </div>
                        <span className="text-right">เริ่มต้นที่ ฿25,900</span>
                      </div>
                    </VariantOption>
                    <VariantOption
                      variant="type"
                      value="regular"
                      selected={variantType === 'regular'}
                      onChange={handleChangeVariantType}
                    >
                      <div className="flex flex-row justify-between items-center">
                        <div>
                          <p className="text-lg font-medium">iPhone 13</p>
                          <p className="text-sm">จอภาพขนาด 6.1 นิ้ว¹</p>
                        </div>
                        <span className="text-right">เริ่มต้นที่ ฿29,900</span>
                      </div>
                    </VariantOption>
                  </div>
                </VariantSelection>

                <VariantSelection id="variantColor" allowSelect={!!variantType}>
                  <div className="mb-2">
                    <h4 className="text-xl font-bold">เลือกสี</h4>
                  </div>
                  <div
                    id="variantColorOptions"
                    className="grid grid-cols-2 gap-3"
                  >
                    <VariantOption
                      variant="color"
                      value="pink"
                      selected={variantColor === 'pink'}
                      onChange={handleChangeVariantColor}
                    >
                      <img
                        src="/assets/productVariantColors/iphone13/pink.jpg"
                        alt="variant-color-pink"
                        style={{ maxWidth: '32px' }}
                        className="block mx-auto"
                      />
                      <p className="mt-2 text-center text-sm">ชมพู</p>
                    </VariantOption>
                    <VariantOption
                      variant="color"
                      value="blue"
                      selected={variantColor === 'blue'}
                      onChange={handleChangeVariantColor}
                    >
                      <img
                        src="/assets/productVariantColors/iphone13/blue.jpg"
                        alt="variant-color-blue"
                        style={{ maxWidth: '32px' }}
                        className="block mx-auto"
                      />
                      <p className="mt-2 text-center text-sm">น้ำเงิน</p>
                    </VariantOption>
                    <VariantOption
                      variant="color"
                      value="midnight"
                      selected={variantColor === 'midnight'}
                      onChange={handleChangeVariantColor}
                    >
                      <img
                        src="/assets/productVariantColors/iphone13/midnight.jpg"
                        alt="variant-color-midnight"
                        style={{ maxWidth: '32px' }}
                        className="block mx-auto"
                      />
                      <p className="mt-2 text-center text-sm">มิดไนท์</p>
                    </VariantOption>
                    <VariantOption
                      variant="color"
                      value="starlight"
                      selected={variantColor === 'starlight'}
                      onChange={handleChangeVariantColor}
                    >
                      <img
                        src="/assets/productVariantColors/iphone13/starlight.jpg"
                        alt="variant-color-starlight"
                        style={{ maxWidth: '32px' }}
                        className="block mx-auto"
                      />
                      <p className="mt-2 text-center text-sm">สตาร์ไลท์</p>
                    </VariantOption>
                    <VariantOption
                      variant="color"
                      value="red"
                      selected={variantColor === 'red'}
                      onChange={handleChangeVariantColor}
                    >
                      <img
                        src="/assets/productVariantColors/iphone13/red.jpg"
                        alt="variant-color-red"
                        style={{ maxWidth: '32px' }}
                        className="block mx-auto"
                      />
                      <p className="mt-2 text-center text-sm">(PRODUCT)RED</p>
                    </VariantOption>
                  </div>
                </VariantSelection>

                <VariantSelection
                  id="variantStorage"
                  allowSelect={!!variantColor}
                >
                  <div className="mb-2">
                    <h4 className="text-xl font-bold">เลือกความจุ</h4>
                    <span className="text-blue-600">
                      ความจุเท่าไหร่ที่เหมาะกับคุณ
                    </span>
                  </div>
                  <div
                    id="variantStoragerOptions"
                    className="grid grid-cols-2 gap-3"
                  >
                    <VariantOption
                      variant="storage"
                      value="128GB"
                      selected={variantStorage === '128GB'}
                      onChange={handleChangeVariantStorage}
                    >
                      <div className="flex flex-col text-center py-1">
                        <p>
                          <span className="text-3xl">128</span>
                          <span className="font-medium text-lg">GB²</span>
                        </p>
                        <span className="text-sm">
                          ฿
                          {Number(
                            iphone13Price[!!variantType ? variantType : 'mini'][
                              '128GB'
                            ]
                          ).toLocaleString('en', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
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
                          <span className="font-medium text-lg">GB²</span>
                        </p>
                        <span className="text-sm">
                          ฿
                          {Number(
                            iphone13Price[!!variantType ? variantType : 'mini'][
                              '256GB'
                            ]
                          ).toLocaleString('en', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                    </VariantOption>
                    <VariantOption
                      variant="storage"
                      value="512GB"
                      selected={variantStorage === '512GB'}
                      onChange={handleChangeVariantStorage}
                    >
                      <div className="flex flex-col text-center py-1">
                        <p>
                          <span className="text-3xl">512</span>
                          <span className="font-medium text-lg">GB²</span>
                        </p>
                        <span className="text-sm">
                          ฿
                          {Number(
                            iphone13Price[!!variantType ? variantType : 'mini'][
                              '512GB'
                            ]
                          ).toLocaleString('en', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                    </VariantOption>
                  </div>
                </VariantSelection>

                <VariantSelection
                  id="variantAppleCare"
                  allowSelect={true}
                  hidden={!variantStorage}
                >
                  <div className="mb-5">
                    <h4 className="text-lg font-bold">
                      คุณต้องการเพิ่มความคุ้มครอง AppleCare+ หรือไม่
                    </h4>
                    <p className="text-sm text-gray-600">
                      ขยายความคุ้มครองด้านฮาร์ดแวร์และซอฟต์แวร์
                      พร้อมรับสิทธิพิเศษในการขอความช่วยเหลือจากผู้ที่รู้จัก
                      iPhone ของคุณดีที่สุด
                    </p>
                  </div>
                  <div id="varaintAppleCareOptions" className="space-y-3">
                    <VariantOption
                      variant="applecare"
                      value="0"
                      selected={variantAppleCare === '0'}
                      onChange={handleChangeVariantAppleCare}
                    >
                      <p className="text-lg font-semibold">
                        ไม่มีการคุ้มครอง AppleCare+
                      </p>
                    </VariantOption>
                    <VariantOption
                      variant="applecare"
                      value="1"
                      selected={variantAppleCare === '1'}
                      onChange={handleChangeVariantAppleCare}
                    >
                      <div className="divide-y divide-gray-300">
                        <div className="flex flex-row justify-between items-center mb-3">
                          <p className="text-lg font-medium">AppleCare+</p>
                          <span>฿5,990.00</span>
                        </div>
                        <div>
                          <ul className="pt-3 text-sm list-disc list-inside">
                            <li>
                              สิทธิพิเศษในการติดต่อกับผู้เชี่ยวชาญของ Apple
                            </li>
                            <li>
                              บริการซ่อมที่ผ่านการรับรองจาก Apple
                              ซึ่งใช้อะไหล่แท้ของ Apple
                            </li>
                            <li>ความคุ้มครองสำหรับ iPhone รวมถึงแบตเตอรี่</li>
                            <li>ความคุ้มครองด้านความเสียหายจากอุบัติเหตุ</li>
                          </ul>
                        </div>
                      </div>
                    </VariantOption>
                  </div>
                </VariantSelection>
              </div>
            </div>
            <div
              className={`p-5 mt-16 relative ${
                !!variantStorage ? 'hidden' : ''
              }`}
            >
              <div className="absolute bg-white bg-opacity-50 h-full w-full"></div>
              <div className="flex">
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
            <div
              id="checkout"
              className={`p-5 pt-16 divide-y divide-gray-300 ${
                !!variantStorage ? '' : 'hidden'
              }`}
            >
              <div className="mb-5">
                <p className="text-3xl font-medium">{priceText}</p>
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
              <div className="pt-5">
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
                    ขณะนี้ยังไม่มีจำหน่ายที่ Apple Iconsiam
                    <br />
                    <span className="text-blue-500">ดูร้านอื่น</span>
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
                <p
                  className="mt-14 text-center mx-auto"
                  style={{ maxWidth: '350px' }}
                >
                  รายละเอียดการจัดส่งสำหรับพื้นที่ของคุณจะปรากฏในขั้นตอนการชำระเงิน
                </p>
              </div>
            </div>
          </div>
        </div>
        <WhatsInTheBox />
      </div>
      <Iphone13FAQ/>
      <Footer />
    </>
  );
};

export default Iphone13;
