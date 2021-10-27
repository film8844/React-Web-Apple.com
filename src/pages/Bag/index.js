import React, { useEffect, useState } from 'react';
import AppleButton from '../../components/AppleButton';
import Footer from '../../components/Footer';
import GlobalNavBar from '../../components/GlobalNavBar';
import { useStore } from '../../store/store';
import Item from './Item';

const Bag = () => {
  const store = useStore();
  const { bag } = store;

  const [grandTotal, setGrandTotal] = useState(0);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    let calGrandTotal = 0
    for (let i = 0; i < bag.length; i++) {
      const item = bag[i];
      calGrandTotal += item.price
    }
    setGrandTotal(calGrandTotal)
  }, [bag]);

  if (bag.length) {
    return (
      <>
        <GlobalNavBar />
        <div className="max-w-screen-lg mx-auto px-5">
          <div className="divide-y divide-gray-300">
            <div className="my-20">
              <h2 className=" font-semibold text-4xl text-center">
                นี่คือรายการสินค้าที่อยู่ในถุงของคุณ{' '}
                {`฿${Number(grandTotal).toLocaleString('en', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`}
              </h2>
              <p className="text-center text-gray-700 mt-5">
                รับบริการจัดส่งฟรีและส่งคืนฟรีทุกคำสั่งซื้อ
              </p>
              <AppleButton className="px-20 text-xl block mx-auto mt-8">
                ชำระเงิน
              </AppleButton>
            </div>
            {!!bag && bag.map((item) => <Item item={item} key={item.id} />)}
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <GlobalNavBar />
        <div className="divide-y">
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
                <button className="bg-gray-200 hover:bg-gray-100 text-black rounded-xl px-5 py-4 w-full ">
                  เลือกซื้อสินค้าต่อ
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-screen-lg mx-auto px-5 py-5">
              <p>
                ต้องการความช่วยเหลือเพิ่มเติม{' '}
                <span className="text-blue-600">แชท</span> หรือโทร{' '}
                <span className="text-blue-600">001‑800‑65‑6957</span>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default Bag;
