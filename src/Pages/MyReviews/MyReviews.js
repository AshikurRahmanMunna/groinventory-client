import React, { useState, useEffect } from 'react';
import axios from 'axios';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Review from '../Home/Review/Review';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        // get user reviews
        axios.get(`https://secret-wildwood-43092.herokuapp.com/review?email=${user.email}`)
        .then(res => setReviews(res?.data));
    }, [user])
    return (
        <div className='full-height-center align-items-start mt-5'>
            <div className='w-50'>
                <h2 className='text-center'>My <span className='text-custom-primary'>Reviews</span></h2>
                {
                    reviews.map(review => <Review spacing={'mb-4'} key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default MyReviews;