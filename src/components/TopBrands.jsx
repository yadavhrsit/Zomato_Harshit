import React from 'react';
function TopBrands(props) {
    return (
        <div className={'round-container-item ' + props.title}>
            <img className='round-container-item-img' src={props.img} alt={props.title}></img>
            <p className='round-container-item-title'>{props.title}</p>
            <p className='round-container-item-time'>{props.time}</p>
        </div>


    )
}

export default TopBrands