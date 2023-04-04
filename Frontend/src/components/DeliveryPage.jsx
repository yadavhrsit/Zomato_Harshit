import React from 'react'
import '../styles/DeliveryPage.css'
import inspirations from '../database/inspirationData.js';
import topBrands from '../database/topBrandsData';
import Inspirations from './Inspirations.jsx';
import TopBrands from './TopBrands.jsx';
import Restraunts from '../database/DeliveryRestraunts';
import RestrauntsCard from './RestrauntsCard';
import { Link } from 'react-router-dom';
function DeliveryPage() {
    return (
        <>
            <div className='filters'>
                <button className='filters-button'>Filters</button>
                <button className='filters-button'>Pure Veg</button>
                <button className='filters-button'>Rating 4.0+</button>
                <button className='filters-button'>Cuisines</button>
                <button className='filters-button'>More filters</button>
            </div>
            <div className='delivery-intro-section'>
                <div className='delivery-intro-section-heading heading'>Inspiration for your first order</div>
                <div className='inspiration round-container'>
                    {
                        inspirations.map((inspiration) =>
                            <Inspirations title={inspiration.title} img={inspiration.img} />
                        )
                    }
                </div>
                <div className='delivery-intro-section-heading'>Top brands for you</div>
                <div className='topbrands round-container'>
                    {
                        topBrands.map((brand) =>
                            <TopBrands title={brand.title} img={brand.img} time={brand.time} />
                        )
                    }
                </div>
            </div>
            <p className='page-title heading'>Delivery Restaurants in Arya Nagar, Anand Vihar, Delhi</p>
            <div className='page-Restraunts-section'>
                <div className='page-Restraunts-card-container'>
                    {
                        Restraunts.map((restraunt) =>
                            <Link to={'/Delivery/' + restraunt.title}><RestrauntsCard title={restraunt.title} img={restraunt.img} rating={restraunt.rating} categories={restraunt.categories} price={restraunt.price} offer={restraunt.offer} time={restraunt.time} />
                            </Link>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default DeliveryPage;