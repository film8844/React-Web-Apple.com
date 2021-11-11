import React from 'react';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import AppleButton from '../../components/AppleButton';

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

export default Recommendations;
