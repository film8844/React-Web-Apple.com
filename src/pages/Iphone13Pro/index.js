import React, { useState } from 'react';
import Footer from '../../components/Footer';
import GlobalNavBar from '../../components/GlobalNavBar';
import ProductNavBar from '../../components/ProductNavBar';
import VariantOption from '../../components/VariantOption';

const Iphone13Pro = () => {
  const [variantType, setVariantType] = useState('');
  const handleChangeVariantType = (event) => {
    setVariantType(event.target.value);
  };
  const [variantColor, setVariantColor] = useState('');
  const handleChangeVariantColor = (event) => {
    setVariantColor(event.target.value);
  };
  const [variantStorage, setVariantStorage] = useState('');
  const handleChangeVariantStorage = (event) => {
    setVariantStorage(event.target.value);
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
          <div>
            <img
              src={
                '/assets/src_image/iphon13Pro/product/iphone-13-pro-family-hero.png'
              }
              alt="iPhone 13 Pro"
              className="block mx-auto"
            />
          </div>
          <div className="md:pl-20">
            <div className="mt-14">
              <p className="text-red-600 text-xl mb-2">ใหม่</p>
              <h1 className="text-4xl font-semibold">ซื้อ iPhone 13 Pro</h1>

              <div id="variantType" className="mt-5">
                <div className="mb-2">
                  <h4 className="text-xl font-bold">เลือกรุ่น</h4>
                  <span className="text-blue-600">รุ่นไหนเหมาะกับคุณ</span>
                </div>
                <div id="varaintTypeOptions" className="space-y-3">
                  <VariantOption
                    variant="type"
                    value="pro"
                    selected={variantType == 'pro'}
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
                    selected={variantType == 'promax'}
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
                </div>
              </div>

              <div id="variantColor" className="mt-5">
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
                    selected={variantColor == 'blue'}
                    onChange={handleChangeVariantColor}
                  >
                    <span>เซียร์ร่าบลู</span>
                  </VariantOption>
                  <VariantOption
                    variant="color"
                    value="silver"
                    selected={variantColor == 'silver'}
                    onChange={handleChangeVariantColor}
                  >
                    <span>เงิน</span>
                  </VariantOption>
                  <VariantOption
                    variant="color"
                    value="gold"
                    selected={variantColor == 'gold'}
                    onChange={handleChangeVariantColor}
                  >
                    <span>ทอง</span>
                  </VariantOption>
                  <VariantOption
                    variant="color"
                    value="graphite"
                    selected={variantColor == 'graphite'}
                    onChange={handleChangeVariantColor}
                  >
                    <span>กราไฟต์</span>
                  </VariantOption>
                </div>
              </div>

              <div id="variantStorage" className="mt-5">
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
                    selected={variantStorage == '128GB'}
                    onChange={handleChangeVariantStorage}
                  >
                    <div className="flex flex-col text-center py-2">
                      <span className="font-medium">
                        <span className="text-2xl">128</span>GB²
                      </span>
                      <span className="text-xs">฿42,900.00</span>
                    </div>
                  </VariantOption>
                  <VariantOption
                    variant="storage"
                    value="256GB"
                    selected={variantStorage == '256GB'}
                    onChange={handleChangeVariantStorage}
                  >
                    <div className="flex flex-col text-center py-2">
                      <span className="font-medium">
                        <span className="text-2xl">256</span>GB²
                      </span>
                      <span className="text-xs">฿46,900.00</span>
                    </div>
                  </VariantOption>
                  <VariantOption
                    variant="storage"
                    value="512GB"
                    selected={variantStorage == '512GB'}
                    onChange={handleChangeVariantStorage}
                  >
                    <div className="flex flex-col text-center py-2">
                      <span className="font-medium">
                        <span className="text-2xl">512</span>GB²
                      </span>
                      <span className="text-xs">฿54,900.00</span>
                    </div>
                  </VariantOption>
                  <VariantOption
                    variant="storage"
                    value="1TB"
                    selected={variantStorage == '1TB'}
                    onChange={handleChangeVariantStorage}
                  >
                    <div className="flex flex-col text-center py-2">
                      <span className="font-medium">
                        <span className="text-2xl">1</span>TB²
                      </span>
                      <span className="text-xs">฿62,900.00</span>
                    </div>
                  </VariantOption>
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
