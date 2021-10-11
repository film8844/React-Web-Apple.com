import React from 'react';
import Footer from '../../components/Footer';
import GlobalNavBar from '../../components/GlobalNavBar';

const Help = () => {
    return (
        <>
            <GlobalNavBar />
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
            </div>
            <Footer />
        </>
    );
};

export default Help;