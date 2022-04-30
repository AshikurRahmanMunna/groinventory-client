import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './ToTop.css';

const ToTop = () => {
    const [hide, setShow] = useState(false);
    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 300) {
            setShow(true);
        }
        else {
            setShow(false);
        }
    })
    return (
        <div className={`to-top ${hide ? '' : 'd-none'}`}>
            <a href="#">
                <FontAwesomeIcon icon={faAngleUp} />
            </a>
        </div>
    );
};

export default ToTop;