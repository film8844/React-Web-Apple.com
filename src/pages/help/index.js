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
            <div className="my-12 grid grid-cols-1 justify-items-center text-center">
                <div>
                    <h1 className="text-5xl text-black font-medium my-4">ค้นหาหัวข้อ</h1>
                    <div class="container flex mx-auto mt-4">
                        <div class="flex border-2 rounded">
                            <button class="flex items-center justify-center px-4 ">
                                <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                                    </path>
                                </svg>
                            </button>
                            <input type="text" class="px-4 py-2" style={{ width: "50vw" }} placeholder="ค้นหาบริการช่วยเหลือ" />
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div className="grid grid-cols-1  w-7/12 mx-auto my-12 xl:grid-cols-2 ">
                <div className="flex">
                    <img src="assets/src_image/help/featured-section-promo-ios15-ipados15_2x.jpg" className="object-scale-down " />
                </div>
                <div className="flex flex-col mt-4 text-center xl:pr-64 xl:text-left">
                    <h1 className="text-3xl text-black  font-medium">อัพเดทเป็น iOS 15 และ iPadOS 15</h1>
                    <p className="text-xl mt-4 text-gray-600">คุณสมบัติใหม่ๆ ที่จะช่วยให้คุณใช้ iPhone และiPad สานสัมพันธ์กับผู้อื่น มีสมาธิจดจ่อกับงาน และทำสิ่งต่างๆ ได้มากกว่าเดิม</p>
                    <a className="text-xl mt-14" style={{ color: '#0070c9' }}>รับเวอร์ชั่นล่าสุด {'>'}</a>
                </div>
            </div>

            <div class="relative my-12 object-contain">
                <img src="assets/src_image/help/psp-hero-banner-homepage-getsupport.image.large_2x.jpg" className='object-contain h-full' />
                <div class="relative ml-4 md:inset-y-1/4 md:left-1/4 md:absolute md:">
                    <h1 className="text-3xl text-black font-medium md:text-white md:text-5xl mt-4">รับบริการช่วยเหลือ</h1>
                    <p className="text-xl text-gray-600 my-4 md:text-white">เลือกผลิตภัณฑ์ แล้วเราจะหาวิธีแก้ปัญหาที่ดีที่สุดให้กับคุณ<br /></p>
                    <a className="text-xl " style={{ color: '#6BF' }}>เริ่มเลย {'>'}<br /><br /></a>
                    <a className="text-xl " style={{ color: '#6BF' }}>ดาวน์โหลดแอพ Apple Support {'>'}</a>
                </div>
            </div>
            <div className="grid grid-cols-1  w-5/12 mx-auto my-12 xl:grid-cols-2 ">
                <div className="flex">
                    <img src="assets/src_image/help/applecare-products_2x.png" className="object-scale-down " />
                </div>
                <div className="flex flex-col mt-4 xl:pr-12 ">
                    <h1 className="text-3xl text-black font-medium my-4">บริการและความช่วยเหลือจากผู้เชี่ยวชาญของ Apple</h1>
                    <p className="text-xl mt-4 text-gray-600">ผลิตภัณฑ์ AppleCare มีตัวเลือกบริการด้านฮาร์ดแวร์เพิ่มเติมและการสนับสนุนด้านเทคนิคโดยผู้เชี่ยวชาญจาก Apple</p>
                    <a className="text-xl mt-14" style={{ color: '#0070c9' }}>	ดูข้อมูลเกี่ยวกับแผน AppleCare
                        {'>'}</a>
                </div>
            </div>
            <hr />
            <div className="grid grid-cols-1 justify-items-center my-12 text-center">
                <div>
                    <img src="assets/src_image/help/contentlink-warrantyandrepair_2x.png" className="object-scale-down w-64" />
                </div>
                <div className='w-7/12'>
                    <h1 className="text-5xl text-black font-medium my-4">การรับประกันและการซ่อมแซม</h1>
                    <a className="text-xl inline" style={{ color: '#0070c9' }}>ดูว่าผลิตภัณฑ์ Apple ของคุณเข้าเกณฑ์ </a>
                    <p className="text-xl text-gray-600 inline ">
                        การรับบริการและบริการช่วยเหลือภายใต้การรับประกันแบบจำกัดของเราหรือไม่ มีการซ่อมที่อยู่ระหว่างดำเนินการแล้วใช่หรือไม่
                    </p>
                    <a className="text-xl inline" style={{ color: '#0070c9' }}> มาตรวจสอบสถานะกัน</a>
                </div>
            </div>
            <hr className="w-8/12 mx-auto" />
            <div className="grid grid-cols-1 justify-items-center my-12 text-center">
                <h1 className="text-3xl text-black  font-medium">โปรดระวังชิ้นส่วนของปลอม</h1>
            </div>
            <div className="grid grid-cols-1 justify-items-center my-12 text-center">
                <div className='w-7/12'>
                    <p className="text-xl text-gray-600 inline ">
                        อะแดปเตอร์แปลงไฟและแบตเตอรี่ที่เป็นของปลอมหรือของผู้ให้บริการรายอื่นอาจไม่ได้รับการออกแบบมาอย่างเหมาะ
                        สมและสามารถส่งผลให้เกิดปัญหาด้านความปลอดภัยได้ เพื่อให้แน่ใจว่าคุณได้รับแบตเตอรี่ Apple ของแท้ในระหว่าง
                        ที่ส่งเครื่องเข้ารับการเปลี่ยนแบตเตอรี่ เราขอแนะนำให้คุณไปรับบริการที่
                    </p>
                    <a className="text-xl inline" style={{ color: '#0070c9' }}> Apple Store</a>
                    <p className="text-xl text-gray-600 inline "> หรือ</p>
                    <a className="text-xl inline" style={{ color: '#0070c9' }}> ผู้ให้บริการที่ได้รับอนุญาตจาก Apple</a>
                    <p className="text-xl text-gray-600 inline ">หากคุณจำเป็นต้องเปลี่ยนเป็นอะแดปเตอร์ใหม่เพื่อชาร์จอุปกรณ์ Apple เราขอแนะนำให้คุณซื้ออะแดปเตอร์แปลงไฟของ Apple</p>
                    <p className="text-xl text-gray-600"><br />นอกจากนี้ จอแสดงผลหน้าจอที่ไม่ใช่ชิ้นส่วนของแท้ที่นำมาเปลี่ยนอาจทำงานผิดปกติและส่งผลให้คุณภาพของภาพลดลง การซ่อมหน้าจอที่ได้รับการรับรองจาก Apple จะดำเนินการโดยผู้เชี่ยว
                        ชาญที่เชื่อถือได้ ซึ่งจะใช้ชิ้นส่วนของแท้จาก Apple</p>
                </div>
            </div>
            <hr />
            <div className="grid grid-cols-1  w-5/12 mx-auto my-12 xl:grid-cols-2 ">
                <div className="flex flex-col mt-4 xl:pr-12 float-right">
                    <h1 className="text-5xl text-black font-medium my-4">บริการช่วยเหลือของฉัน</h1>
                    <p className="text-xl mt-4 text-gray-600">ตรวจสอบความคุ้มครองของบริการและการสนับสนุน และรับข้อมูลเกี่ยวกับผลิตภัณฑ์ Apple ของคุณได้ในที่เดียว</p>
                    <a className="text-xl mt-14" style={{ color: '#0070c9' }}>	ดูข้อมูลเกี่ยวกับแผน AppleCare
                        {'>'}</a>
                </div>
                <div className="flex">
                    <img src="assets/src_image/help/featured-section-my-support_2x.jpg" className="object-scale-down " />
                </div>
            </div>
            <hr />
            <div className="grid grid-cols-1 justify-items-center my-12 ">
                <div><h1 className="text-3xl text-black font-medium my-4">โปรแกรมการให้บริการของ Apple</h1>
                    <ul className="list-none space-y-4 ">
                        <li><a className="text-xl mt-14" style={{ color: '#0070c9' }}>	โปรแกรมการให้บริการสำหรับ iPhone 12 และ iPhone 12 Pro สำหรับปัญหาเครื่องในกรณีที่ไม่มีเสียง{'>'}</a></li>
                        <li><a className="text-xl mt-14" style={{ color: '#0070c9' }}>	โปรแกรมการเปลี่ยนโมดูลจอแสดงผล iPhone 11 สำหรับปัญหาเกี่ยวกับพื้นผิวระบบสัมผัส</a></li>
                        <li><a className="text-xl mt-14" style={{ color: '#0070c9' }}>	โปรแกรมการบริการ AirPods Pro สำหรับปัญหาเกี่ยวกับเสียง</a></li>
                        <li><a className="text-xl mt-14" style={{ color: '#0070c9' }}>	โปรแกรมการให้บริการ iPad Air (รุ่นที่ 3) สำหรับปัญหาหน้าจอว่างเปล่า</a></li>
                        <li><a className="text-xl mt-14" style={{ color: '#0070c9' }}>	โปรแกรมการเรียกคืนแบตเตอรี่ MacBook Pro รุ่น 15 นิ้ว</a></li>
                        <li><a className="text-xl mt-14" style={{ color: '#0070c9' }}>	ดูโปรแกรมทั้งหมด {'>'}</a></li>

                    </ul></div>


            </div>



            <Footer />
        </>
    );
};

export default Help;