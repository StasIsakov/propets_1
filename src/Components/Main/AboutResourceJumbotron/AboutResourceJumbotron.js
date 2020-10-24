import React from 'react';
import s from './AboutResourceJumbotron.module.css';

const AboutResourceJumbotron = () => {
    return (
        <div className={`jumbotron-fluid d-flex justify-content-center ${s.wrapperClass}`}>
            <div className='container row justify-content-center no-gutters '>
                <div className='col-xl-10 col-10 mt-5 pb-4 '>
                   <h4 className=''> Our fluffy space for lovers,
                    admirers, dads and moms of our four-legged, winged,
                        tailed guys.</h4>
                </div>
            </div>
        </div>
    );
};

export default AboutResourceJumbotron;