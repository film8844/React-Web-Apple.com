import React, { useEffect, useState } from 'react';
import { useStore } from '../../store/store';

import GlobalNavBar from '../../components/GlobalNavBar';
import AppleButton from '../../components/AppleButton';
import Breadcrumb from '../../components/Breadcrumb';
import Footnote from '../../components/Footnote';
import Footer from '../../components/Footer';

import Item from './Item';
import NewArrivals from './NewArrivals';
import Recommendations from './Recommentdations';
import BagFAQ from './FAQ';

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
        <BagFAQ />
        <Footnote>
          <p className="text-xs text-gray-500">
            ราคาสินค้าดังกล่าวได้รวมภาษีมูลค่าเพิ่มแล้ว
            และไม่มีค่าธรรมเนียมการจัดส่งสินค้าทุกประเภท
          </p>
        </Footnote>
        <Breadcrumb breadcrumb={['ถุง']} />
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
        <BagFAQ />
        <Footnote>
          <p className="text-xs text-gray-500">
            ราคาสินค้าดังกล่าวได้รวมภาษีมูลค่าเพิ่มแล้ว
            และไม่มีค่าธรรมเนียมการจัดส่งสินค้าทุกประเภท
          </p>
        </Footnote>
        <Breadcrumb breadcrumb={['ถุง']} />
        <Footer />
      </>
    );
  }
};

export default Bag;
