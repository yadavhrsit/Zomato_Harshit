import React, { useState } from 'react';
import options from '../database/subHeaderItems.js'
import { NavLink } from 'react-router-dom';
import '../styles/SubHeader.css';
import '../styles/Page.css';


export default function SubHeader() {
    return (
        <>
            <div className='sub-header'>
                {
                    options.map((option) =>
                        <NavLink to={option.title} className={({ isActive }) => { return isActive ? "activeLink" : "" }}>
                            {({ isActive }) => {
                                return isActive ? <div className={'sub-header-items ' + option.title} >
                                    <div className={"sub-header-images " + option.title + "-active"}></div>
                                    <p>{option.title}</p>
                                </div> : <div className={'sub-header-items ' + option.title}>
                                    <div className={"sub-header-images " + option.title + "-inactive"}></div>
                                    <p>{option.title}</p>
                                </div>;
                            }}
                        </NavLink>

                    )
                }
            </div >
        </>
    )
}
