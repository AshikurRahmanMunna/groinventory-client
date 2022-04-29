import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="banner d-flex align-items-center justify-content-center">
                <div className='text-center w-50'>
                    <h2>The Best Place To <span className='text-custom-primary'>Manage</span> Inventory</h2>
                    <p className='text-muted w-75 mx-auto'>This is a best application to mange stock and inventories. There are too many systems like create, read, update, delete.</p>
                    <button className='btn-banner'>Items</button>
                </div>
            </div>
        </div>
    );
};

export default Home;