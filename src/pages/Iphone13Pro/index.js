import React, { useState, useEffect } from 'react';
import CompareTest from '../../components/CompareTest';
import Footer from '../../components/Footer';
import GlobalNavBar from '../../components/GlobalNavBar';
import ProductNavBar from '../../components/ProductNavBar';
import QuestionBox from '../../components/QuestionBox';
import VariantOption from '../../components/VariantOption';
import VariantSelection from '../../components/VariantSelection';

import WhatsInTheBox from './WhatsInTheBox';

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

const Iphone13Pro = () => {
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
    }
  };

  const [variantColor, setVariantColor] = useState('');
  const handleChangeVariantColor = (event) => {
    setVariantColor(event.target.value);
    setProductImage(`iphone13pro-${variantType}-${event.target.value}.png`);
  };

  const [variantStorage, setVariantStorage] = useState('');
  const handleChangeVariantStorage = (event) => {
    setVariantStorage(event.target.value);
  };
  const [variantAppleCare, setVariantAppleCare] = useState(null);
  const handleChangeVariantAppleCare = (event) => {
    setVariantAppleCare(event.target.value);
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
      if ([false, true][parseInt(variantAppleCare)]) {
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

  return (
    <>
      <GlobalNavBar disableSticky={true} />
      <ProductNavBar productName="iPhone 13 Pro" priceText={priceText} />
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
                  <div>
                    <p className="text-sm font-bold text-center">จัดส่งฟรี</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-center">
                      ส่งคืนสะดวกและฟรี
                    </p>
                  </div>
                </div>
                <div className="pt-5 flex justify-center">
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
                <h1 className="text-4xl font-semibold">ซื้อ iPhone 13 Pro</h1>
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
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-xl text-white rounded-lg p-1">
                ต่อไป
              </button>
            </div>
            <div
              className={`p-5 mt-16 divide-y divide-gray-300 ${
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
                <div className="mb-4">
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
                <div className="mb-8">
                  <p className="text-sm leading-none">
                    <span className="font-bold">การรับสินค้า:</span>
                    <br />
                    ขณะนี้ยังไม่มีจำหน่ายที่ Apple Iconsiam
                    <br />
                    <span className="text-blue-500">ดูร้านอื่น</span>
                  </p>
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-xl text-white rounded-lg p-1">
                  ใส่ลงในถุง
                </button>
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

export default Iphone13Pro;
