import React from 'react';

const WhatsInTheBox = () => {
  return (
    <div className="mb-20">
      <h2 className="text-4xl font-semibold text-center mt-20">
        สิ่งที่มีมาให้ในกล่อง
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-20 mb-16">
        <div className="text-center">
          <img
            src="/assets/whatsInTheBox/ipadmini.jfif"
            className="mb-5 mx-auto"
            style={{ maxHeight: '300px' }}
          />
          <span>iPad mini</span>
        </div>
        <div className="text-center">
          <img
            src="/assets/whatsInTheBox/typeccable.jfif"
            className="mb-5 mx-auto"
            style={{ maxHeight: '300px' }}
          />
          <span>สายชาร์จ USB-C</span>
        </div>
        <div className="text-center">
          <img
            src="/assets/whatsInTheBox/ipadmini-power.jfif"
            className="mb-5 mx-auto"
            style={{ maxHeight: '300px' }}
          />
          <span>อะแดปเตอร์แปลงไฟ USB-C ขนาด 20 วัตต์</span>
        </div>
      </div>
    </div>
  );
};

export default WhatsInTheBox;
