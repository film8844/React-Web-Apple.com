import React, { useState } from 'react';
import Footer from '../../components/Footer';
import GlobalNavBar from '../../components/GlobalNavBar';
import ProductNavBar from '../../components/ProductNavBar';
import VariantOption from '../../components/VariantOption';

const Iphone13Pro = () => {
  const [priceText, setPriceText] = useState('เริ่มต้นที่ ฿38,900');
  const [productImage, setProductImage] = useState('iphone13pro-hero.png');
  const [variantType, setVariantType] = useState('');
  const handleChangeVariantType = (event) => {
    setVariantType(event.target.value);
    if (event.target.value === 'pro') {
      setPriceText('เริ่มต้นที่ ฿38,900');
      if (!!variantColor) {
        setProductImage(`iphone13pro-pro-${variantColor}.png`);
      } else {
        setProductImage('iphone13pro-pro-family.jfif');
      }
    } else if (event.target.value === 'promax') {
      setPriceText('เริ่มต้นที่ ฿42,900');
      if (!!variantColor) {
        setProductImage(`iphone13pro-promax-${variantColor}.png`);
      } else {
        setProductImage('iphone13pro-promax-family.jfif');
      }
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

  return (
    <>
      <GlobalNavBar disableSticky={true} />
      <ProductNavBar productName="iPhone 13 Pro" priceText={priceText} />
      <div className="max-w-screen-lg mx-auto px-5 min-h-screen mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <div className="sticky top-0">
              <img
                src={`/assets/products/iphone13pro/${productImage}`}
                alt="iPhone 13 Pro"
                className="block mx-auto mt-14"
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
              <p className="text-red-600 text-xl mb-2">ใหม่</p>
              <h1 className="text-4xl font-semibold">ซื้อ iPhone 13 Pro</h1>

              <div className="divide-y divide-gray-300">
                <div id="variantType" className="mt-5">
                  <div className="mb-2 pt-5">
                    <h4 className="text-xl font-bold">เลือกรุ่น</h4>
                    <span className="text-blue-600">รุ่นไหนเหมาะกับคุณ</span>
                  </div>
                  <div id="varaintTypeOptions" className="space-y-3">
                    <VariantOption
                      variant="type"
                      value="pro"
                      checked={variantType === 'pro'}
                      onChange={handleChangeVariantType}
                    >
                      <div className="flex flex-row justify-between items-center">
                        <div>
                          <p className="text-lg font-medium">iPhone 13 Pro</p>
                          <p className="text-sm">จอภาพขนาด 6.1 นิ้ว¹</p>
                        </div>
                        <span>เริ่มต้นที่ ฿38,900</span>
                      </div>
                    </VariantOption>
                    <VariantOption
                      variant="type"
                      value="promax"
                      checked={variantType === 'promax'}
                      onChange={handleChangeVariantType}
                    >
                      <div className="flex flex-row justify-between items-center">
                        <div>
                          <p className="text-lg font-medium">
                            iPhone 13 Pro Max
                          </p>
                          <p className="text-sm">จอภาพขนาด 6.1 นิ้ว¹</p>
                        </div>
                        <span>เริ่มต้นที่ ฿42,900</span>
                      </div>
                    </VariantOption>
                  </div>
                </div>

                <div id="variantColor" className="mt-5">
                  <div className="mb-2 pt-5">
                    <h4 className="text-xl font-bold">เลือกสี</h4>
                  </div>
                  <div
                    id="variantColorOptions"
                    className="grid grid-cols-2 gap-3"
                  >
                    <VariantOption
                      variant="color"
                      value="blue"
                      checked={variantColor === 'blue'}
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
                      checked={variantColor === 'silver'}
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
                      checked={variantColor === 'gold'}
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
                      checked={variantColor === 'graphite'}
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
                </div>

                <div id="variantStorage" className="mt-5">
                  <div className="mb-2 pt-5">
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
                      checked={variantStorage === '128GB'}
                      onChange={handleChangeVariantStorage}
                    >
                      <div className="flex flex-col text-center py-1">
                        <p>
                          <span className="text-3xl">128</span>
                          <span className="font-medium text-lg">GB²</span>
                        </p>
                        <span className="text-sm">฿42,900.00</span>
                      </div>
                    </VariantOption>
                    <VariantOption
                      variant="storage"
                      value="256GB"
                      checked={variantStorage === '256GB'}
                      onChange={handleChangeVariantStorage}
                    >
                      <div className="flex flex-col text-center py-1">
                        <p>
                          <span className="text-3xl">256</span>
                          <span className="font-medium text-lg">GB²</span>
                        </p>
                        <span className="text-sm">฿46,900.00</span>
                      </div>
                    </VariantOption>
                    <VariantOption
                      variant="storage"
                      value="512GB"
                      checked={variantStorage === '512GB'}
                      onChange={handleChangeVariantStorage}
                    >
                      <div className="flex flex-col text-center py-1">
                        <p>
                          <span className="text-3xl">512</span>
                          <span className="font-medium text-lg">GB²</span>
                        </p>
                        <span className="text-sm">฿54,900.00</span>
                      </div>
                    </VariantOption>
                    <VariantOption
                      variant="storage"
                      value="1TB"
                      checked={variantStorage === '1TB'}
                      onChange={handleChangeVariantStorage}
                    >
                      <div className="flex flex-col text-center py-1">
                        <p>
                          <span className="text-3xl">1</span>
                          <span className="font-medium text-lg">TB²</span>
                        </p>
                        <span className="text-sm">฿62,900.00</span>
                      </div>
                    </VariantOption>
                  </div>
                </div>

                <div id="variantType" className="mt-5">
                  <div className="mb-5 pt-5">
                    <h4 className="text-lg font-bold">
                      คุณต้องการเพิ่มความคุ้มครอง AppleCare+ หรือไม่
                    </h4>
                    <p className="text-sm text-gray-600">
                      ขยายความคุ้มครองด้านฮาร์ดแวร์และซอฟต์แวร์
                      พร้อมรับสิทธิพิเศษในการขอความช่วยเหลือจากผู้ที่รู้จัก
                      iPhone ของคุณดีที่สุด
                    </p>
                  </div>
                  <div id="varaintTypeOptions" className="space-y-3">
                    <VariantOption
                      variant="applecare"
                      value="0"
                      checked={variantAppleCare === '0'}
                      onChange={handleChangeVariantAppleCare}
                    >
                      <p className="text-lg font-semibold">
                        ไม่มีการคุ้มครอง AppleCare+
                      </p>
                    </VariantOption>
                    <VariantOption
                      variant="applecare"
                      value="1"
                      checked={variantAppleCare === '1'}
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-4xl font-semibold text-center">
            สิ่งที่มีมาให้ในกล่อง
          </h2>
          <p className="text-sm text-center mt-10">
            iPhone 13 Pro และ iPhone 13 Pro Max ไม่มีอะแดปเตอร์แปลงไฟหรือ
            EarPods ให้มาด้วย{' '}
            <span className="text-blue-500">
              ซึ่งเป็นส่วนหนึ่งในความพยายามของเราที่จะลดผลกระทบต่อสิ่งแวดล้อม
            </span>{' '}
            สิ่งที่มีมาให้ในกล่องได้แก่สาย USB‑C เป็น Lightning
            ที่รองรับการชาร์จเร็วและใช้งานได้กับอะแดปเตอร์แปลงไฟ USB-C
            รวมถึงพอร์ตคอมพิวเตอร์ต่างๆ <br />
            <br />
            เราส่งเสริมให้คุณใช้ซ้ำสาย USB‑A เป็น Lightning
            รวมถึงอะแดปเตอร์แปลงไฟและหูฟังที่คุณมีอยู่แล้วในตอนนี้
            ซึ่งสามารถใช้งานได้กับ iPhone รุ่นต่างๆ เหล่านี้
            แต่หากคุณต้องการอะแดปเตอร์แปลงไฟหรือหูุฟังของ Apple อันใหม่
            ก็มีวางจำหน่ายให้เลือกซื้อได้
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Iphone13Pro;
