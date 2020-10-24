import React from 'react';
import s from "./SignUp.module.css";

const SignIn = () => {
    return (
        <div className='container'>
            <div className='d-flex flex-row flex-wrap  '>
                <div className={`mt-5 ${s.signInContainer}`}>
                    <div className={s.invis}>
                    </div>
                    <div className={s.labeledInput}>
                        <label className={s.labelClass} style={{fontWeight: '500'}}>Email:</label>{' '}
                        <input className={s.inputForm} placeholder='helenjohnson@gmail.com'/>
                    </div>
                    <div className={s.labeledInput}>
                        <label className={s.labelClass} style={{fontWeight: '500'}}>Password:</label>{' '}
                        <input className={s.inputForm} placeholder='**********'/>
                    </div>
                    <div className={s.invis}>
                    </div>
                    <div className={s.forgotPassword}>Forgot password?</div>
                </div>

            </div>
        </div>
    );
};

export default SignIn;