import React, { useState } from 'react';
import options from '../database/subHeaderItems.js'
import { NavLink } from 'react-router-dom';
import '../styles/SubHeader.css';
import '../styles/Page.css';


export default function SubHeader() {

    const state = { Delivery: 'active', NightLife: 'inactive', Dining: 'inactive' }
    const [State, activeHandler] = useState(state);

    function handleClick(ele) {
        let State = JSON.parse(JSON.stringify(state));
        State.Delivery = "inactive";
        State.Dining = "inactive";
        State.NightLife = "inactive";
        State[ele] = "active";
        activeHandler(State)
    }

    return (
        <>
            <div className='sub-header'>
                {
                    options.map((option) =>
                        <div onClick={() => handleClick(option.title)}><NavLink style={{ textDecoration: 'none' }} to={option.title}><div className={'sub-header-items ' + option.title} ><div className={"sub-header-images " + option.title + "-" + State[option.title]}></div><p>{option.title}</p></div></NavLink></div>
                    )
                }
            </div >
        </>
    )
}
