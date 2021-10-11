import React from 'react';
import Footer from '../../components/Footer';
import GlobalNavBar from '../../components/GlobalNavBar';



const Help = () => {


    return (
        <>
            <GlobalNavBar />
<<<<<<< HEAD
            <div class="text-center">
                <img src="assets/src_image/help/psp-hero-banner-homepage-welcome.image.large_2x.jpg" alt="Avatar" class="object-cover w-full h-full" />
            </div>
            <div className='grid justify-items-center mx-20 my-24'>
                <div className="flex flex-row space-x-20 text-center">
                    <div className="w-16 flex flex-col space-y-4 ">
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
                </div>
=======
            <img
                src="assets\src_image\help\psp-hero-banner-homepage-welcome.image.large_2x.jpg"
                className="hidden md:block mx-auto"
                style={{ maxWidth: '1050px' }}
            />
            <img
                src="assets\src_image\help\psp-hero-banner-homepage-welcome.image.small_2x.jpg"
                className="hidden md:block mx-auto"
                style={{ maxWidth: '300px' }}
            />
            <div>
                <h1>Help</h1>
                <h2>Help</h2>
>>>>>>> 3d7c96ed0f7740f150518b4912f96113fd77c988
            </div>

            <Footer />
        </>
    );
};

export default Help;