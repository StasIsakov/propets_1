import React from 'react';
import s from "./SignUp.module.css";

const SignUp = () => {
    return (
        <div className='container'>
            <div className='d-flex flex-row flex-wrap justify-content-center '>
                <div className='col'>
                    <div className={s.labeledInput}><label className={s.labelClass} style={{fontWeight: '500'}}>Name:</label>{' '}
                        <input className={s.inputForm} placeholder='Helen Johnson'/>
                    </div>
                    <div className={s.labeledInput}>
                        <label className={s.labelClass} style={{fontWeight: '500'}}>Email:</label>{' '}
                        <input className={s.inputForm} placeholder='helenjohnson@gmail.com'/>
                    </div>
                    <div className={s.labeledInput}>
                        <label className={s.labelClass} style={{fontWeight: '500'}}>Password:</label>{' '}
                        <input className={s.inputForm} placeholder='**********'/>
                    </div>
                    <div className={s.labeledInput}>
                        <label className={s.labelClass} style={{fontWeight: '500'}}>Password:</label>{' '}
                        <input className={s.inputForm} placeholder='**********'/>
                    </div>
                </div>
                <div className='col mt-0' ><p className={s.sideText}>
                    Password must have at least 8 characters with at least one Capital letter,
                    at least one lower case letter and at least one number or special character.
                </p>
                    <p className={s.sideText}>please re-enter your password</p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;