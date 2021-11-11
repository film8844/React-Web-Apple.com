import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const IpadFeatures = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center mt-20">
        เข้ามาดู iPad เครื่องนี้กันใกล้ๆ
      </h2>
      <div className="keyfeatures-container mt-10">
        <div
          style={{ backgroundColor: '#fbfbfd' }}
          className="keyfeature-col keyfeature-col-span-4"
        >
          <div className="p-7 mt-5">
            <p className="text-xl text-center font-medium text-gray-500">
              <span className="text-black">
                จอภาพ Retina ขนาด 10.2 นิ้ว พร้อมการแสดงผลแบบ True
                <br />
                Tone ที่ให้รายละเอียดอันน่าทึ่ง สีสันที่สดใส
              </span>{' '}
              และประสบการณ์
              <br />
              การดูที่สบายตา
            </p>
          </div>
          <div className="absolute bottom-0">
            <img
              className="rounded-b-2xl"
              alt="Display Feature"
              src="/assets/features/ipad/ipad-key-features-display.jpg"
            />
          </div>
        </div>
        <div
          style={{ background: 'linear-gradient(#0ba0d2,#1b82c6)' }}
          className="keyfeature-col keyfeature-col-span-2"
        >
          <div className="absolute top-16 left-10">
            <img
              alt="Chip Feature"
              src="/assets/features/ipad/ipad-key-features-chip.png"
            />
          </div>
          <div className="absolute bottom-0 p-7">
            <p className="text-4xl font-medium text-white">
              ชิป A13 Bionic พร้อม Neural Engine
              ทำให้ทุกอย่างที่คุณทำตอบสนองได้ฉับไวยิ่งกว่าเดิม
            </p>
          </div>
        </div>
        <div
          style={{ background: 'linear-gradient(#f65833,#f73552)' }}
          className="keyfeature-col keyfeature-col-span-2"
        >
          <div className="absolute top-16 left-8">
            <img
              alt="OS Feature"
              src="/assets/features/ipad/ipad-key-features-os.png"
            />
          </div>
          <div className="absolute bottom-0 p-7">
            <p className="text-4xl font-medium text-white">
              iPadOS ช่วยให้ iPad ใช้งานง่ายขึ้นด้วยงานมัลติทาสก์
              การจดโน้ตที่ใช้งานได้กับทั้งระบบ และวิดเจ็ตต่างๆ
            </p>
          </div>
        </div>
        <div
          style={{ backgroundColor: '#fbfbfd' }}
          className="keyfeature-col keyfeature-col-span-4 overflow-hidden"
        >
          <div className="p-7 mt-5">
            <p className="text-xl text-center font-medium text-gray-500">
              ใช้
              <span className="text-black">
                กล้องหน้าอัลตร้าไวด์ ความละเอียด 12MP พร้อมคุณสมบัติ
                <br /> "จัดให้อยู่ตรงกลาง"
              </span>{' '}
              สำหรับการโทรที่เป็นธรรมชาติยิ่งขึ้น
            </p>
          </div>
          <div className="absolute -bottom-10">
            <img
              className="rounded-b-2xl"
              alt="Camera Feature"
              src="/assets/features/ipad/ipad-key-features-camera.jpg"
            />
          </div>
        </div>
        <div
          style={{ backgroundColor: '#fbfbfd' }}
          className="keyfeature-col keyfeature-col-span-4 overflow-hidden"
        >
          <div className="p-7 mt-5">
            <p className="text-xl text-center font-medium text-gray-500">
              <span className="text-black">
                Apple Pencil และ Smart Keyboard
              </span>{' '}
              ช่วยยกระดับการทำงานและ
              <br />
              ความคิดสร้างสรรค์ของคุณให้เหนือชั้นไปอีกขั้น²
            </p>
          </div>
          <div className="absolute bottom-0">
            <img
              className="rounded-b-2xl"
              alt="Accessories Feature"
              src="/assets/features/ipad/ipad-key-features-accessories.jpg"
            />
          </div>
        </div>
        <div
          style={{ background: 'linear-gradient(#00ce8b,#00b06d)' }}
          className="keyfeature-col keyfeature-col-span-2"
        >
          <div className="absolute top-28 left-10">
            <img
              alt="Battery Feature"
              src="/assets/features/ipad/ipad-key-features-battery.png"
            />
          </div>
          <div className="absolute bottom-5 p-10 pr-12">
            <p className="text-4xl font-medium text-white">
              แบตเตอรี่ที่ใช้งานได้ตลอดวัน ให้คุณทำทุกอย่างได้ต่อเนื่อง
            </p>
          </div>
        </div>
      </div>
      <p className="text-center text-lg mt-14">
        <span
          className="text-blue-600 hover:underline"
        >
          ดูเพิ่มเติมเกี่ยวกับ iPad
          <KeyboardArrowRightIcon sx={{fontSize:'18px'}}/>
        </span>
      </p>
    </div>
  );
};

export default IpadFeatures;
