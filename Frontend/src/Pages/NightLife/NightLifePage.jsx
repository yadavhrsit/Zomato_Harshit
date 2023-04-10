import React, { Suspense } from 'react';
import Collection from '../Commons/Collections';
import RestrauntsCard from '../Commons/RestrauntsCard';
import { Link } from 'react-router-dom';
import UseFetch from '../../Utils/UseFetch';
import { motion } from 'framer-motion';
import { nightlifeCollections, nightlifeRestaurants } from '../../Utils/APIs';
function NightLifePage() {

    const { data: NightLifeCollections, error: colError } = UseFetch(nightlifeCollections)
    const { data: NightlifeRestraunts, error: restError } = UseFetch(nightlifeRestaurants);

    return (
        <motion.div className='page-container' initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}>
            <div className='collections-section'>
                <p className='collections-section-title heading'>Collections</p>
                <p className='collections-section-heading'>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
            </div>
            <div className='collections-section-cards-container'>
                {
                    colError ? <p>Failed to load data from server</p> :
                        NightLifeCollections?.map((collection) =>
                            <Suspense
                                fallback={
                                    <div className='collections-section-card'>
                                        <img src={""} alt={""} className='collections-section-card-img'></img>
                                        <p className='collections-section-card-title'>{""}</p>
                                        <p className='collections-section-card-count'>{""}</p>
                                    </div>
                                }>
                                <Collection title={collection.title} img={collection.img} count={collection.count} />
                            </Suspense>
                        )
                }
            </div>
            <div className='filters'>
                <button className='filters-button'>Filters</button>
                <button className='filters-button'>Distance</button>
                <button className='filters-button'>Rating 4.0+</button>
                <button className='filters-button'>Pubs & Bars</button>
            </div>
            <p className='page-title heading'>Nightlife Restaurants in Arya Nagar, Anand Vihar, Delhi</p>
            <div className='page-Restraunts-section'>
                <div className='page-Restraunts-card-container'>
                    {
                        restError ? <p>Failed to load data from server</p> :
                            NightlifeRestraunts?.map((Restraunts) =>
                                <Link to={'/NigltLife/' + Restraunts.title}>
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
                                        <RestrauntsCard {...Restraunts} /></Suspense>
                                </Link>
                            )
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default NightLifePage