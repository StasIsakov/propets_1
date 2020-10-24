import React from 'react';
import s from './ComingSoonJumbotron.module.css';
import heart from '../../../utils/Images/heart.png';


const ComingSoonJumbotron = () => {
    return (
        <div className={`jumbotron-fluid d-flex justify-content-center mt-5  ${s.wrapperClass}`}>
            <div className='container row justify-content-center no-gutters'>
               <div className={`${s.comS} p-2`} >Coming soon</div>
                <div className={`${s.newService} p-2 mt-4 `}>
                    <div className={s.text}>We are planing to open a new service,</div>
                    <div className={s.text}>where your cats and dogs can find their love!</div>
                </div>
               <div><img className={`${s.heart} p-2`} src={heart}/>
               </div>
            </div>
        </div>
    );
};

export default ComingSoonJumbotron;