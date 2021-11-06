import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import GlobalNavBar from '../../components/GlobalNavBar';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './home.css';

const Iphone13Pro = () => {
  return (
    <div className="pt-20 my-2 bg-iPhone13pro">
      <div className="text-center">
        <h2 className="text-5xl font-semibold">iPhone 13 Pro</h2>
        <p className="text-3xl mt-2">โปรสมชื่อ</p>
      </div>
      <div className="mt-5 text-center text-xl text-blue-600">
        <a
          className="mr-4 hover:underline"
          href="https://www.apple.com/th/iphone-13-pro/"
        >
          ดูเพิ่มเติม
          <KeyboardArrowRightIcon />
        </a>
        <Link to="/iphone13pro" className="hover:underline">
          ซื้อ
          <KeyboardArrowRightIcon />
        </Link>
      </div>
      <img
        src="/assets/home_images/hero_iphone13pro.jpg"
        className="hidden md:block mx-auto px-5 mt-10"
        style={{ maxWidth: '600px' }}
      />
      <img
        src="/assets/home_images/hero_iphone13pro_small.jpg"
        className="block md:hidden mx-auto px-5 mt-10"
        style={{ maxWidth: '300px' }}
      />
    </div>
  );
};

const Iphone13 = () => {
  return (
    <div className="my-2 bg-iPhone13 overflow-hidden">
      <img
        src="/assets/home_images/top_iPhone13_small.png"
        className="block md:hidden mx-auto px-5 mb-5"
        style={{ maxWidth: '300px' }}
      />
      <div className="text-center md:mt-20">
        <h2 className="text-5xl font-bold text-white">iPhone 13 </h2>
        <p className="text-3xl mt-2 color-iPhone13">พลังพิเศษในมือคุณ</p>
      </div>
      <div className="mt-5 text-center text-xl text-blue-600">
        <a className="mr-4">ดูเพิ่มเติม</a>
        <Link to="/iphone13">ซื้อ{'>'}</Link>
      </div>
      <img
        src="/assets/home_images/hero_iphone13.png"
        className="hidden md:block mx-auto px-5 mt-10"
        style={{ maxWidth: '1050px' }}
      />
      <img
        src="/assets/home_images/bottom_iPhone13_small.png"
        className="block md:hidden mx-auto px-5 mt-5"
        style={{ maxWidth: '300px' }}
      />
    </div>
  );
};

const Watch = () => {
  return (
    <div className="pt-20 my-2 bg-iPhone13pro">

      <img className="mx-auto" src="assets/src_image/homepage/large/watch_logo_lte__sd64ksudvayy_largetall.png" />
      <div className="text-center mt-5">
        <p className="text-3xl mt-2">จัดเต็มแบบเต็มจอ</p>
      </div>
      <div className="mt-5 text-center text-xl text-blue-600">
        <a className="mr-4">ดูเพิ่มเติม</a>
        <a>ซื้อ</a>
      </div>
      <img
        src="/assets/home_images/apple_watch.jpg"
        className="hidden md:block mx-auto px-5 mt-10"
        style={{ maxWidth: '550px' }}
      />
      <img
        src="/assets/home_images/apple_watch.jpg"
        className="block md:hidden mx-auto px-5 mt-10"
        style={{ maxWidth: '300px' }}
      />
    </div>
  );
};

const IpadMini = () => {
  return (
    <div className="bg-gray">

      <div className="text-center mt-10">

        <img className=" mx-auto" style={{ maxWidth: '150px' }} src="assets/src_image/homepage/large/promo_logo_ipad_mini__n5nqff6gq8yu_large.png"></img>
        <p className="text-2xl mt-2">พลังยักษ์ใหญ่ในไซส์มินิ</p>
      </div>
      <div className="mt-5 text-center text-xl text-blue-600">
        <a className="mr-4">ดูเพิ่มเติม{'>'}</a>
        <Link to="/iphone13pro">ซื้อ{'>'}</Link>
      </div>


      <img
        src="/assets/src_image/homepage/medium/promo_ipad_mini_medium_2x.jpg"
        className="hidden md:block  mx-auto px-5 mt-10"
        style={{ maxHeight: '400px' }}
      />
      <img
        src="/assets/src_image/homepage/medium/promo_ipad_mini_medium_2x.jpg"
        className="block md:hidden  mx-auto px-5 mt-10"
        style={{ maxHeight: '400px' }}
      />
    </div>
  );
};

const Airtag = () => {
  return (
    <div className="bg-gray">
      <div className="text-center mt-10">
        <h2 className="text-4xl font-semibold">Airtag</h2>
        <p className="text-2xl mt-2">ลืมไปเลยว่าเคยขี้ลืม</p>
      </div>
      <div className="mt-5 text-center text-xl text-blue-600">
        <a className="mr-4">ดูเพิ่มเติม{'>'}</a>
        <Link to="/iphone13pro">ซื้อ{'>'}</Link>
      </div>
      <img
        src="/assets/src_image/homepage/medium/promo_airtag_medium_2x.jpg"
        className="hidden md:block mx-auto px-5 mt-10"
        style={{ maxHeight: '400px' }}
      />
      <img
        src="/assets/src_image/homepage/medium/promo_airtag_medium_2x.jpg"
        className="block md:hidden mx-auto px-5 mt-10"
        style={{ maxHeight: '300px' }}
      />
    </div>
  );
};

const IMac = () => {
  return (
    <div className="bg-gray overflow-hidden">
      <div className="text-center mt-10">
        <h2 className="text-4xl font-semibold">iMac</h2>
        <p className="text-2xl mt-2">สวัสดี</p>
      </div>
      <div className="my-5 text-center text-1xl text-blue-600">
        <a
          className="mr-4 hover:underline"
          href="https://www.apple.com/th/iphone-13-pro/"
        >
          ดูเพิ่มเติม
          <KeyboardArrowRightIcon />
        </a>
        <Link to="/iphone13pro" className="hover:underline">
          ซื้อ
          <KeyboardArrowRightIcon />
        </Link>
      </div>
      <img
        src="/assets/home_images/hero_imac.png"
        className="hidden lg:block mx-auto px-5 mt-10"
        style={{ maxWidth: '600px' }}
      />
      <img
        src="/assets/src_image/homepage/medium/promo_imac_medium_2x.jpg"
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
        src="/assets/src_image/homepage/medium/promo_ipad_medium_2x.jpg"
        className="hidden md:block mx-auto px-5 "
        style={{ maxHeight: '420px' }}
      />
      <img
        src="/assets/src_image/homepage/medium/promo_ipad_medium_2x.jpg"
        className="block md:hidden mx-auto px-5 "
        style={{ maxHeight: '300px' }}
      />
      <div className="text-center mt-10">
        <h2 className="text-4xl font-semibold">iPad</h2>
        <p className="text-2xl mt-2">ง่ายไปหมดทุกอย่าง</p>
      </div>
      <div className="mt-5 text-center text-xl text-blue-600">
        <a className="mr-4">ดูเพิ่มเติม{'>'}</a>
        <Link to="/iphone13pro">ซื้อ{'>'}</Link>
      </div>
    </div>
  );
};

const Arcade1 = () => {
  return (
  <div className="hidden md:block" style={{ height: '550px', backgroundImage: `url('assets/src_image/homepage/large/tile__cauwwcyyn9hy_large.jpg')`, backgroundPosition: 'center', backgroundSize: 'cover' ,backgroundRepeat: 'no-repeat'}}>
  <div className="text-center mt-10">
    <img className=" mx-auto" style={{ maxWidth: '150px' }} src="assets/src_image/homepage/large/logo__acade_large.png"></img>
    <p className="text-2xl mt-2">ได้เวลาสนุกของคอเกม</p>
  </div>
  <div className="mt-5 text-center text-xl text-blue-600">
    <a className="mr-4">ดูเพิ่มเติม{'>'}</a>
    <Link to="/iphone13pro">ลองใช้ฟรี*{'>'}</Link>
  </div>
</div>)
}

const Arcade2 = () => {
  return (
  <div className="block md:hidden" style={{ height: '500px', backgroundImage: `url('assets/src_image/homepage/small/tile__cauwwcyyn9hy_small.png')`, backgroundPosition: 'center', backgroundSize: 'cover' ,backgroundRepeat: 'no-repeat',backgroundColor: '#fbfbfd'}}>
  <div className="text-center mt-10">
    <img className=" mx-auto" style={{ maxWidth: '150px' }} src="assets/src_image/homepage/large/logo__acade_large.png"></img>
    <p className="text-2xl mt-2">ได้เวลาสนุกของคอเกม</p>
  </div>
  <div className="mt-5 text-center text-xl text-blue-600">
    <a className="mr-4">ดูเพิ่มเติม{'>'}</a>
    <Link to="/iphone13pro">ลองใช้ฟรี*{'>'}</Link>
  </div>
</div>)
}

const Home = () => {
  return (
    <>
      <GlobalNavBar />
      <div className="bg-gray-100">
        <div className="max-w-screen-lg m-auto">
          <p className="text-center text-sm px-5 py-3">
            <span className="text-blue-600">เลือกซื้อสินค้าออนไลน์</span>{' '}
            แล้วรับความช่วยเหลือจาก Specialist พร้อมบริการจัดส่งฟรีและอีกมากมาย
          </p>
        </div>
      </div>
      <Iphone13Pro />
      <Iphone13 />

      <Watch />

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 text-center m-2">
        <IMac />
        <IpadMini />
        <Airtag />
        <Ipad />
        <Arcade1 />
        <Arcade2 />
      </div>

      <Footer />
    </>
  );
};

export default Home;
