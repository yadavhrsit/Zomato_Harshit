import React from 'react'
import RestrauntsCard from './RestrauntsCard';
import Collection from './Collections';
import { Link } from 'react-router-dom';
import UseFetch from './UseFetch';
function DiningOutPage() {

    const { data: DineoutCollections, loading: colLoading, error: colError } = UseFetch("http://localhost:5000/auth/getdiningcollection")
    const { data: Restraunts, loading: restLoading, error: restError } = UseFetch("http://localhost:5000/auth/getdiningrestaurant");


    return (
        <>
            <div className='collections-section'>
                <p className='collections-section-title heading'>Collections</p>
                <p className='collections-section-heading'>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
            </div>
            <div className='collections-section-cards-container'>
                {colLoading ? <p>Loading...</p> : (colError ? <p>Failed to load data from server</p> :
                    DineoutCollections?.map((collection) =>
                        <Collection title={collection.title} img={collection.img} count={collection.count} />
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
                        restLoading ? <p>Loading...</p> : (restError ? <p>Failed to load data from server</p> :
                            Restraunts?.map((restraunt) =>
                                <Link to={'/Dining/' + restraunt.title}><RestrauntsCard title={restraunt.title} img={restraunt.img} rating={restraunt.rating} categories={restraunt.categories} price={restraunt.price} time={restraunt.time} location={restraunt.location} />
                                </Link>
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default DiningOutPage