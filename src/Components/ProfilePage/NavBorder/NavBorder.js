import React from 'react';
import s from "./NavBorder.module.css";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faPaw} from "@fortawesome/free-solid-svg-icons/faPaw";
import {faBullhorn} from "@fortawesome/free-solid-svg-icons/faBullhorn";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";

const NavBorder = () => {
    return (
        <div className={`${s.wrapperClass} jumbotron-fluid d-flex justify-content-center no-gutters`}>
            <div className='container justify-content-center row'>
                <div className={`col-2 ${s.navBar}`}>
                    <div className={`row justify-content-start ${s.navElement}`}>
                        <FontAwesomeIcon  className={s.navIcon} icon={faHome}/>
                        <div className=''>Home</div>
                    </div>
                    <div className={`row justify-content-start ${s.navElement}`}>
                        <FontAwesomeIcon  className={s.navIcon} icon={faSearch}/>
                        <div>Lost</div>
                    </div>
                    <div className={`row justify-content-start ${s.navElement}`}>
                        <FontAwesomeIcon  className={s.navIcon} icon={faPaw}/>
                        <div>Found</div>
                    </div>
                    <div className={`row justify-content-start ${s.navElement}`}>
                        <FontAwesomeIcon  className={s.navIcon} icon={faBullhorn}/>
                        <div>Services</div>
                    </div>
                    <div className={`row justify-content-start ${s.navElement}`}>
                        <FontAwesomeIcon  className={s.navIcon} icon={faStar}/>
                        <div>Favorites</div>
                    </div>
                </div>
                <div className={`col-8 ${s.contentClass}`}></div>
                <div className='col-2'></div>
            </div>
        </div>
    );
};

export default NavBorder;