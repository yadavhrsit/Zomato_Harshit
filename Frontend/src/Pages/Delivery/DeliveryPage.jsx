import React from 'react';
import '../Delivery/DeliveryPage.css';
import { Link } from 'react-router-dom';
import UseFetch from '../../Utils/UseFetch';
import { getInspirations, getTopBrands, deliveryRestaurants } from '../../Utils/APIs';
import { motion } from "framer-motion";
import { InspirationLoader, TopBrandLoader, RestaurantLoader } from '../Commons/loaders/Loaders.jsx';
const Inspirations = React.lazy(() => import('./Inspirations'));
const TopBrands = React.lazy(() => import('./TopBrands.jsx'));
const RestrauntsCard = React.lazy(() => import('../Commons/RestrauntsCard'));

function DeliveryPage() {

    const { data: inspirations, loading: inspiLoading, error: inspError } = UseFetch(getInspirations)
    const { data: topBrands, loading: topLoading, error: topError } = UseFetch(getTopBrands);
    const { data: Restraunts, loading: restLoading, error: restError } = UseFetch(deliveryRestaurants);

    return (
        <motion.div className='page-container' initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}>
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
                        inspError ? <p>Failed to load data from server</p> :
                            (inspiLoading ? <>
                                <InspirationLoader />
                            </>
                                :
                                inspirations?.map((inspiration) =>
                                    <Inspirations title={inspiration.title} img={inspiration.img} />
                                )
                            )
                    }
                </div>
                <div className='delivery-intro-section-heading'>Top brands for you</div>
                <div className='topbrands round-container'>
                    {
                        topError ? <p>Failed to load data from server</p> :
                            (topLoading ? <>
                                <TopBrandLoader />
                            </> :
                                topBrands?.map((brand) =>
                                    <TopBrands title={brand.title} img={brand.img} time={brand.time} key={brand.title} />
                                )
                            )
                    }
                </div>
            </div>
            <p className='page-title heading'>Delivery Restaurants in Arya Nagar, Anand Vihar, Delhi</p>
            <div className='page-Restraunts-section'>
                <div className='page-Restraunts-card-container'>
                    {
                        restError ? <p>Failed to load data from server</p> :
                            (restLoading ?
                                <RestaurantLoader />
                                :
                                Restraunts?.map((restraunt) =>
                                    <Link to={'/Delivery/' + restraunt.title}>
                                        <RestrauntsCard {...restraunt} />
                                    </Link>
                                )
                            )
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default DeliveryPage;