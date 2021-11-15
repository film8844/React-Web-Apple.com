import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Iphone13ProFeatures = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center mt-20">
        มาดู iPhone 13 Pro แบบใกล้ๆ
      </h2>
      <div className="keyfeatures-container mt-10">
        <div className="keyfeature-col keyfeature-col-span-4 grid grid-cols-2">
          <div className="p-7">
            <p className="text-3xl font-medium text-gray-500">
              <span className="text-black">
                การอัปเกรดกล้องครั้งใหญ่ที่สุดเท่าที่เคยมีมาของเรา
              </span>{' '}
              ระบบกล้องระดับโปรแบบใหม่หมด พร้อมประสิทธิภาพสุดล้ำในสภาวะแสงน้อย
              และยังเก็บรายละเอียดได้อย่างน่าทึ่งด้วยการถ่ายภาพมาโคร
            </p>
          </div>
          <div>
            <img
              style={{ height: '450px' }}
              alt="Camera Feature"
              className="w-full rounded-r-2xl"
              src="assets/features/iphone13pro/iphone-13-pro-key-features-camera.png"
            />
          </div>
        </div>
        <div className="keyfeature-col keyfeature-col-span-2">
          <div className="p-7">
            <p className="text-3xl font-medium text-gray-500">
              <span className="text-black">โหมดภาพยนตร์</span>{' '}
              เพิ่มมิติความชัดตื้นโดยอัตโนมัติ
              และคุณยังสามารถสลับโฟกัสหลังจากที่ถ่ายไปแล้วได้ด้วย
            </p>
          </div>
          <div className="absolute bottom-0">
            <img
              alt="Cinematic Feature"
              className="h-full rounded-b-2xl"
              src="assets/features/iphone13pro/iphone-13-pro-key-features-cinematic.png"
            />
          </div>
        </div>
        <div className="keyfeature-col keyfeature-col-span-3">
          <div className="p-7 w-3/4">
            <p className="text-3xl font-medium text-gray-500">
              <span className="text-black">
                จอภาพ Super Retina XDR พร้อม ProMotion
              </span>{' '}
              เต็มตาไปกับจอภาพที่ทั้งเร็วขึ้น สว่างขึ้น และตอบสนองฉับไวยิ่งขึ้น
            </p>
          </div>
          <div className="absolute bottom-0 right-0">
            <img
              alt="Display Feature"
              src="assets/features/iphone13pro/iphone-13-pro-key-features-display.png"
            />
          </div>
        </div>
        <div className="keyfeature-col keyfeature-col-span-3">
          <div className="w-full absolute" style={{ top: '-10px' }}>
            <img
              alt="Chip Feature"
              className="mx-auto rounded-r-2xl"
              style={{ maxWidth: '400px' }}
              src="assets/features/iphone13pro/iphone-13-pro-key-features-chip.png"
            />
          </div>
          <div className="absolute bottom-0 p-7">
            <p className="text-3xl text-center font-medium text-gray-500">
              <span className="text-black">A15 Bionic</span>{' '}
              ชิปสมาร์ทโฟนที่เร็วที่สุดในโลก
              <br />
              <span className="text-black">5G ที่เร็วสุดแรง</span>{' '}
              เพื่อการดาวน์โหลดที่เร็วยิ่งขึ้น และการสตรีมคุณภาพสูง³
            </p>
          </div>
        </div>
        <div className="keyfeature-col keyfeature-col-span-4">
          <div className="p-7">
            <p className="text-3xl text-center font-medium text-gray-500">
              <span className="text-black">
                เล่นวิดีโอนานสูงสุด 28 ชั่วโมง⁴
              </span>{' '}
              iPhone 13 Pro Max
              มาพร้อมแบตเตอรี่ที่ใช้งานได้ดีที่สุดเท่าที่เคยมีมาใน iPhone
            </p>
          </div>
          <div className="absolute bottom-0">
            <img
              alt="Battery Feature"
              className="rounded-r-2xl"
              src="assets/features/iphone13pro/iphone-13-pro-key-features-battery.png"
            />
          </div>
        </div>
        <div className="keyfeature-col keyfeature-col-span-2">
          <div className="p-7">
            <p className="text-3xl font-medium text-gray-500">
              <span className="text-black">Ceramic Shield</span>{' '}
              ที่แข็งแกร่งกว่ากระจกไหนๆ บนสมาร์ทโฟน และยังทนฝุ่น น้ำที่หกใส่
              และน้ำอีกด้วย
            </p>
          </div>
          <div className="absolute bottom-0 right-0">
            <img
              alt="Glass Feature"
              className="h-full rounded-b-2xl"
              style={{ maxWidth: '280px' }}
              src="assets/features/iphone13pro/iphone-13-pro-key-features-glass.png"
            />
          </div>
        </div>
      </div>
      <p className="text-center text-lg font-medium mt-14">
        <span
          className="text-apple-link-blue hover:underline"
        >
          ดูเพิ่มเติมเกี่ยวกับ iPhone 13 Pro
          <KeyboardArrowRightIcon />
        </span>
      </p>
    </div>
  );
};

export default Iphone13ProFeatures;
