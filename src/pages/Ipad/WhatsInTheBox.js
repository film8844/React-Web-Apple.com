import React from 'react';

const WhatsInTheBox = () => {
  return (
    <div className="mb-20">
      <h2 className="text-4xl font-semibold text-center mt-20">
        สิ่งที่มีมาให้ในกล่อง
      </h2>
      <div className="mt-14 hidden lg:block">
        <div
          className="grid grid-cols-3"
          style={{
            backgroundColor: '#fafafa',
            maxHeight: '300px',
          }}
        >
          <div>
            <img
              src="/assets/whatsInTheBox/ipad.jpg"
              className="mx-auto"
              style={{ height: '300px' }}
            />
          </div>
          <div>
            <img
              src="/assets/whatsInTheBox/lightning-cable.jpg"
              className="mx-auto"
              style={{ height: '300px' }}
            />
          </div>
          <div>
            <img
              src="/assets/whatsInTheBox/20w-adapter.jpg"
              className="mx-auto"
              style={{ height: '300px' }}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 mt-5">
          <div className="text-center">
            <span>iPad</span>
          </div>
          <div className="text-center">
            <span>สาย USB-C เป็น ​Lightning</span>
          </div>
          <div className="text-center">
            <span>อะแดปเตอร์แปลงไฟ USB-C ขนาด 20 วัตต์</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsInTheBox;
