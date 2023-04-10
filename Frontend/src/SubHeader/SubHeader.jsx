import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import UseFetch from '../Utils/UseFetch';
import { subHeaderItems } from '../Utils/APIs';
import './SubHeader.css';

export default function SubHeader() {

    const { data: options, error } = UseFetch(subHeaderItems);

    return (
        <>
            <div className='sub-header'>
                {
                    error ? <p>Error Occured while loading data</p> :
                        options?.map((option) =>
                            <NavLink to={option.title} className={({ isActive }) => { return isActive ? "activeLink" : "" }} key={option.title}>
                                {({ isActive }) => {
                                    return isActive ? <div className={'sub-header-items ' + option.title} >
                                        <div className={"sub-header-images " + option.title + "-active"}></div>
                                        <p>{option.title}</p>
                                    </div> : <div className={'sub-header-items ' + option.title}>
                                        <div className={"sub-header-images " + option.title + "-inactive"}></div>
                                        <motion.p whileHover={{ scale: 1.2 }}>{option.title}</motion.p>
                                    </div>;
                                }}
                            </NavLink>
                        )
                }
            </div >
        </>
    )
}
