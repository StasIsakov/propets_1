import React from 'react';
import s from './AboutResource.module.css';
import Container from "react-bootstrap/cjs/Container";
import petsPic from '../../../utils/Images/petsPic.png';
const AboutResource = () => {
    return (<Container>
            <div className='d-flex flex-row flex-wrap justify-content-center mt-5'>
               <div>
                   <img className={`img-fluid ${s.petsPic}`} src={petsPic} alt="petsPic"/>
               </div>
                <div>
                    <h3 className={s.listHeader}>Here is collected everything that your pet needs:</h3>
                    <ul className={s.list}>
                        <li>professional veterinarian tips;</li>
                        <li>useful information about education and care;</li>
                        <li>fostering home search</li>
                        <li>information about pet-sitting and walking service;</li>
                        <li>and of course, great communication with new friends</li>
                        <li>in your social network!</li>
                    </ul>
                </div>
            </div>
    </Container>
    );
};

export default AboutResource;