import React from 'react';
import s from './Footer.module.css';
import propetsLogo from '../../../utils/Images/propetsLogo.png'
import facebookLogo from '../../../utils/Images/facebookLogo.png';
import instagrammLogo from '../../../utils/Images/instagrammLogo.jpg';
import lostPic from "../../../utils/Images/lostPic.png";
import foundPic from "../../../utils/Images/foundPic.png";
import vetHelpPic from "../../../utils/Images/vetHelpPic.png";
import hotelsPic from "../../../utils/Images/hotelsPic.png";
import walkingPic from "../../../utils/Images/walkingPic.png";
import fosteringPic from "../../../utils/Images/fosteringPic.png";
const Footer = () => {
    return (
        <div className={`jumbotron-fluid d-flex justify-content-center ${s.wrapperClass}`}>
            <div className='container row justify-content-center justify-content-lg-between justify-content-sm-around justify-content-md-between no-gutters'>
                <div className='mt-4'>
                    <img className='img-fluid' src={propetsLogo} alt='propetsLogo'/>
                </div>
                <div >
                    <div className={`${s.socialNets} ml-5 mt-4 `}>
                        <img className={s.socialNetlogos} src={facebookLogo} alt='facebookLogo'/>
                        <img className={`${s.socialNetlogos} ml-2`} src={instagrammLogo} alt='instagrammLogo'/>
                    </div>
                    <div className={s.address}>
                        <div>1600 Amphitheatre Pkwy</div>
                        <div>Mountain View, CA 94043, USA</div>
                    </div>
                </div>
                <div className={`${s.servicesBlock} mt-4`}>
                    <div className='d-flex flex-wrap justify-content-center'>
                        <div>
                            <div><img className={s.servicePic} src={lostPic} alt='lostPic'/>{' '}Lost</div>
                            <div><img className={s.servicePic} src={foundPic} alt='foundPic'/>{' '}found</div>
                            <div><img className={s.servicePic} src={vetHelpPic} alt='vetHelpPic'/>{' '}VetHelp</div>
                        </div>
                        <div className='ml-3'>
                            <div><img className={s.servicePic} src={hotelsPic} alt='hotelsPic'/>{' '}Hotels</div>
                            <div><img className={s.servicePic} src={walkingPic} alt='walkingPic'/>{' '}Walking</div>
                            <div><img className={s.servicePic} src={fosteringPic} alt='fosteringPic'/>{' '}Fostering
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;