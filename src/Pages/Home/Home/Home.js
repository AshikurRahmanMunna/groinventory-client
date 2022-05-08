import React from 'react';
import Reviews from '../Reviews/Reviews';
import Items from '../Items/Items';
import './Home.css';
import News from '../News/News';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            {/* banner */}
            <div className="banner d-flex align-items-center justify-content-center">
                <div className='text-center banner-text'>
                    <h2>The Best Place To <span className='text-custom-primary'>Manage</span> Inventory</h2>
                    <p className='text-muted w-75 mx-auto'>This is a best application to mange stock and inventories. There are too many systems like create, read, update, delete.</p>
                    <button onClick={() => navigate('/manageitems')} className='btn-custom'>Manage Items</button>
                </div>
            </div>
            {/* items */}
            <Items></Items>
            {/* reviews */}
            <Reviews></Reviews>
            {/* news */}
            <News></News>
        </div>
    );
};

export default Home;