import React from 'react';
import s from './Header.module.css';
import propetsLogo from '../../../utils/Images/propetsLogo.png';
import Button from "react-bootstrap/Button";

const Header = () => {
    return (
        <div className={`jumbotron-fluid d-flex justify-content-center no-gutters ${s.wrapperClass}`}>
            <header className={`container row justify-content-between ${s.mainPageHeader}`}>
                <div className={`col-xl-6 col-6 d-flex align-content-center justify-content-start ${s.logoPic}`}>
                </div>
                <div className="col-xl-6 col-6 row d-flex align-content-center justify-content-end">
                        <div className={s.signIn}>
                            <Button variant='outline-light' className={s.cstmbutton} size='lg'>Sign in</Button>
                        </div>
                </div>
            </header>
        </div>
    );
};

export default Header;