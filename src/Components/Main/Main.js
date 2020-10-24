import React from 'react';
import Header from './Header/Header';
import AboutResource from "./AboutResource/AboutResource";
import AboutResourceJumbotron from "./AboutResourceJumbotron/AboutResourceJumbotron";
import ComingSoonJumbotron from "./ComingSoonJumbotron/ComingSoonJumbotron";
import Footer from "./Footer/Footer";
import WelcomeContent from "./WelcomeContent/WelcomeContent";

const Main = () => {
    return (
        <div>
            <Header/>
            <WelcomeContent/>
            <AboutResourceJumbotron/>
            <AboutResource/>
            <ComingSoonJumbotron/>
            <Footer/>
        </div>
    );
};

export default Main;