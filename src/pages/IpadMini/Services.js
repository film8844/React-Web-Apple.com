import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const IpadMiniServices = () => {
  return (
    <div className="my-20">
      <h2 className="text-4xl font-semibold text-center">
        มีอะไรดีๆ ให้ค้นพบอีกมากมาย
      </h2>
      <span className="block mt-5 text-lg text-center">
        ความบันเทิง เกมมากมาย ทั้งหมดนี้บน iPad ของคุณ
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-12">
        <div style={{ backgroundColor: '#1d1d1f' }} className="rounded-3xl p-5">
          <img
            alt="Apple TV"
            className="mx-auto my-5"
            src="/assets/productServices/ipad/ipad-services-tv.png"
          />
          <div>
            <img
              alt="Apple TV Icon"
              className="mx-auto my-5"
              src="/assets/productServices/ipad/ipad-services-tv-icon.png"
            />
            <p className=" text-2xl text-center text-white font-medium">
              Apple TV+
            </p>
            <p
              style={{ maxWidth: '280px' }}
              className="mx-auto text-white text-center"
            >
              รับชมรายการและภาพยนตร์ Apple Original
              ทั้งหมดได้จากทุกอุปกรณ์ของคุณ<sup>†</sup>
            </p>
            <p className="text-center my-5" style={{ color: '#2997ff' }}>
              ดูเพิ่มเติม <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
            </p>
          </div>
        </div>
        <div style={{ backgroundColor: '#1d1d1f' }} className="rounded-3xl p-5">
          <img
            alt="Apple TV"
            className="mx-auto my-5"
            src="/assets/productServices/ipad/ipad-services-arcade.png"
          />
          <div>
            <img
              alt="Apple TV Icon"
              className="mx-auto my-5"
              src="/assets/productServices/ipad/ipad-services-arcade-icon.png"
            />
            <p className=" text-2xl text-center text-white font-medium">
              Apple Arcade
            </p>
            <p
              style={{ maxWidth: '280px' }}
              className="mx-auto text-white text-center"
            >
              เพลิดเพลินกับเกม Arcade Originals ที่สร้างสรรค์ขึ้นใหม่หมดโดย
              Apple ได้ไม่จำกัด แบบไม่มีโฆษณา
              <sup>†</sup>
            </p>
            <p className="text-center my-5" style={{ color: '#2997ff' }}>
              ดูเพิ่มเติม <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IpadMiniServices;
