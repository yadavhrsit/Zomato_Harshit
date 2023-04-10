import React, { Suspense } from 'react';
import RestrauntsCard from '../Commons/RestrauntsCard';
import Collection from '../Commons/Collections';
import { Link } from 'react-router-dom';
import UseFetch from '../../Utils/UseFetch';
import { motion } from 'framer-motion';
import { diningCollections, diningRestaurants } from '../../Utils/APIs';
function DiningOutPage() {

    const { data: DineoutCollections, error: colError } = UseFetch(diningCollections)
    const { data: Restraunts, error: restError } = UseFetch(diningRestaurants);

    return (
        <motion.div className='page-container' initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}>
            <div className='collections-section'>
                <p className='collections-section-title heading'>Collections</p>
                <p className='collections-section-heading'>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
            </div>
            <div className='collections-section-cards-container'>
                {colError ? <p>Failed to load data from server</p> :
                    DineoutCollections?.map((collection) =>
                        <Suspense
                            fallback={
                                <div className='collections-section-card'>
                                    <img src={""} alt={""} className='collections-section-card-img'></img>
                                    <p className='collections-section-card-title'>{""}</p>
                                    <p className='collections-section-card-count'>{""}</p>
                                </div>
                            }>
                            <Collection title={collection.title} img={collection.img} count={collection.count} key={collection.title} />
                        </Suspense>
                    )
                }

            </div>
            <div className='filters'>
                <button className='filters-button'>Filters</button>
                <button className='filters-button'>Rating 4.0+</button>
                <button className='filters-button'>Outdoor Seating</button>
                <button className='filters-button'>Serves Alcohol</button>
                <button className='filters-button'>Open Now</button>
            </div>
            <p className='page-title heading'>Best Dining Restaurants near you in Arya Nagar, Anand Vihar, Delhi</p>
            <div className='page-Restraunts-section'>
                <div className='page-Restraunts-card-container'>
                    {
                        restError ? <p>Failed to load data from server</p> :
                            Restraunts?.map((restraunt) =>
                                <Link to={'/Dining/' + restraunt.title} key={restraunt.title}>
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

export default DiningOutPage