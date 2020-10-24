import React, {useState} from 'react';
import s from "./SignPage.module.css";
import greenPropetsLogo from "../../utils/Images/greenPropetsLogo.png";
import SignUp from "./SignUpIn/SignUp";
import SignIn from "./SignUpIn/SignIn";
import Footer from "./Footer/Footer";

const SignPage = () => {

    const [signContent, setSignContent] = useState(<SignIn/>)

    return (
        <div className='container'>
            <div className='flex-row d-flex'>
                <img className={`col-6 img-fluid ${s.propetsLogo}`} src={greenPropetsLogo}/>
            </div>
            <div className={`flex-row d-flex flex-wrap justify-content-center ${s.text}`}>
                    <div className={s.bold}> Welcome!</div>
                    <div className='ml-1 no-gutters'> Please sign in/sign up to continue or</div>
                <div className={`ml-2 ${s.facebookButton}`}>
                    <div className='col-10 offset-1'>
                        <div className='mt-2'>Enter with facebook</div>
                    </div>
                </div>
            </div>

            <div className='flex-row d-flex flex-wrap justify-content-center text-center mt-3'>
                <div onClick={()=>(setSignContent(<SignIn/>))} activeClassName={s.signInUpActive} className={`col-6 ${s.signInUp}`}> Sign up </div>
                <div className={`col-6 ${s.signInUp}`}> Sign in </div>
            </div>
            <div className={'pb-3'}>{signContent}</div>
            <Footer/>
        </div>
    );
};

export default SignPage;