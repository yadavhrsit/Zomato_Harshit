import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
function DeliveryRestraunts(props) {
    return (
        <>
            <div className='Restraunt-card'>
                <LazyLoadImage src={props.img}
                    width={'300px'} height={'250px'}
                    alt={props.title}
                    className='Restraunt-card-img'
                />
                <div className='Restraunt-card-info'>
                    <p className='Restraunt-card-title'>{props.title}</p>
                    <p className='Restraunt-card-rating'>{props.rating}</p>
                    <p className='Restraunt-card-categories'>{props.categories}</p>
                    <p className='Restraunt-card-price'>{props.price}</p>
                    {(props.location ? <p className='Restraunt-card-location'>{props.location}</p> : "")}
                </div>
                {(props.offer ? <p className='Restraunt-card-offer'>{props.offer}</p> : "")}
                <p className='Restraunt-card-time'>{props.time}</p>
            </div>
        </>
    )
}

export default DeliveryRestraunts