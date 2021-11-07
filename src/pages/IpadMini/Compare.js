import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const IpadCompare = () => {
  return (
    <div className="my-20">
      <h2 className="text-4xl font-semibold text-center">
        เปรียบเทียบ iPad รุ่นต่างๆ
      </h2>
      <a
        className="block mt-5 text-lg text-center text-blue-600 hover:underline cursor-pointer"
        href="https://www.apple.com/th/ipad/compare/"
      >
        ดูว่า iPad รุ่นไหนที่ใช่สำหรับคุณ
        <KeyboardArrowRightIcon sx={{fontSize:'18px'}}/>
      </a>
      <div className="grid grid-cols-2 md:grid-cols-4 text-center mt-12">
        <div className="p-3">
          <div>
            <img
              alt="iPad Pro"
              className="mx-auto mb-5"
              src="/assets/compareProduct/ipad/ipad-pro-compare.jpg"
            />
            <p className="text-sm text-white">-</p>
            <h6 className="text-2xl font-semibold">iPad Pro</h6>
            <p className="mt-2 text-sm mx-auto" style={{ maxWidth: '80%' }}>
              ที่สุดแห่งประสบการณ์ของ iPad
            </p>
            <p className="mt-1 text-xs">เริ่มต้นที่ ฿27,900</p>
            <img
              alt="Swatch"
              className="mx-auto mt-5"
              src="/assets/compareProduct/ipad/ipad-compare-ipadpro-swatch.jpg"
            />
          </div>
          <div className="mt-5 mb-10">
            <p className="text-2xl font-semibold">12.9" หรือ 11"</p>
            <p className="mt-1 text-xs">
              จอภาพ Liquid Retina XDR
              <br />
              จอภาพ Liquid Retina
            </p>
          </div>
          <div className="my-10">
            <img
              alt="Chip"
              className="mx-auto"
              src="/assets/compareProduct/ipad/ipad-compare-icon-m1.jpg"
            />
            <p className="mt-2 text-xs">ชิป M1</p>
          </div>
          <div className="my-10">
            <p className="mb-10 text-xs font-semibold">ใช้งานได้กับ:</p>
            <img
              alt="Pencil"
              className="mx-auto"
              src="/assets/compareProduct/ipad/ipad-compare-icon-pencil.jpg"
            />
            <p className="mt-2 text-xs">Apple Pencil (รุ่นที่ 2)</p>
          </div>
          <div className="my-10">
            <img
              alt="Keyboard"
              className="mx-auto"
              src="/assets/compareProduct/ipad/ipad-compare-icon-magic-keyboard.jpg"
            />
            <p className="mt-2 text-xs">
              Magic Keyboard
              <br />
              Smart Keyboard Folio
            </p>
          </div>
        </div>

        <div className="p-3">
          <div>
            <img
              alt="iPad Air"
              className="mx-auto mb-5"
              src="/assets/compareProduct/ipad/ipad-air-compare.jpg"
            />
            <p className="text-sm text-white">-</p>
            <h6 className="text-2xl font-semibold">iPad Air</h6>
            <p className="mt-2 text-sm mx-auto" style={{ maxWidth: '80%' }}>
              ทั้งทรงพลัง ทั้งสดใส ทั้งน่ามหัศจรรย์
            </p>
            <p className="mt-1 text-xs">เริ่มต้นที่ ฿19,900</p>
            <img
              alt="Swatch"
              className="mx-auto mt-5"
              src="/assets/compareProduct/ipad/ipad-compare-ipadair-swatch.jpg"
            />
          </div>
          <div className="mt-5 mb-10">
            <p className="text-2xl font-semibold">10.9"</p>
            <p className="mt-1 text-xs">จอภาพ Liquid Retina</p>
          </div>
          <div className="my-10">
            <img
              alt="Chip"
              className="mx-auto"
              src="/assets/compareProduct/ipad/ipad-compare-icon-a14.jpg"
            />
            <p className="mt-2 text-xs">
              ชิป A14 Bionic
              <br />
              พร้อม Neural Engine
            </p>
          </div>
          <div className="my-10">
            <p className="mb-10 text-xs font-semibold">ใช้งานได้กับ:</p>
            <img
              alt="Pencil"
              className="mx-auto"
              src="/assets/compareProduct/ipad/ipad-compare-icon-pencil.jpg"
            />
            <p className="mt-2 text-xs">Apple Pencil (รุ่นที่ 2)</p>
          </div>
          <div className="my-10">
            <img
              alt="Keyboard"
              className="mx-auto"
              src="/assets/compareProduct/ipad/ipad-compare-icon-magic-keyboard.jpg"
            />
            <p className="mt-2 text-xs">
              Magic Keyboard
              <br />
              Smart Keyboard Folio
            </p>
          </div>
        </div>

        <div className="p-3">
          <div>
            <img
              alt="iPad"
              className="mx-auto mb-5"
              src="/assets/compareProduct/ipad/ipad-compare.jpg"
            />
            <p className="text-sm text-red-600">ใหม่</p>
            <h6 className="text-2xl font-semibold">iPad</h6>
            <p className="mt-2 text-sm mx-auto" style={{ maxWidth: '80%' }}>
              ความสามารถเกินคาด ในราคาคาดไม่ถึง
            </p>
            <p className="mt-1 text-xs">เริ่มต้นที่ ฿11,400</p>
            <img
              alt="Swatch"
              className="mx-auto mt-5"
              src="/assets/compareProduct/ipad/ipad-compare-ipad-swatch.jpg"
            />
          </div>
          <div className="mt-5 mb-10">
            <p className="text-2xl font-semibold">10.2"</p>
            <p className="mt-1 text-xs">
              จอภาพ Retina พร้อมการแสดงผล
              <br />
              แบบ True Tone
            </p>
          </div>
          <div className="my-10">
            <img
              alt="Chip"
              className="mx-auto"
              src="/assets/compareProduct/ipad/ipad-compare-icon-a13.jpg"
            />
            <p className="mt-2 text-xs">
              ชิป A13 Bionic
              <br />
              พร้อม Neural Engine
            </p>
          </div>
          <div className="my-10">
            <p className="mb-10 text-xs font-semibold">ใช้งานได้กับ:</p>
            <img
              alt="Pencil"
              className="mx-auto"
              src="/assets/compareProduct/ipad/ipad-compare-icon-pencil.jpg"
            />
            <p className="mt-2 text-xs">Apple Pencil (รุ่นที่ 1)</p>
          </div>
          <div className="my-10">
            <img
              alt="Keyboard"
              className="mx-auto"
              src="/assets/compareProduct/ipad/ipad-compare-icon-smart-keyboard.jpg"
            />
            <p className="mt-2 text-xs">Smart Keyboard</p>
          </div>
        </div>

        <div className="p-3">
          <div>
            <img
              alt="iPad Pro"
              className="mx-auto mb-5"
              src="/assets/compareProduct/ipad/ipad-pro-compare.jpg"
            />
            <p className="text-sm text-red-600">ใหม่</p>
            <h6 className="text-2xl font-semibold">iPad Pro</h6>
            <p className="mt-2 text-sm mx-auto">
              พลังยักษ์ใหญ่
              <br />
              ในไซส์มินิ
            </p>
            <p className="mt-1 text-xs">เริ่มต้นที่ ฿17,900</p>
            <img
              alt="Swatch"
              className="mx-auto mt-5"
              src="/assets/compareProduct/ipad/ipad-compare-ipadmini-swatch.jpg"
            />
          </div>
          <div className="mt-5 mb-10">
            <p className="text-2xl font-semibold">8.3"</p>
            <p className="mt-1 text-xs">จอภาพ Liquid Retina</p>
          </div>
          <div className="my-10">
            <img
              alt="Chip"
              className="mx-auto"
              src="/assets/compareProduct/ipad/ipad-compare-icon-a15.jpg"
            />
            <p className="mt-2 text-xs">
              ชิป A15 Bionic
              <br />
              พร้อม Neural Engine
            </p>
          </div>
          <div className="my-10">
            <p className="mb-10 text-xs font-semibold">ใช้งานได้กับ:</p>
            <img
              alt="Pencil"
              className="mx-auto"
              src="/assets/compareProduct/ipad/ipad-compare-icon-pencil.jpg"
            />
            <p className="mt-2 text-xs">Apple Pencil (รุ่นที่ 2)</p>
          </div>
          <div className="my-10">
            <img
              alt="Keyboard"
              className="mx-auto"
              src="/assets/compareProduct/ipad/ipad-compare-icon-keyboard.jpg"
            />
            <p className="mt-2 text-xs">คีย์บอร์ด Bluetooth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IpadCompare;
