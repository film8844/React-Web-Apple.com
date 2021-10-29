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
            src="/assets/whatsInTheBox/iphone13.jpg"
            className="mb-5 mx-auto"
            style={{ maxHeight: '340px' }}
          />
          <span>iPhone</span>
        </div>
        <div className="text-center">
          <img
            src="/assets/whatsInTheBox/typectolightningcable.jpg"
            className="mb-5 mx-auto"
            style={{ maxHeight: '340px' }}
          />
          <span>สาย USB-C เป็น ​Lightning</span>
        </div>
      </div>
      <p className="text-sm text-center mt-10 text-gray-600">
        iPhone 13 และ iPhone 13 mini ไม่มีอะแดปเตอร์แปลงไฟหรือ EarPods
        ให้มาด้วย{' '}
        <span className="text-blue-500">
          ซึ่งเป็นส่วนหนึ่งในความพยายามของเราที่จะลดผลกระทบต่อสิ่งแวดล้อม
        </span>{' '}
        สิ่งที่มีมาให้ในกล่องได้แก่สาย USB‑C เป็น Lightning
        ที่รองรับการชาร์จเร็วและใช้งานได้กับอะแดปเตอร์แปลงไฟ USB-C
        รวมถึงพอร์ตคอมพิวเตอร์ต่างๆ <br />
        <br />
        เราส่งเสริมให้คุณใช้ซ้ำสาย USB‑A เป็น Lightning
        รวมถึงอะแดปเตอร์แปลงไฟและหูฟังที่คุณมีอยู่แล้วในตอนนี้
        ซึ่งสามารถใช้งานได้กับ iPhone รุ่นต่างๆ เหล่านี้
        แต่หากคุณต้องการอะแดปเตอร์แปลงไฟหรือหูุฟังของ Apple อันใหม่
        ก็มีวางจำหน่ายให้เลือกซื้อได้
      </p>
    </div>
  );
};

export default WhatsInTheBox;
