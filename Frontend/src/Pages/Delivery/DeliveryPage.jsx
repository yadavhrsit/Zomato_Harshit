import { React } from 'react';
import '../Delivery/DeliveryPage.css';
import Inspirations from './Inspirations';
import TopBrands from './TopBrands.jsx';
import RestrauntsCard from '../Commons/RestrauntsCard';
import { Link } from 'react-router-dom';
import UseFetch from '../../Utils/UseFetch';
import { getInspirations, getTopBrands, deliveryRestaurants } from '../../Utils/APIs';

function DeliveryPage() {

    const { data: inspirations, loading: inspLoading, error: inspError } = UseFetch(getInspirations)
    const { data: topBrands, loading: topLoading, error: topError } = UseFetch(getTopBrands);
    const { data: Restraunts, loading: restLoading, error: restError } = UseFetch(deliveryRestaurants);

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
                        inspLoading ? <p>Loading...</p> : (inspError ? <p>Failed to load data from server</p> :
                            inspirations?.map((inspiration) =>
                                <Inspirations title={inspiration.title} img={inspiration.img} />
                            )
                        )
                    }
                </div>
                <div className='delivery-intro-section-heading'>Top brands for you</div>
                <div className='topbrands round-container'>
                    {
                        topLoading ? <p>Loading...</p> : (topError ? <p>Failed to load data from server</p> :
                            topBrands?.map((brand) =>
                                <TopBrands title={brand.title} img={brand.img} time={brand.time} />
                            )
                        )
                    }
                </div>
            </div>
            <p className='page-title heading'>Delivery Restaurants in Arya Nagar, Anand Vihar, Delhi</p>
            <div className='page-Restraunts-section'>
                <div className='page-Restraunts-card-container'>
                    {
                        restLoading ? <p>Loading...</p> : (restError ? <p>Failed to load data from server</p> :
                            Restraunts?.map((restraunt) =>
                                <Link to={'/Delivery/' + restraunt.title}><RestrauntsCard {...restraunt} />
                                </Link>
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default DeliveryPage;