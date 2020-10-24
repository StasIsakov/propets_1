import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
    return (
        <div className={`${s.borderClass} d-flex flex-row flex-wrap justify-content-center`}>
            <p className={`col-xs-12 col-lg-6 mt-3 ${s.text}`}>By clicking "Submit", you are agree to us processing your information in accordance with <span className={s.underlinedText}>these terms.</span></p>
            <div className={` mt-3  ${s.buttonBlock}  justify-content-center`}>
                <div className={`${s.cancelButton}`}>Cancel </div>
                <div className={`${s.submitButton} ml-3`}> <div className='offset-1'> Submit</div></div>
            </div>
        </div>
    );
};

export default Footer;