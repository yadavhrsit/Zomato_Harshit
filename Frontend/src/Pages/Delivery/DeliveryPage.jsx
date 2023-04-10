import React, { Suspense } from 'react';
import { useState, useEffect, useMemo } from 'react';
import '../Delivery/DeliveryPage.css';
import { Link } from 'react-router-dom';
import UseFetch from '../../Utils/UseFetch';
import { getInspirations, getTopBrands, deliveryRestaurants } from '../../Utils/APIs';
import { motion } from "framer-motion";
const Inspirations = React.lazy(() => import('./Inspirations'));
const TopBrands = React.lazy(() => import('./TopBrands.jsx'));
const RestrauntsCard = React.lazy(() => import('../Commons/RestrauntsCard'));

function DeliveryPage() {

    const { data: inspirations, error: inspError } = UseFetch(getInspirations)
    const { data: topBrands, error: topError } = UseFetch(getTopBrands);
    const { data: Restraunts, error: restError } = UseFetch(deliveryRestaurants);

    const [rating, setRating] = useState(false);

    useEffect(() => {
        if (rating) {

        }
    }, [rating]);

    return (
        <motion.div className='page-container' initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}>
            <div className='filters'>
                <button className='filters-button'>Filters</button>
                <button className='filters-button'>Pure Veg</button>
                <button className='filters-button' onClick={() => setRating(!rating)}>Rating 4.0+</button>
                <button className='filters-button'>Cuisines</button>
                <button className='filters-button'>More filters</button>
            </div>
            <div className='delivery-intro-section'>
                <div className='delivery-intro-section-heading heading'>Inspiration for your first order</div>
                <div className='inspiration round-container'>
                    {
                        inspError ? <p>Failed to load data from server</p> :
                            inspirations?.map((inspiration) =>
                                <Suspense fallback={
                                    <motion.div initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.6 }} className={'round-container-item '}>
                                        <img className='round-container-item-img' src={""} alt={""}></img>
                                        <p className='round-container-item-title'>{""}</p>
                                    </motion.div>
                                }>
                                    <Inspirations title={inspiration.title} img={inspiration.img} />
                                </Suspense>
                            )
                    }
                </div>
                <div className='delivery-intro-section-heading'>Top brands for you</div>
                <div className='topbrands round-container'>
                    {
                        topError ? <p>Failed to load data from server</p> :
                            topBrands?.map((brand) =>
                                <Suspense fallback={
                                    <div className={'round-container-item '}>
                                        <img className='round-container-item-img' src={""} alt={""}></img>
                                        <p className='round-container-item-title'>{""}</p>
                                        <p className='round-container-item-time'>{""}</p>
                                    </div>

                                }>
                                    <TopBrands title={brand.title} img={brand.img} time={brand.time} key={brand.title} /></Suspense>
                            )
                    }
                </div>
            </div>
            <p className='page-title heading'>Delivery Restaurants in Arya Nagar, Anand Vihar, Delhi</p>
            <div className='page-Restraunts-section'>
                <div className='page-Restraunts-card-container'>
                    {
                        restError ? <p>Failed to load data from server</p> :
                            Restraunts?.map((restraunt) =>
                                <Link to={'/Delivery/' + restraunt.title}>
                                    <Suspense fallback={
                                        <div className='Restraunt-card'>
                                            <img className='Restraunt-card-img' src={""} alt={""}></img>
                                            <div className='Restraunt-card-info'>
                                                <p className='Restraunt-card-title'>{""}</p>
                                                <p className='Restraunt-card-categories'>{""}</p>
                                                <p className='Restraunt-card-price'>{""}</p>
                                                <p className='Restraunt-card-location'>{""}</p>
                                            </div>

                                            <p className='Restraunt-card-time'>{""}</p>
                                        </div>}>
                                        <RestrauntsCard {...restraunt} /></Suspense>
                                </Link>
                            )
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default DeliveryPage;