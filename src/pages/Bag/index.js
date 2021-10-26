import React from 'react';
import Footer from '../../components/Footer';
import GlobalNavBar from '../../components/GlobalNavBar';
import { useStore } from '../../store/store';

const Bag = () => {
  const store = useStore();
  const {bag} = store;
  return (
    <>
      <GlobalNavBar />
      <div className="max-w-screen-lg mx-auto px-5 py-16">
        <h2 className=" font-semibold text-4xl text-center">นี่คือรายการสินค้าที่อยู่ในถุงของคุณ</h2>
        <p className="text-center text-gray-700 mt-5">รับบริการจัดส่งฟรีและส่งคืนฟรีทุกคำสั่งซื้อ</p>
        {!!bag && bag.map(item => <p>{item}</p>)}
      </div>
      <Footer />
    </>
  );
};

export default Bag;
