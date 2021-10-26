import React from 'react';
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
      <div className="max-w-screen-lg mx-auto px-5 py-16">
        <h2 className=" font-semibold text-4xl text-center">
          นี่คือรายการสินค้าที่อยู่ในถุงของคุณ
        </h2>
        <p className="text-center text-gray-700 mt-5">
          รับบริการจัดส่งฟรีและส่งคืนฟรีทุกคำสั่งซื้อ
        </p>
        <div className="divide-y">
          {!!bag && bag.map((item) => <Item item={item} key={item.id} />)}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bag;