import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Review.css';

const Review = ({review}) => {
    const {name, img, desc, rating} = review;
    return (
        <div className='review-card'>
            <img className='mx-auto' src={img} alt={name} />
            <h5>{name}</h5>
            <p><small>{desc}</small></p>
            <Rating initialRating={rating} emptySymbol={<FontAwesomeIcon style={{color: 'lightgray'}} icon={faStar} />} fullSymbol={<FontAwesomeIcon style={{color: 'orange'}} icon={faStar} />} readonly />
        </div>
    );
};

export default Review;