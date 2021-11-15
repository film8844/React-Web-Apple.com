import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import GlobalNavBar from '../../components/GlobalNavBar';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import './home.css';

const Iphone13Pro = () => {
  return (
    <div className="pt-20 my-2 bg-iPhone13pro">
      <div className="text-center">
        <h2 className="text-5xl font-semibold">iPhone 13 Pro</h2>
        <p className="text-3xl mt-2">โปรสมชื่อ</p>
      </div>
      <div className="mt-5 text-center text-xl text-apple-link-blue">
        <span
          className="mr-4 hover:underline"
        >
          ดูเพิ่มเติม
          <KeyboardArrowRightIcon />
        </span>
        <Link to="/iphone13pro" className="hover:underline">
          ซื้อ
          <KeyboardArrowRightIcon />
        </Link>
      </div>
      <div>
        <img
          alt=""
          src="assets/home_images/hero_iphone13pro.jpg"
          className="hidden md:block mx-auto px-5 mt-2"
          style={{ maxWidth: '1024px' }}
        />
        <img
          alt=""
          src="assets/home_images/hero_iphone13pro_small.jpg"
          className="block md:hidden mx-auto px-5 mt-10"
          style={{ maxWidth: '300px' }}
        />
      </div>
    </div>
  );
};

const Iphone13 = () => {
  return (
    <div className="my-2 bg-iPhone13 overflow-hidden">
      <img
        alt=""
        src="assets/home_images/top_iPhone13_small.png"
        className="block md:hidden mx-auto px-5 mb-5"
        style={{ maxWidth: '300px' }}
      />
      <div className="text-center md:mt-20">
        <h2 className="text-5xl font-semibold text-white">iPhone 13 </h2>
        <p className="text-3xl mt-2 color-iPhone13">พลังพิเศษในมือคุณ</p>
      </div>
      <div className="mt-5 text-center text-xl" style={{ color: '#2997ff' }}>
        <span
          className="mr-4 hover:underline"
        >
          ดูเพิ่มเติม
          <KeyboardArrowRightIcon />
        </span>
        <Link className="hover:underline" to="/iphone13">
          ซื้อ
          <KeyboardArrowRightIcon />
        </Link>
      </div>
      <img
        alt=""
        src="assets/home_images/hero_iphone13.png"
        className="hidden md:block mx-auto px-5 mt-10"
        style={{ maxWidth: '1050px' }}
      />
      <img
        alt=""
        src="assets/home_images/bottom_iPhone13_small.png"
        className="block md:hidden mx-auto px-5 mt-5"
        style={{ maxWidth: '300px' }}
      />
    </div>
  );
};

const Watch = () => {
  return (
    <div className="pt-20 my-2 bg-iPhone13pro">
      <img
        alt=""
        className="mx-auto"
        src="assets/src_image/homepage/large/watch_logo_lte__sd64ksudvayy_largetall.png"
      />
      <div className="text-center mt-5">
        <p className="text-3xl mt-2">จัดเต็มแบบเต็มจอ</p>
      </div>
      <div className="mt-5 text-center text-xl text-apple-link-blue">
        <span
          className="mr-4 hover:underline"
        >
          ดูเพิ่มเติม
          <KeyboardArrowRightIcon />
        </span>
        <span
          className="hover:underline"
        >
          ซื้อ
          <KeyboardArrowRightIcon />
        </span>
      </div>
      <img
        alt=""
        src="assets/home_images/apple_watch.jpg"
        className="hidden md:block mx-auto px-5 mt-10"
        style={{ maxWidth: '550px' }}
      />
      <img
        alt=""
        src="assets/home_images/apple_watch.jpg"
        className="block md:hidden mx-auto px-5 mt-10"
        style={{ maxWidth: '300px' }}
      />
    </div>
  );
};

const IpadMini = () => {
  return (
    <div className="bg-gray">
      <div className="text-center mt-14">
        <img
          alt=""
          className=" mx-auto"
          style={{ maxWidth: '150px' }}
          src="assets/src_image/homepage/large/promo_logo_ipad_mini__n5nqff6gq8yu_large.png"
        />
        <p className="text-2xl mt-2">พลังยักษ์ใหญ่ในไซส์มินิ</p>
      </div>
      <div className="mt-2 text-center text-lg text-apple-link-blue">
        <span
          className="mr-4 hover:underline"
        >
          ดูเพิ่มเติม
          <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
        </span>
        <Link to="/ipadmini" className="hover:underline">
          ซื้อ
          <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
        </Link>
      </div>

      <img
        alt=""
        src="assets/src_image/homepage/medium/promo_ipad_mini_medium_2x.jpg"
        className="hidden md:block  mx-auto px-5 mt-10"
        style={{ maxHeight: '400px' }}
      />
      <img
        alt=""
        src="assets/src_image/homepage/medium/promo_ipad_mini_medium_2x.jpg"
        className="block md:hidden  mx-auto px-5 mt-10"
        style={{ maxHeight: '400px' }}
      />
    </div>
  );
};

const Airtag = () => {
  return (
    <div className="bg-gray">
      <div className="text-center mt-14">
        <h2 className="text-4xl font-semibold">Airtag</h2>
        <p className="text-2xl">ลืมไปเลยว่าเคยขี้ลืม</p>
      </div>
      <div className="mt-2 text-center text-lg text-apple-link-blue">
        <span
          className="mr-4 hover:underline"
        >
          ดูเพิ่มเติม
          <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
        </span>
        <span
          className="hover:underline"
        >
          ซื้อ
          <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
        </span>
      </div>
      <img
        alt=""
        src="assets/src_image/homepage/medium/promo_airtag_medium_2x.jpg"
        className="hidden md:block mx-auto px-5 mt-5"
        style={{ maxHeight: '400px' }}
      />
      <img
        alt=""
        src="assets/src_image/homepage/medium/promo_airtag_medium_2x.jpg"
        className="block md:hidden mx-auto px-5 mt-10"
        style={{ maxHeight: '300px' }}
      />
    </div>
  );
};

const IMac = () => {
  return (
    <div className="bg-gray overflow-hidden">
      <div className="text-center mt-14">
        <h2 className="text-4xl font-semibold">iMac</h2>
        <p className="text-2xl -mt-1">สวัสดี</p>
      </div>
      <div className="my-5 mt-2 text-center text-lg text-apple-link-blue">
        <span
          className="mr-4 hover:underline"
        >
          ดูเพิ่มเติม
          <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
        </span>
        <span
          className="hover:underline"
        >
          ซื้อ
          <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
        </span>
      </div>
      <img
        alt=""
        src="assets/home_images/hero_imac.png"
        className="hidden lg:block mx-auto px-5 mt-10"
        style={{ maxWidth: '600px' }}
      />
      <img
        alt=""
        src="assets/src_image/homepage/medium/promo_imac_medium_2x.jpg"
        className="block lg:hidden mx-auto px-5 mt-10"
        style={{ maxWidth: '300px' }}
      />
    </div>
  );
};

const Ipad = () => {
  return (
    <div className="bg-gray ">
      <img
        alt=""
        src="assets/src_image/homepage/medium/promo_ipad_medium_2x.jpg"
        className="hidden md:block mx-auto px-5 "
        style={{ maxHeight: '420px' }}
      />
      <img
        alt=""
        src="assets/src_image/homepage/medium/promo_ipad_medium_2x.jpg"
        className="block md:hidden mx-auto px-5 "
        style={{ maxHeight: '300px' }}
      />
      <div className="text-center mt-2">
        <p className="text-md">ใหม่</p>
        <h2 className="text-4xl font-semibold">iPad</h2>
        <p className="text-2xl ">ง่ายไปหมดทุกอย่าง</p>
      </div>
      <div className=" text-center mb-5 mt-2 text-lg text-apple-link-blue">
        <span
          className="mr-4 hover:underline"
        >
          ดูเพิ่มเติม
          <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
        </span>
        <Link to="/ipad" className="hover:underline">
          ซื้อ
          <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
        </Link>
      </div>
    </div>
  );
};

const Arcade = () => {
  return (
    <>
      <div
        className="hidden md:block"
        style={{
          height: '570px',
          backgroundImage: `url('assets/src_image/homepage/large/tile__cauwwcyyn9hy_large.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="text-center mt-14">
          <img
            alt=""
            className=" mx-auto"
            style={{ maxWidth: '150px' }}
            src="assets/src_image/homepage/large/logo__acade_large.png"
          />
          <p className="text-2xl mt-2">ได้เวลาสนุกของคอเกม</p>
        </div>
        <div className="mt-2 text-center text-lg text-apple-link-blue">
          <span
            className="mr-4 hover:underline"
          >
            ดูเพิ่มเติม
            <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
          </span>
          <span className="hover:underline">
            ลองใช้ฟรี*
            <ArrowForwardIcon
              className="transform -rotate-45"
              sx={{ fontSize: '18px' }}
            />
          </span>
        </div>
      </div>
      <div
        className="block md:hidden"
        style={{
          height: '500px',
          backgroundImage: `url('assets/src_image/homepage/small/tile__cauwwcyyn9hy_small.png')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#fbfbfd',
        }}
      >
        <div className="text-center mt-14">
          <img
            alt=""
            className=" mx-auto"
            style={{ maxWidth: '150px' }}
            src="assets/src_image/homepage/large/logo__acade_large.png"
          />
          <p className="text-2xl mt-2">ได้เวลาสนุกของคอเกม</p>
        </div>
        <div className="mt-2 text-center text-lg text-apple-link-blue">
          <span
            className="mr-4 hover:underline"
          >
            ดูเพิ่มเติม
            <KeyboardArrowRightIcon sx={{ fontSize: '18px' }} />
          </span>
          <span className="hover:underline">
            ลองใช้ฟรี*
            <ArrowForwardIcon
              className="transform -rotate-45"
              sx={{ fontSize: '18px' }}
            />
          </span>
        </div>
      </div>
    </>
  );
};

const AppleTV = () => {
  return (
    <>
      <div
        className="hidden md:block"
        style={{
          height: '570px',
          backgroundImage: `url('assets/src_image/homepage/large/promo_foundation_s1__fih0re3y8zu6_large.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="text-center mt-14">
          <img
            alt=""
            className=" mx-auto"
            style={{ maxWidth: '150px' }}
            src="assets/src_image/homepage/large/logo_tv+__cfvl40z2nzau_large.png"
          />
        </div>
        <img
          alt=""
          className=" mx-auto mt-80"
          src="assets/src_image/homepage/large/logo_foundation_s1__fpga2losku6i_large.png"
        />
        <div className="mt-16 text-center text-lg text-blue-500">
          <span
            className="mr-4 hover:underline"
          >
            สตรีมตอนแรกฟรี{' '}
            <ArrowDropDownCircleIcon className="transform -rotate-90" />
          </span>
        </div>
      </div>
      <div
        className="block md:hidden"
        style={{
          height: '500px',
          backgroundImage: `url('assets/src_image/homepage/small/promo_foundation_small.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#fbfbfd',
        }}
      >
        <div className="text-center mt-14">
          <img
            alt=""
            className=" mx-auto"
            style={{ maxWidth: '100px' }}
            src="assets/src_image/homepage/large/logo_tv+__cfvl40z2nzau_large.png"
          />
        </div>
        <img
          alt=""
          className=" mx-auto mt-60"
          src="assets/src_image/homepage/small/logo_foundation_s1_small.png"
        />
        <div className="mt-16 text-center text-md text-blue-500">
          <span
            className="mr-4 hover:underline"
          >
            สตรีมตอนแรกฟรี
            <ArrowDropDownCircleIcon className="transform -rotate-90" />
          </span>
        </div>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <GlobalNavBar />
      <div className="bg-gray-100">
        <div className="max-w-screen-lg m-auto">
          <p className="text-center text-sm px-5 py-3">
            <span className="text-apple-link-blue">เลือกซื้อสินค้าออนไลน์</span>{' '}
            แล้วรับความช่วยเหลือจาก Specialist พร้อมบริการจัดส่งฟรีและอีกมากมาย
          </p>
        </div>
      </div>

      <Iphone13Pro />
      <Iphone13 />
      <Watch />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 text-center md:m-3">
        <IMac />
        <IpadMini />
        <Airtag />
        <Ipad />
        <Arcade />
        <AppleTV />
      </div>

      <Footer />
    </>
  );
};

export default Home;
