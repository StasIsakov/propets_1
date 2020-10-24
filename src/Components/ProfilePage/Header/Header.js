import React from 'react';
import s from './Header.module.css';
import propetsLogo from '../../../utils/Images/propetsLogo.png';
import Button from "react-bootstrap/Button";
import plus from '../../../utils/Images/whitePlusIcon.png'

const Header = () => {
    return (
        <div className={`jumbotron-fluid d-flex justify-content-center no-gutters position-relative ${s.wrapperClass}`}>
            <header className={`container row justify-content-between ${s.mainPageHeader}`}>
                <div className={`col-xl-6 col-4 d-flex align-content-center justify-content-start ${s.logoPic}`}>
                </div>
                <div className="col-4 row d-flex align-content-center justify-content-end">
                        <div className={s.addNew}>
                            <Button variant='outline-light' className={s.cstmbutton}>Add new</Button>
                        </div>
                </div>
            </header>
        </div>
    );
};

export default Header;