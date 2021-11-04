import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

const WhatsInTheBox = () => {
  return (
    <div className="mb-20">
      <h2 className="text-4xl font-semibold text-center mt-20">
        สิ่งที่มีมาให้ในกล่อง
      </h2>
      <div className="mt-14 hidden lg:block">
        <div
          className="grid grid-cols-3"
          style={{
            backgroundColor: '#fafafa',
            maxHeight: '330px',
          }}
        >
          <div>
            <img
              src="/assets/whatsInTheBox/ipad.jpg"
              className="mx-auto"
              style={{ height: '330px' }}
            />
          </div>
          <div>
            <img
              src="/assets/whatsInTheBox/lightning-cable.jpg"
              className="mx-auto"
              style={{ height: '330px' }}
            />
          </div>
          <div>
            <img
              src="/assets/whatsInTheBox/20w-adapter.jpg"
              className="mx-auto"
              style={{ height: '330px' }}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 mt-5">
          <div className="text-center">
            <span>iPad</span>
          </div>
          <div className="text-center">
            <span>สาย USB-C เป็น ​Lightning</span>
          </div>
          <div className="text-center">
            <span>อะแดปเตอร์แปลงไฟ USB-C ขนาด 20 วัตต์</span>
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
                  src="/assets/whatsInTheBox/ipad.jpg"
                  className="mx-auto"
                  style={{ height: '330px' }}
                />
              </div>
              <div className="text-center mt-5">
                <span>iPad</span>
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
                />
              </div>
              <div className="text-center mt-5">
                <span>สาย USB-C เป็น ​Lightning</span>
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
                  src="/assets/whatsInTheBox/20w-adapter.jpg"
                  className="mx-auto"
                  style={{ height: '330px' }}
                />
              </div>
              <div className="text-center mt-5">
                <span>อะแดปเตอร์แปลงไฟ USB-C ขนาด 20 วัตต์</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default WhatsInTheBox;
