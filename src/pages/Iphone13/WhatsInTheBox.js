import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

const Iphone13WITB = () => {
  return (
    <div className="mb-20">
      <h2 className="text-4xl font-semibold text-center mt-20">
        สิ่งที่มีมาให้ในกล่อง
      </h2>
      <div className="mt-14 hidden lg:block">
        <div
          className="grid grid-cols-2"
          style={{
            backgroundColor: '#fafafa',
            maxHeight: '330px',
          }}
        >
          <div>
            <img
              src="/assets/whatsInTheBox/iphone13.jpg"
              className="mx-auto"
              style={{ height: '330px' }}
              alt="WITB iPhone 13"
            />
          </div>
          <div>
            <img
              src="/assets/whatsInTheBox/lightning-cable.jpg"
              className="mx-auto"
              style={{ height: '330px' }}
              alt="WITB Lightning Cable"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 mt-5">
          <div className="text-center">
            <span>iPhone</span>
          </div>
          <div className="text-center">
            <span>สาย USB-C เป็น ​Lightning</span>
          </div>
        </div>
      </div>
      <div className="mt-14 block lg:hidden">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <div>
              <div
                style={{
                  backgroundColor: '#fafafa',
                  maxHeight: '330px',
                }}
              >
                <img
                  src="/assets/whatsInTheBox/iphone13.jpg"
                  className="mx-auto"
                  style={{ height: '330px' }}
                  alt="WITB iPhone 13"
                />
              </div>
              <div className="text-center mt-5">
                <span>iPhone</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div
                style={{
                  backgroundColor: '#fafafa',
                  maxHeight: '330px',
                }}
              >
                <img
                  src="/assets/whatsInTheBox/lightning-cable.jpg"
                  className="mx-auto"
                  style={{ height: '330px' }}
                  alt="WITB Lightning Cable"
                />
              </div>
              <div className="text-center mt-5">
                <span>สาย USB-C เป็น ​Lightning</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <p className="text-sm text-center mt-10 text-gray-600">
        iPhone 13 และ iPhone 13 mini ไม่มีอะแดปเตอร์แปลงไฟหรือ EarPods ให้มาด้วย{' '}
        <span className="text-apple-link-blue">
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

export default Iphone13WITB;
