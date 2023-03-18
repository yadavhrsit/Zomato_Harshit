import React from 'react'
import Restraunts from '../database/DineoutRestraunts';
import RestrauntsCard from './RestrauntsCard';
import Collection from './Collections';
import DineoutCollections from '../database/DineoutCollections';
function DiningOutPage() {
    return (
        <>
            <div className='collections-section'>
                <p className='collections-section-title heading'>Collections</p>
                <p className='collections-section-heading'>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
            </div>
            <div className='collections-section-cards-container'>
                {
                    DineoutCollections.map((collection) =>
                        <Collection title={collection.title} img={collection.img} count={collection.count} />
                    )}

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
                        Restraunts.map((restraunt) =>
                            <RestrauntsCard title={restraunt.title} img={restraunt.img} rating={restraunt.rating} categories={restraunt.categories} price={restraunt.price} time={restraunt.time} location={restraunt.location} />)
                    }
                </div>
            </div>
        </>
    )
}

export default DiningOutPage