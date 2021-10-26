import React from 'react';
import AppleButton from '../../components/AppleButton';
import Footer from '../../components/Footer';
import GlobalNavBar from '../../components/GlobalNavBar';
import { useStore } from '../../store/store';
import Item from './Item';

const Bag = () => {
  const store = useStore();
  const { bag } = store;
  return (
    <>
      <GlobalNavBar />
      <div className="max-w-screen-lg mx-auto px-5">
        <div className="divide-y divide-gray-300">
          <div className="my-20">
            <h2 className=" font-semibold text-4xl text-center">
              นี่คือรายการสินค้าที่อยู่ในถุงของคุณ
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
};

export default Bag;
