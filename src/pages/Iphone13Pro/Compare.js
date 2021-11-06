import React from 'react';

const Iphone13ProCompare = () => {
  return (
    <div className="my-20">
      <h2 className="text-4xl font-semibold text-center">
        เปรียบเทียบ iPhone รุ่นต่างๆ
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 text-center mt-12">
        <div className="p-3 border-r">
          <div>
            <img
              alt="iPhone 13 Pro"
              className="mx-auto mb-5"
              src="/assets/compareProduct/iphone/iphone-compare-iphone-13-pro.jpg"
            />
            <p className="text-sm text-red-600">ใหม่</p>
            <h6 className="text-2xl font-medium">iPhone 13 Pro</h6>
            <p className="mt-2 text-lg font-medium">ที่สุดของ iPhone</p>
            <p className="mt-1 text-lg font-medium">เริ่มต้นที่ ฿38,900</p>
            <img
              alt="iPhone 13 Pro"
              className="mx-auto mt-5"
              src="/assets/compareProduct/iphone/iphone-compare-iphone-13-pro-swatch.jpg"
            />
          </div>
          <div className="my-10">
            <p className="text-2xl font-medium">6.7″ หรือ 6.1″</p>
            <p className="mt-1 font-semibold">
              จอภาพ OLED ทั้งหน้าจอ¹ พร้อม ProMotion
            </p>
          </div>
          <div className="my-10">
            <img
              alt="5G"
              className="mx-auto"
              src="/assets/compareProduct/iphone/iphone-compare-icon-5g.jpg"
            />
            <p className="mt-4 font-semibold">5G ที่เร็วสุดแรง³</p>
          </div>
          <div className="my-10">
            <img
              alt="5G"
              className="mx-auto"
              src="/assets/compareProduct/iphone/iphone-compare-icon-a15-chip.jpg"
            />
            <p className="mt-4 font-semibold">ชิพ A15 Bionic</p>
            <p className="font-semibold text-gray-400">
              ชิปที่เร็วที่สุดในสมาร์ทโฟน
            </p>
          </div>
          <div className="my-10">
            <img
              alt="iPhone 13 Pro Camera"
              className="mx-auto"
              src="/assets/compareProduct/iphone/iphone-compare-icon-iphone-13-pro-camera.jpg"
            />
            <p className="mt-4 font-semibold">ระบบกล้องระดับโปร</p>
            <p className="font-semibold text-gray-400">
              เทเลโฟโต้ ไวด์ และอัลตร้าไวด์
            </p>
          </div>
          <div className="my-10">
            <img
              alt="Battery"
              className="mx-auto"
              src="/assets/compareProduct/iphone/iphone-compare-icon-battery.jpg"
            />
            <p className="mt-4 font-semibold">
              เล่นวิดีโอ นานสูงสุด 28 ชั่วโมง⁴
            </p>
          </div>
          <div className="mt-10">
            <img
              alt="MagSafe"
              className="mx-auto"
              style={{width:'23px'}}
              src="/assets/compareProduct/iphone/iphone-compare-icon-iphone-13-pro-magsafe.jpg"
            />
            <p className="mt-4 font-semibold">สามารถใช้งานได้กับ</p>
            <p className="font-semibold">อุปกรณ์เสริม MagSafe</p>
          </div>
        </div>

        <div className="p-3 md:border-r">
          <div>
            <img
              alt="iPhone 13"
              className="mx-auto mb-5"
              src="/assets/compareProduct/iphone/iphone-compare-iphone-13.jpg"
            />
            <p className="text-sm text-red-600">ใหม่</p>
            <h6 className="text-2xl font-medium">iPhone 13</h6>
            <p className="mt-2 text-lg font-medium">ขุมพลังครบเครื่อง</p>
            <p className="mt-1 text-lg font-medium">เริ่มต้นที่ ฿25,900</p>
            <img
              alt="iPhone 13 Pro"
              className="mx-auto mt-5"
              src="/assets/compareProduct/iphone/iphone-compare-iphone-13-swatch.jpg"
            />
          </div>
          <div className="my-10">
            <p className="text-2xl font-medium">6.1″ หรือ 5.4″</p>
            <p className="mt-1 font-semibold">จอภาพ OLED ทั้งหน้าจอ¹</p>
          </div>
          <div className="my-10">
            <img
              alt="5G"
              className="mx-auto"
              src="/assets/compareProduct/iphone/iphone-compare-icon-5g.jpg"
            />
            <p className="mt-4 font-semibold">5G ที่เร็วสุดแรง³</p>
          </div>
          <div className="my-10">
            <img
              alt="Chip"
              className="mx-auto"
              src="/assets/compareProduct/iphone/iphone-compare-icon-a15-chip.jpg"
            />
            <p className="mt-4 font-semibold">ชิพ A15 Bionic</p>
            <p className="font-semibold text-gray-400">
              ชิปที่เร็วที่สุดในสมาร์ทโฟน
            </p>
          </div>
          <div className="my-10">
            <img
              alt="Camera"
              className="mx-auto"
              src="/assets/compareProduct/iphone/iphone-compare-icon-iphone-13-camera.jpg"
            />
            <p className="mt-4 font-semibold">ระบบกล้องคู่สุดล้ำ</p>
            <p className="font-semibold text-gray-400">ไวด์ และอัลตร้าไวด์</p>
          </div>
          <div className="my-10">
            <img
              alt="Battery"
              className="mx-auto"
              src="/assets/compareProduct/iphone/iphone-compare-icon-battery.jpg"
            />
            <p className="mt-4 font-semibold">
              เล่นวิดีโอ นานสูงสุด 19 ชั่วโมง⁴
            </p>
          </div>
          <div className="mt-10">
            <img
              alt="MagSafe"
              className="mx-auto"
              style={{width:'23px'}}
              src="/assets/compareProduct/iphone/iphone-compare-icon-iphone-13-magsafe.jpg"
            />
            <p className="mt-4 font-semibold">สามารถใช้งานได้กับ</p>
            <p className="font-semibold">อุปกรณ์เสริม MagSafe</p>
          </div>
        </div>

        <div className="p-3">
          <div>
            <img
              alt="iPhone 12"
              className="mx-auto mb-5"
              src="/assets/compareProduct/iphone/iphone-compare-iphone-12.jpg"
            />
            <p className="text-sm text-white">-</p>
            <h6 className="text-2xl font-medium">iPhone 12</h6>
            <p className="mt-2 text-lg font-medium">น่าทึ่งอย่างที่เคย</p>
            <p className="mt-1 text-lg font-medium">เริ่มต้นที่ ฿21,900</p>
            <img
              alt="iPhone 13 Pro"
              className="mx-auto mt-5"
              src="/assets/compareProduct/iphone/iphone-compare-iphone-12-swatch.jpg"
            />
          </div>
          <div className="my-10">
            <p className="text-2xl font-medium">6.1″ หรือ 5.4″</p>
            <p className="mt-1 font-semibold">จอภาพ OLED ทั้งหน้าจอ¹</p>
          </div>
          <div className="my-10">
            <img
              alt="5G"
              className="mx-auto"
              src="/assets/compareProduct/iphone/iphone-compare-icon-5g.jpg"
            />
            <p className="mt-4 font-semibold">5G ที่เร็วสุดแรง³</p>
          </div>
          <div className="my-10">
            <img
              alt="Chip"
              className="mx-auto"
              src="/assets/compareProduct/iphone/iphone-compare-icon-a14-chip.jpg"
            />
            <p className="mt-4 font-semibold">ชิพ A14 Bionic</p>
            <p className="font-semibold text-white">-</p>
          </div>
          <div className="my-10">
            <img
              alt="Camera"
              className="mx-auto"
              src="/assets/compareProduct/iphone/iphone-compare-icon-iphone-12-camera.jpg"
            />
            <p className="mt-4 font-semibold">ระบบกล้องคู่</p>
            <p className="font-semibold text-gray-400">ไวด์ และอัลตร้าไวด์</p>
          </div>
          <div className="my-10">
            <img
              alt="Battery"
              className="mx-auto"
              src="/assets/compareProduct/iphone/iphone-compare-icon-battery.jpg"
            />
            <p className="mt-4 font-semibold">
              เล่นวิดีโอ นานสูงสุด 17 ชั่วโมง⁴
            </p>
          </div>
          <div className="mt-10">
            <img
              alt="MagSafe"
              className="mx-auto"
              style={{width:'23px'}}
              src="/assets/compareProduct/iphone/iphone-compare-icon-iphone-12-magsafe.jpg"
            />
            <p className="mt-4 font-semibold">สามารถใช้งานได้กับ</p>
            <p className="font-semibold">อุปกรณ์เสริม MagSafe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iphone13ProCompare;
