import React, {useState} from 'react';
import s from './WelcomeContent.module.css'
import pawSearch from '../../../utils/Images/pawSearch.png'
import Alert from "react-bootstrap/cjs/Alert";

const WelcomeContent = () => {
    const [lostText, setLostText] = useState('I lost my pet!');
    const [foundText, setFoundText] = useState('I found a pet!');

    return (<div className={`container ${s.backGround}`}>
            <div className={`col-xl-6 col-xs-12 mb-5 mt-5 ${s.welcomeTextDiv}`}>
                <div className={s.hText}>Welcome to your</div>
                <div className={`col-xs-6 ${s.greenText} ${s.hText}`}>pawfessional</div>
                <div className={`col-xs-6 ${s.hText}`}>community</div>
            </div>
            <div className={s.buttonsDiv}>
                <div onMouseEnter={() => setLostText('Click to find!')}
                     onMouseOut={() => setLostText('I lost my pet!')}
                     className={`${s.lostButton}`}>
                    <div className='col-8 offset-3'
                         onMouseEnter={() => setLostText('Click to find!')}
                         onMouseOut={() => setLostText('I lost my pet!')}> {lostText}</div>
                </div>
                <div onMouseEnter={() => setFoundText('What to do?')}
                     onMouseOut={() => setFoundText('I found a pet!')}
                     className={`${s.foundButton}`}>
                    <div onMouseEnter={() => setFoundText('What to do?')}
                         onMouseOut={() => setFoundText('I found a pet!')}
                         className='col-8 offset-4'>{foundText}</div>
                </div>
            </div>
            <Alert className={s.joinLink} variant="success">
                I'm okey, just want to {' '}
                <Alert.Link href="/sign">JOIN</Alert.Link>. the pawsome community!
            </Alert>
        </div>
    );
};

export default WelcomeContent;