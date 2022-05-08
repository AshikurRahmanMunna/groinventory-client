import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleNews.css';

const SingleNews = ({news}) => {
    const {title, img, desc, date, time, _id} = news;
    const navigate = useNavigate();
    return (
        // news card
        <div onClick={() => navigate(`/news/${_id}`)} className='news-card'>
            <img className='img-fluid w-100' src={img} alt="" />
            <h5 className='mt-2'>{title}</h5>
            {desc.length > 130 ? 
            <p>{desc.slice(0, 130)} <span className='text-custom-primary'><strong>...</strong></span></p>
             : desc}
            <p>{date} At {time}</p>
        </div>
    );
};

export default SingleNews;