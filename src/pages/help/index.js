import React from 'react';
import Footer from '../../components/Footer';
import GlobalNavBar from '../../components/GlobalNavBar';




const Help = () => {


    return (
        <>
            <GlobalNavBar />
            <div class="relative text-center">
                <img src="assets/src_image/help/psp-hero-banner-homepage-welcome.image.large_2x.jpg" className="object-cover" />
                <div class="relative md:inset-x-0 md:top-40 md:absolute">
                    <h1 className="text-3xl text-black font-medium md:text-white md:text-5xl mt-4">บริการช่วยเหลือของ Apple</h1>
                </div>
            </div>
            <div className='grid grid-cols-2 my-12 gap-y-8 md:grid-cols-3 justify-items-center xl:grid-cols-7 text-center xl:mx-96 xl:my-24 ' >
                {/* <div className="flex flex-row space-x-20 text-center"> */}
                <div className="w-16 flex flex-col space-y-4">
                    <img src='assets/src_image/help/homepage_productnav_iphone_family_2x.png' />
                    <a>iPhone</a>
                </div>
                <div className="w-16 flex flex-col space-y-4">
                    <img src='assets/src_image/help/homepage_productnav_imac_family_2x.png' />
                    <a>Mac</a>
                </div>
                <div className="w-16 flex flex-col space-y-4">
                    <img src='assets/src_image/help/homepage_productnav_ipad_family_2x.png' />
                    <a>iPad</a>
                </div>
                <div className="w-16 flex flex-col space-y-4">
                    <img src='assets/src_image/help/homepage_productnav_apple_watch_2x.png' />
                    <a>Watch</a>
                </div>
                <div className="w-16 flex flex-col space-y-4">
                    <img src='assets/src_image/help/homepage-productdrawer-airpods-dark_2x.png' />
                    <a>AirPods</a>
                </div>
                <div className="w-16 flex flex-col space-y-4">
                    <img src='assets/src_image/help/homepage_productdrawer_applemusic_2x.png' />
                    <a>Music</a>
                </div>
                <div className="w-16 flex flex-col space-y-4">
                    <img src='assets/src_image/help/homepage-productdrawer-appletv_2x.png' />
                    <a>Tv</a>
                </div>
                {/* </div> */}
            </div>
            <hr />
            <div class="grid grid-cols-1 my-12 text-center gap-20 xl:my-20 xl:mx-96 xl:grid-cols-3 xl:divide-x xl:gap-0" style={{ color: '#0070c9' }}>
                <div className="flex-1 ">
                    <img src='assets/src_image/help/promo-icon-homepage-password_2x.png' className='mx-auto mb-4 w-10' />
                    <a >ลืม Apple ID หรือรหัสผ่าน {'>'}</a>
                </div>
                <div className="flex-1 ">
                    <img src='assets/src_image/help/promo-icon-homepage-subscriptions_2x.png' className='mx-auto mb-4 w-10' />
                    <a>การเรียกเก็บเงินและการสมัครรับ {'>'}</a>
                </div>
                <div className="flex-1 ">
                    <img src='assets/src_image/help/promo-icon-find-my_2x.png' className='mx-auto mb-4 w-10' />
                    <a>ค้นหาของฉัน {'>'}</a>
                </div>
            </div>
            <hr />
            <div className="my-12">
                <h1 className="text-3xl text-black text-center font-medium">ค้นหาหัวข้อ</h1>

            </div>
            <hr />

            <div className="grid grid-cols-1 w-7/12 mx-auto my-12 xl:grid-cols-2">
                <div className="flex">
                    <img src="assets/src_image/help/featured-section-promo-ios15-ipados15_2x.jpg" className />
                </div>
                <div className="flex flex-col xl:pr-64">
                    <h1 className="text-3xl text-black  font-medium">อัพเดทเป็น iOS 15 และ iPadOS 15</h1>
                    <p className="text-xl mt-4 text-gray-600">คุณสมบัติใหม่ๆ ที่จะช่วยให้คุณใช้ iPhone และiPad สานสัมพันธ์กับผู้อื่น มีสมาธิจดจ่อกับงาน และทำสิ่งต่างๆ ได้มากกว่าเดิม</p>
                    <a className="text-xl mt-20" style={{ color: '#0070c9' }}>รับเวอร์ชั่นล่าสุด {'>'}</a>
                </div>
            </div>
            <hr />



            <Footer />
        </>
    );
};

export default Help;