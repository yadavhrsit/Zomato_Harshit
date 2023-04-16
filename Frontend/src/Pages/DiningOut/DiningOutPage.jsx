import React from 'react';
import RestrauntsCard from '../Commons/RestrauntsCard';
import Collection from '../Commons/Collections';
import { Link } from 'react-router-dom';
import UseFetch from '../../Utils/UseFetch';
import { motion } from "framer-motion";
import { diningCollections, diningRestaurants } from '../../Utils/APIs';
import { CollectionsLoader, RestaurantLoader } from '../Commons/loaders/Loaders';
function DiningOutPage() {

    const { data: DineoutCollections, loading: colLoading, error: colError } = UseFetch(diningCollections)
    const { data: Restraunts, loading: restLoading, error: restError } = UseFetch(diningRestaurants);

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
                    (colLoading ? <>
                        <CollectionsLoader />
                    </>

                        :
                        DineoutCollections?.map((collection) =>
                            <Collection title={collection.title} img={collection.img} count={collection.count} key={collection.title} />
                        )
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
                            (restLoading ?
                                <>
                                    <RestaurantLoader />
                                </>

                                :
                                Restraunts?.map((restraunt) =>
                                    <Link to={'/Dining/' + restraunt.title} key={restraunt.title}>
                                        <RestrauntsCard {...restraunt} />
                                    </Link>
                                )
                            )
                    }
                </div>
            </div>
        </motion.div >
    )
}

export default DiningOutPage
