import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const NewArrivals = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-5 py-14">
      <div
        className="hidden md:block"
        style={{
          backgroundImage:
            'url("/assets/bag_images/apple-new-arrivals-checkout.jfif")',
          height: '400px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="h-full flex flex-col items-center justify-center text-center"
          style={{ maxWidth: '500px' }}
        >
          <div>
            <h6 className="text-3xl font-medium">สินค้าเข้าใหม่</h6>
            <p className="text-lg">ลองดูอุปกรณ์เสริมล่าสุด</p>
            <p className="text-apple-link-blue hover:underline">
              เลือกซื้อ
              <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
            </p>
          </div>
        </div>
      </div>
      <div
        className="md:hidden"
        style={{
          backgroundImage:
            'url("/assets/bag_images/apple-new-arrivals-checkout-sm.jfif")',
          height: '400px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="pt-10 flex flex-col items-center justify-center text-center">
          <div>
            <h6 className="text-3xl font-medium">สินค้าเข้าใหม่</h6>
            <p className="text-lg">ลองดูอุปกรณ์เสริมล่าสุด</p>
            <p className="text-apple-link-blue hover:underline">
              เลือกซื้อ
              <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
