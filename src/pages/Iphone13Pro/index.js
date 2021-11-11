import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useStore } from '../../store/store';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Footer from '../../components/Footer';
import GlobalNavBar from '../../components/GlobalNavBar';
import ProductNavBar from '../../components/ProductNavBar';
import VariantOption from '../../components/VariantOption';
import VariantSelection from '../../components/VariantSelection';
import AppleButton from '../../components/AppleButton';
import Breadcrumb from '../../components/Breadcrumb';
import Footnote from '../../components/Footnote';

import Iphone13ProFeatures from './Features';
import Iphone13ProWITB from './WhatsInTheBox';
import Iphone13ProCompare from './Compare';
import Iphone13ProAR from './ViewAR';
import Iphone13ProFAQ from './FAQ';

const iphone13proPrice = {
  pro: {
    '128GB': 38900,
    '256GB': 42900,
    '512GB': 50900,
    '1TB': 58900,
  },
  promax: {
    '128GB': 42900,
    '256GB': 46900,
    '512GB': 54900,
    '1TB': 62900,
  },
};

const colorNameTH = {
  blue: 'เซียร์ร่าบลู',
  silver: 'เงิน',
  gold: 'ทอง',
  graphite: 'กราไฟต์',
};

const Iphone13Pro = () => {
  const history = useHistory();
  const store = useStore();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [price, setPrice] = useState(iphone13proPrice['pro']['128GB']);
  const [priceText, setPriceText] = useState('เริ่มต้นที่ ฿38,900');
  const [productImage, setProductImage] = useState('iphone13pro-hero.png');

  const [variantType, setVariantType] = useState('');
  const handleChangeVariantType = async (event) => {
    setVariantType(event.target.value);
    switch (event.target.value) {
      case 'pro':
        if (!!variantColor) {
          setProductImage(`iphone13pro-pro-${variantColor}.png`);
        } else {
          setProductImage('iphone13pro-pro-family.jfif');
        }
        break;
      case 'promax':
        if (!!variantColor) {
          setProductImage(`iphone13pro-promax-${variantColor}.png`);
        } else {
          setProductImage('iphone13pro-promax-family.jfif');
        }
        break;
      default:
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
    setProductImage(`iphone13pro-${variantType}-${event.target.value}.png`);

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
      calPrice = iphone13proPrice[!!variantType ? variantType : 'pro']['128GB'];
      setPriceText(
        `เริ่มต้นที่ ฿${Number(
          iphone13proPrice[!!variantType ? variantType : 'pro']['128GB']
        ).toLocaleString('en')}`
      );
    } else {
      calPrice = iphone13proPrice[variantType][variantStorage];
      if (variantAppleCare === '1') {
        calPrice += 8290;
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
      name: `iPhone 13 Pro ${
        variantType === 'promax' ? 'Max' : ''
      } ความจุ ${variantStorage} สี${colorNameTH[variantColor]}`,
      shortName: `iPhone 13 Pro ${variantType === 'promax' ? 'Max' : ''}`,
      color: variantColor,
      type: variantType,
      storage: variantStorage,
      appleCare: variantAppleCare === '1',
      appleCareCost: 8290,
      price: price,
      image: `/assets/products/iphone13pro/${productImage}`,
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
            <span className="text-apple-link-blue hover:underline">
              ดูเพิ่มเติม
              <KeyboardArrowRightIcon sx={{ fontSize: '14px' }} />
            </span>
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
                <h1 className="text-4xl font-semibold">ซื้อ iPhone 13 Pro</h1>
              </div>
              <img
                src={`/assets/products/iphone13pro/${productImage}`}
                alt="iPhone 13 Pro"
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
                    <path fill="none" d="M0 .213h35v35H0z"></path>
                    <path d="M14.4 21.048a13.284 13.284 0 01-1.344.076q-.411 0-.829-.025l-.334-.02-.279.185a15.461 15.461 0 01-4.388 2.109 16.182 16.182 0 001.365-2.054l.484-.923-.941-.446a7.127 7.127 0 01-4.384-6.276c0-4.114 4.274-7.461 9.529-7.461s9.529 3.347 9.529 7.461c0 .059-.009.116-.011.174.33-.029.664-.046 1-.046 0-.043.008-.085.008-.128 0-4.677-4.67-8.461-10.529-8.461S2.75 9 2.75 13.674a8.1 8.1 0 004.95 7.181 18.048 18.048 0 01-1.573 2.305c-.481.6-.236 1.28.613 1.28 1.17 0 3.557-1.1 5.425-2.343q.448.027.888.027c.455 0 .9-.028 1.34-.069-.011-.157-.029-.312-.029-.472 0-.183.018-.357.036-.535z"></path>
                    <path d="M32.25 21.583c0-3.749-3.745-6.782-8.443-6.782h-.1c-.351 0-.694.027-1.032.063-3.876.413-6.886 2.906-7.269 6.036a5.584 5.584 0 00-.042.678c0 .117.015.23.021.345.222 3.737 3.994 6.428 8.6 6.428.235 0 .473-.007.712-.021a10.723 10.723 0 004.35 1.878c.681 0 .878-.543.492-1.026a14.459 14.459 0 01-1.263-1.848 6.5 6.5 0 003.974-5.751zm-4.4 4.852l-.942.446.484.923a10.673 10.673 0 00.759 1.2 14.28 14.28 0 01-2.9-1.5l-.279-.185-.334.02c-.219.013-.437.019-.653.019-4.21 0-7.515-2.462-7.614-5.629 0-.048-.009-.1-.009-.144a4.521 4.521 0 01.1-.922c.5-2.386 2.87-4.288 5.908-4.75a9.506 9.506 0 011.092-.1c.113 0 .225-.013.339-.013 4.1 0 7.443 2.594 7.443 5.782a5.517 5.517 0 01-3.394 4.853z"></path>
                  </svg>
                  <p className="text-sm">
                    <span className="font-bold">
                      หากมีคำถามเกี่ยวกับการซื้อ iPhone
                    </span>
                    <br />
                    <span className="text-apple-link-blue hover:underline">
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
                <h1 className="text-4xl font-semibold">ซื้อ iPhone 13 Pro</h1>
              </div>
              <div className="divide-y divide-gray-300">
                <VariantSelection id="variantType" allowSelect={true}>
                  <div className="mb-2">
                    <h4 className="text-xl font-bold">เลือกรุ่น</h4>
                    <span className="text-apple-link-blue">
                      รุ่นไหนเหมาะกับคุณ
                    </span>
                  </div>
                  <div id="varaintTypeOptions" className="space-y-3">
                    <VariantOption
                      variant="type"
                      value="pro"
                      selected={variantType === 'pro'}
                      onChange={handleChangeVariantType}
                    >
                      <div className="flex flex-row justify-between items-center">
                        <div>
                          <p className="text-lg font-medium">iPhone 13 Pro</p>
                          <p className="text-sm">จอภาพขนาด 6.1 นิ้ว¹</p>
                        </div>
                        <span className="text-right">เริ่มต้นที่ ฿38,900</span>
                      </div>
                    </VariantOption>
                    <VariantOption
                      variant="type"
                      value="promax"
                      selected={variantType === 'promax'}
                      onChange={handleChangeVariantType}
                    >
                      <div className="flex flex-row justify-between items-center">
                        <div>
                          <p className="text-lg font-medium">
                            iPhone 13 Pro Max
                          </p>
                          <p className="text-sm">จอภาพขนาด 6.7 นิ้ว¹</p>
                        </div>
                        <span className="text-right">เริ่มต้นที่ ฿42,900</span>
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
                      value="blue"
                      selected={variantColor === 'blue'}
                      onChange={handleChangeVariantColor}
                    >
                      <img
                        src="/assets/productVariantColors/iphone13pro/blue.jpg"
                        alt="variant-color-blue"
                        style={{ maxWidth: '32px' }}
                        className="block mx-auto"
                      />
                      <p className="mt-2 text-center text-sm">เซียร์ร่าบลู</p>
                    </VariantOption>
                    <VariantOption
                      variant="color"
                      value="silver"
                      selected={variantColor === 'silver'}
                      onChange={handleChangeVariantColor}
                    >
                      <img
                        src="/assets/productVariantColors/iphone13pro/silver.jpg"
                        alt="variant-color-silver"
                        style={{ maxWidth: '32px' }}
                        className="block mx-auto"
                      />
                      <p className="mt-2 text-center text-sm">เงิน</p>
                    </VariantOption>
                    <VariantOption
                      variant="color"
                      value="gold"
                      selected={variantColor === 'gold'}
                      onChange={handleChangeVariantColor}
                    >
                      <img
                        src="/assets/productVariantColors/iphone13pro/gold.jpg"
                        alt="variant-color-gold"
                        style={{ maxWidth: '32px' }}
                        className="block mx-auto"
                      />
                      <p className="mt-2 text-center text-sm">ทอง</p>
                    </VariantOption>
                    <VariantOption
                      variant="color"
                      value="graphite"
                      selected={variantColor === 'graphite'}
                      onChange={handleChangeVariantColor}
                    >
                      <img
                        src="/assets/productVariantColors/iphone13pro/graphite.jpg"
                        alt="variant-color-graphite"
                        style={{ maxWidth: '32px' }}
                        className="block mx-auto"
                      />
                      <p className="mt-2 text-center text-sm">กราไฟต์</p>
                    </VariantOption>
                  </div>
                </VariantSelection>

                <VariantSelection
                  id="variantStorage"
                  allowSelect={!!variantColor}
                >
                  <div className="mb-2">
                    <h4 className="text-xl font-bold">เลือกความจุ</h4>
                    <span className="text-apple-link-blue">
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
                            iphone13proPrice[
                              !!variantType ? variantType : 'pro'
                            ]['128GB']
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
                            iphone13proPrice[
                              !!variantType ? variantType : 'pro'
                            ]['256GB']
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
                            iphone13proPrice[
                              !!variantType ? variantType : 'pro'
                            ]['512GB']
                          ).toLocaleString('en', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                    </VariantOption>
                    <VariantOption
                      variant="storage"
                      value="1TB"
                      selected={variantStorage === '1TB'}
                      onChange={handleChangeVariantStorage}
                    >
                      <div className="flex flex-col text-center py-1">
                        <p>
                          <span className="text-3xl">1</span>
                          <span className="font-medium text-lg">TB²</span>
                        </p>
                        <span className="text-sm">
                          ฿
                          {Number(
                            iphone13proPrice[
                              !!variantType ? variantType : 'pro'
                            ]['1TB']
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
                          <span>฿8,290.00</span>
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
                <p className="text-sm text-apple-link-blue">
                  ฿
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
                    <span className="text-apple-link-blue">
                      ดูวันส่งมอบสินค้า
                    </span>
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
                    <span className="text-apple-link-blue">ดูร้านอื่น</span>
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
        <Iphone13ProFeatures />
        <Iphone13ProWITB />
        <Iphone13ProCompare />
      </div>
      <Iphone13ProAR />
      <Iphone13ProFAQ />
      <Footnote>
        <p className="text-xs text-gray-500">
          ราคาสินค้าดังกล่าวได้รวมภาษีมูลค่าเพิ่มแล้ว
          และไม่มีค่าธรรมเนียมการจัดส่งสินค้าทุกประเภท
          <br />* โดยประมาณ ค่าธรรมเนียมอาจเปลี่ยนแปลงได้
          <ol className="pl-3 list-decimal list-outside">
            <li>
              จอภาพมีมุมมนที่รับกับดีไซน์แบบโค้งอันงดงาม
              และมุมทั้งหมดนี้อยู่ในสี่เหลี่ยมมุมฉากมาตรฐาน
              และเมื่อวัดเป็นรูปสี่เหลี่ยมมุมฉากมาตรฐานแล้ว หน้าจอจะมีขนาด 5.42
              นิ้ว (iPhone 13 mini, iPhone 12 mini), 6.06 นิ้ว (iPhone 13,
              iPhone 13 Pro, iPhone 12) หรือ 6.68 นิ้ว (iPhone 13 Pro Max)
              ในแนวทแยง พื้นที่สำหรับการดูจริงมีขนาดน้อยกว่า
            </li>
            <li>
              พื้นที่ว่างจะน้อยกว่าที่กำหนดและอาจแตกต่างกันไปอันเนื่องมาจากปัจจัยหลายประการ
              โดยการกำหนดค่าตามมาตรฐานที่ให้มานั้นจะใช้พื้นที่ประมาณ 12GB ถึง
              17GB รวม iOS15 พร้อมคุณสมบัติใหม่ล่าสุด และแอปของ Apple
              ที่สามารถลบออกได้ แอปของ Apple ที่สามารถลบออกได้ใช้พื้นที่ประมาณ
              4.5GB และสามารถดาวน์โหลดแอปนั้นกลับมาได้จาก App Store
              พื้นที่จัดเก็บข้อมูลอาจเปลี่ยนแปลงได้ขึ้นอยู่กับเวอร์ชั่นของซอฟต์แวร์
              การตั้งค่า และรุ่นของ iPhone
            </li>
            <li>
              จำเป็นต้องมีแผนบริการข้อมูล, 5G
              มีให้บริการในบางประเทศผ่านผู้ให้บริการเครือข่ายโทรศัพท์บางแห่งเท่านั้น
              ความเร็วแตกต่างกันตามสภาวะของไซต์และผู้ให้บริการเครือข่ายโทรศัพท์
              สำหรับรายละเอียดในการรองรับ 5G
              โปรดติดต่อผู้ให้บริการเครือข่ายโทรศัพท์ และดูที่
              apple.com/th/iphone/cellular
            </li>
            <li>
              การใช้งานแบตเตอรี่ขึ้นอยู่กับการกำหนดค่าของเครือข่ายและปัจจัยอื่นๆ
              อีกหลายอย่าง ผลลัพธ์จริงจะแตกต่างออกไป
              แบตเตอรี่มีจำนวนรอบการชาร์จจำกัดและอาจจำเป็นต้องได้รับการเปลี่ยนใหม่ในที่สุดโดยผู้ให้บริการของ
              Apple
              ระยะเวลาการใช้งานแบตเตอรี่และจำนวนรอบการชาร์จอาจแตกต่างกันตามการใช้งานและการตั้งค่า
              ดูข้อมูลเพิ่มเติมได้ที่ apple.com/th/batteries และ
              apple.com/th/iphone/battery.html
            </li>
          </ol>
          iPhone 13 Pro และ iPhone 13 Pro Max มีความสามารถในการทนน้ำ
          น้ำที่กระเด็นใส่ และฝุ่น
          ซึ่งผ่านการทดสอบตามหลักเกณฑ์ของห้องปฏิบัติการที่ได้รับการควบคุมที่ระดับ
          IP68 ตามมาตรฐาน IEC 60529 (ความลึกไม่เกิน 6 เมตร ภายในระยะเวลาสูงสุด
          30 นาที) ความสามารถในการทนน้ำ น้ำที่กระเด็นใส่ และฝุ่นจะไม่คงอยู่ถาวร
          ซึ่งความสามารถดังกล่าวอาจลดลงจากการใช้งานตามปกติ ห้ามชาร์จ iPhone
          ในขณะที่เครื่องยังเปียกอยู่
          โปรดดูคำแนะนำเกี่ยวกับการทำความสะอาดและการทำให้แห้งในคู่มือผู้ใช้
          การรับประกันไม่ครอบคลุมความเสียหายที่เกิดจากของเหลว
        </p>
      </Footnote>
      <Breadcrumb
        breadcrumb={[
          'iPhone',
          'iPhone 13 Pro',
          'ซื้อ iPhone 13 Pro และ iPhone 13 Pro Max',
        ]}
      />
      <Footer />
    </>
  );
};

export default Iphone13Pro;
