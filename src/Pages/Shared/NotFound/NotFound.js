import React from 'react';
import notfound from '../../../images/notfound.png';

const NotFound = () => {
    return (
        <div className='full-height-center'>
            {/* not found img */}
            <img src={notfound} alt="page not found" />
        </div>
    );
};

export default NotFound;