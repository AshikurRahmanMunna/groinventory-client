import { faAngleDoubleUp, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './ToTop.css';

const ToTop = () => {
    const [hide, setShow] = useState(false);
    // scroll event listener
    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 300) {
            setShow(true);
        }
        else {
            setShow(false);
        }
    })
    return (
        // to top
        <div className={`to-top ${hide ? '' : 'd-none'}`}>
            <a href="#">
                <FontAwesomeIcon icon={faAngleDoubleUp} />
            </a>
        </div>
    );
};

export default ToTop;