import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        // full height loading
        <div style={{height: '100vh'}} className="d-flex align-items-center justify-content-center">
            <Spinner style={{width: '100px', height: '100px'}} animation='grow' />
        </div>
    );
};

export default Loading;