import React from 'react'
import Collection from './Collections';
import RestrauntsCard from './RestrauntsCard';
import { Link } from 'react-router-dom';
import UseFetch from './UseFetch';
function NightLifePage() {

    const { data: NightLifeCollections, loading: colLoading, error: colError } = UseFetch("http://localhost:5000/auth/getnightlifecollection")
    const { data: NightlifeRestraunts, loading: restLoading, error: restError } = UseFetch("http://localhost:5000/auth/getnightliferestaurant");


    return (
        <>
            <div className='collections-section'>
                <p className='collections-section-title heading'>Collections</p>
                <p className='collections-section-heading'>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
            </div>
            <div className='collections-section-cards-container'>
                {
                    colLoading ? <p>Loading...</p> : (colError ? <p>Failed to load data from server</p> :
                        NightLifeCollections?.map((collection) =>
                            <Collection title={collection.title} img={collection.img} count={collection.count} />
                        )
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
                        restLoading ? <p>Loading...</p> : (restError ? <p>Failed to load data from server</p> :
                            NightlifeRestraunts?.map((NightlifeRestraunts) =>
                                <Link to={'/NigltLife/' + NightlifeRestraunts.title}><RestrauntsCard title={NightlifeRestraunts.title} img={NightlifeRestraunts.img} rating={NightlifeRestraunts.rating} categories={NightlifeRestraunts.categories} price={NightlifeRestraunts.price} time={NightlifeRestraunts.time} location={NightlifeRestraunts.location} />
                                </Link>
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default NightLifePage