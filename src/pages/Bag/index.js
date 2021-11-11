import React, { useEffect, useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import AppleButton from '../../components/AppleButton';
import Breadcrumb from '../../components/Breadcrumb';
import Footer from '../../components/Footer';
import GlobalNavBar from '../../components/GlobalNavBar';
import { useStore } from '../../store/store';
import Item from './Item';

const Bag = () => {
  const store = useStore();
  const { bag } = store;

  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    let calGrandTotal = 0;
    for (let i = 0; i < bag.length; i++) {
      const item = bag[i];
      calGrandTotal += item.price;
    }
    setGrandTotal(calGrandTotal);
  }, [bag]);

  if (bag.length > 0) {
    return (
      <>
        <GlobalNavBar />
        <div className="max-w-screen-lg mx-auto px-5">
          <div className="divide-y divide-gray-300">
            <div className="my-20">
              <h2 className="font-semibold text-3xl md:text-4xl text-center">
                นี่คือรายการสินค้าที่อยู่ในถุงของคุณ{' '}
                {`฿${Number(grandTotal).toLocaleString('en', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`}
              </h2>
              <p className="text-lg text-center text-gray-700 mt-5">
                รับบริการจัดส่งฟรีและส่งคืนฟรีทุกคำสั่งซื้อ
              </p>
              <AppleButton className="px-28 text-xl block mx-auto mt-8">
                ชำระเงิน
              </AppleButton>
            </div>
            {!!bag && bag.map((item) => <Item item={item} key={item.id} />)}
            <div className="grid grid-cols-1 md:grid-cols-4 pt-14 mb-24">
              <div></div>
              <div className="col-span-3 divide-y divide-gray-300">
                <div className="flex justify-between gap-2 mb-5">
                  <div>
                    <p>ยอดรวม</p>
                    <p>การจัดส่ง</p>
                  </div>
                  <div className="text-right">
                    <p>{`฿${Number(grandTotal).toLocaleString('en', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}`}</p>
                    <p>ฟรี</p>
                  </div>
                </div>
                <div className="pt-5">
                  <div className="flex justify-between gap-2">
                    <div>
                      <p className="text-2xl font-semibold">
                        ยอดชำระเงินของคุณ
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-semibold">{`฿${Number(
                        grandTotal
                      ).toLocaleString('en', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}`}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">
                      รวม VAT จำนวน{' '}
                      {`฿${Number((grandTotal / 1.07) * 0.07).toLocaleString(
                        'en',
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}`}
                    </p>
                    <p className="text-sm text-blue-600 mt-1 hover:underline cursor-pointer">
                      {`฿${Number(grandTotal / 10).toLocaleString('en', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}`}
                      /เดือน เป็นเวลา 10 เดือน ดอกเบี้ย 0%
                    </p>
                  </div>
                  <AppleButton className="w-full md:w-1/2 p-3 text-lg block ml-auto mt-8 rounded-2xl">
                    ชำระเงิน
                  </AppleButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-b border-gray-300">
          <div className="max-w-screen-lg mx-auto px-5 py-5">
            <p>
              ต้องการความช่วยเหลือเพิ่มเติม{' '}
              <span className="text-blue-600 hover:underline cursor-pointer">
                แชท
              </span>{' '}
              หรือโทร 001‑800‑65‑6957
            </p>
          </div>
        </div>
        <Recommendations />
        <NewArrivals />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <GlobalNavBar />
        <div>
          <div className="max-w-screen-lg mx-auto px-5 py-14">
            <h1 className="font-semibold text-3xl md:text-4xl">
              ถุงของคุณว่างเปล่า
            </h1>
            <p className="text-lg pt-5">
              ลงชื่อเข้าใช้เพื่อดูว่าคุณมีรายการสินค้าที่บันทึกไว้หรือไม่
              หรือไปเลือกซื้อสินค้าต่อ
            </p>
            <div className="mt-8 flex flex-col md:flex-row gap-5 md:max-w-screen-md">
              <AppleButton className="px-5 w-full py-4 rounded-xl">
                ลงชื่อเข้าใช้
              </AppleButton>
              <button className="apple-btn-secondary text-black rounded-xl px-5 py-4 w-full ">
                เลือกซื้อสินค้าต่อ
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-b border-gray-300">
          <div className="max-w-screen-lg mx-auto px-5 py-5">
            <p>
              ต้องการความช่วยเหลือเพิ่มเติม{' '}
              <span className="text-blue-600">แชท</span> หรือโทร 001‑800‑65‑6957
            </p>
          </div>
        </div>
        <Recommendations />
        <NewArrivals />
        <Breadcrumb breadcrumb={['ถุง']} />
        <Footer />
      </>
    );
  }
};

export default Bag;

const Recommendations = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-5 pt-14 pb-5">
      <h2 className="text-4xl font-semibold text-center mt-10">
        สินค้าแนะนำเล็กๆ น้อยๆ
      </h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-24">
        <div className="flex flex-col">
          <div>
            <img
              className="mx-auto"
              src="/assets/bag_images/20w-adapter.jfif"
              alt=""
              style={{ maxWidth: '194px' }}
            />
            <p className="mt-5 text-lg font-medium">
              อะแดปเตอร์แปลงไฟ USB-C ขนาด 20 วัตต์
            </p>
            <p className="mb-10">฿690.00</p>
          </div>
          <div className="mt-auto">
            <AppleButton className="px-5 w-full py-3 rounded-xl">
              ใส่ลงถุง
            </AppleButton>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <img
              className="mx-auto"
              src="/assets/bag_images/magsafe.jfif"
              alt=""
              style={{ maxWidth: '194px' }}
            />
            <p className="mt-5 text-lg font-medium">ที่ชาร์จ MagSafe</p>
            <p className="mb-10">฿1,490.00</p>
          </div>
          <div className="mt-auto">
            <AppleButton className="px-5 w-full py-3 rounded-xl">
              ใส่ลงถุง
            </AppleButton>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <img
              className="mx-auto"
              src="/assets/bag_images/polishing-cloth.jfif"
              alt=""
              style={{ maxWidth: '194px' }}
            />
            <p className="mt-5 text-xs text-red-600">ใหม่</p>
            <p className="text-lg font-medium">ผ้าเช็ดรอย</p>
            <p className="mb-10">฿690.00</p>
          </div>
          <div className="mt-auto">
            <AppleButton className="px-5 w-full py-3 rounded-xl">
              ใส่ลงถุง
            </AppleButton>
          </div>
        </div>
      </div>
      <p className="mt-12 text-center text-apple-link-blue hover:underline">
        แสดงผลิตภัณฑ์เพิ่มเติม
        <KeyboardArrowDown sx={{ fontSize: '18px' }} />
      </p>
    </div>
  );
};

const NewArrivals = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-5 py-14">
      <div
        className="hidden md:block"
        style={{
          backgroundImage:
            'url("/assets/bag_images/apple-new-arrivals-checkout.jfif")',
          height: '400px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="h-full flex flex-col items-center justify-center text-center"
          style={{ maxWidth: '500px' }}
        >
          <div>
            <h6 className="text-3xl font-medium">สินค้าเข้าใหม่</h6>
            <p className="text-lg">ลองดูอุปกรณ์เสริมล่าสุด</p>
            <p className="text-apple-link-blue hover:underline">
              เลือกซื้อ
              <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
            </p>
          </div>
        </div>
      </div>
      <div
        className="md:hidden"
        style={{
          backgroundImage:
            'url("/assets/bag_images/apple-new-arrivals-checkout-sm.jfif")',
          height: '400px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="pt-10 flex flex-col items-center justify-center text-center">
          <div>
            <h6 className="text-3xl font-medium">สินค้าเข้าใหม่</h6>
            <p className="text-lg">ลองดูอุปกรณ์เสริมล่าสุด</p>
            <p className="text-apple-link-blue hover:underline">
              เลือกซื้อ
              <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
