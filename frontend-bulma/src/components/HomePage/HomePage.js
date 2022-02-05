import React from "react";
import DemoCarousel from "./Carousel";
import FrontPage from "./FrontPage";
import PopoularPartnersSection from "./PopularPartners";
import 'react-multi-carousel/lib/styles.css';

const HomePage = () => {
    return (
        <>
            <FrontPage />
            <PopoularPartnersSection />
            <DemoCarousel />
        </>
    )
}

export default HomePage