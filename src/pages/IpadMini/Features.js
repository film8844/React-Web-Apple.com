import React from "react";

const IpadMiniFeatures = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center mt-20">
        มาดู iPad mini แบบใกล้ๆ
      </h2>
      <div className="keyfeatures-container mt-10">
        <div
          style={{ backgroundColor: '#fbfbfd' }}
          className="keyfeature-col keyfeature-col-span-4"
        >
          <div
            style={{ width: '42%' }}
            className="absolute right-5 top-20 p-7 z-10"
          >
            <p className="text-xl font-medium text-gray-500">
              <span className="text-black">
                ดีไซน์แบบหน้าจอทั้งหมดและจอภาพ Liquid Retina ขนาด 8.3 นิ้ว
              </span>{' '}
              ที่สวยงามน่าทึ่งพร้อมขอบเขตสีกว้าง การแสดงผลแบบ True Tone
              และความสว่างที่สูงถึง 500 นิต
            </p>
          </div>
          <div className="absolute bottom-0 left-0">
            <img
              style={{ height: '450px' }}
              className="rounded-l-2xl"
              alt="Display Feature"
              src="/assets/features/ipadmini/ipad-mini-key-features-display.jpeg"
            />
          </div>
        </div>
        <div
          style={{ backgroundColor: '#f4f3f6' }}
          className="keyfeature-col keyfeature-col-span-2"
        >
          <div className="p-7">
            <p className="text-xl text-center font-medium text-gray-500">
              <span className="text-black">Touch ID</span> ที่รวมไว้ในปุ่มด้านบน
              <br />
              เพื่อการยืนยันตัวตนที่ทั้ง
              <br />
              รวดเร็ว ใช้งานง่าย และ
              <br />
              ปลอดภัย
            </p>
          </div>
          <div className="absolute bottom-0 rounded-b-2xl overflow-hidden">
            <video loop autoPlay>
              <source
                src="/assets/features/ipadmini/ipad-mini-key-features-touchid.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div
          style={{ backgroundColor: '#fbfbfd' }}
          className="keyfeature-col keyfeature-col-span-3"
        >
          <div className="p-7 mt-5">
            <p className="text-xl text-center font-medium text-gray-500">
              สัมผัสกับประสิทธิภาพการทำงานที่เหนือชั้นและแบตเตอรี่ที่ใช้งานได้ตลอดวันด้วย
              <br />
              <span className="text-black">ชิป A15 Bionic</span>⁴
            </p>
          </div>
          <div className="absolute bottom-0 w-full">
            <img
              alt="Chip Feature"
              className="mx-auto rounded-b-2xl"
              src="/assets/features/ipadmini/ipad-mini-key-features-chip.jpeg"
            />
          </div>
        </div>
        <div
          style={{ backgroundColor: '#fbfbfd' }}
          className="keyfeature-col keyfeature-col-span-3"
        >
          <div className="p-7 mt-5">
            <p className="text-xl text-center font-medium text-gray-500">
              ใช้
              <span className="text-black">
                กล้องหน้าอัลตร้าไวด์ ความละเอียด 12MP
                <br />
                พร้อมคุณสมบัติ "จัดให้อยู่ตรงกลาง"
              </span>
              <br />
              สำหรับวิดีโอคอลที่ดูเป็นธรรมชาติยิ่งขึ้น
            </p>
          </div>
          <div className="absolute bottom-0 w-full">
            <img
              alt="Chip Feature"
              className="mx-auto rounded-b-2xl"
              src="/assets/features/ipadmini/ipad-mini-key-features-camera.jpeg"
            />
          </div>
        </div>
        <div
          style={{ backgroundColor: '#fbfbfd' }}
          className="keyfeature-col keyfeature-col-span-4"
        >
          <div
            style={{ width: '42%' }}
            className="absolute right-5 top-5 p-7 z-10"
          >
            <p className="text-xl font-medium text-gray-500">
              <span className="text-black">
                ยึดติดกับตัวเครื่องด้วยแม่เหล็ก และชาร์จแบบไร้สาย
              </span>{' '}
              เขียน วาด และจดโน้ตด้วย{' '}
              <span className="text-black">Apple Pencil (รุ่นที่ 2)</span>²
            </p>
          </div>
          <div className="absolute bottom-0 left-0">
            <img
              style={{ height: '450px' }}
              className="rounded-l-2xl"
              alt="Display Feature"
              src="/assets/features/ipadmini/ipad-mini-key-features-pencil.jpeg"
            />
          </div>
        </div>
        <div
          style={{ backgroundColor: '#fbfbfd' }}
          className="keyfeature-col keyfeature-col-span-2 flex flex-col items-center justify-center"
        >
          <div>
            <img
              alt="Cellular Feature"
              src="/assets/features/ipadmini/ipad-mini-key-features-cellular.jpeg"
            />
          </div>
          <div className="p-7">
            <p className="text-xl text-center font-medium text-gray-500">
              สัมผัส
              <span className="text-black">
                ความเร็วสุดแรงบนรุ่น
                <br />
                เซลลูลาร์ 5G
              </span>
              ³
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IpadMiniFeatures;
