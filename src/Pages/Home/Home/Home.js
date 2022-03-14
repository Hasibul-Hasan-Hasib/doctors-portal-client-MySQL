import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Footer from '../../Shared/Footer/Footer';
import BannerInfo from '../BannerInfo/BannerInfo';
import TopHero from '../TopHero/TopHero';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <BannerInfo />
            <Services />
            <TopHero />
            <AppointmentBanner />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;