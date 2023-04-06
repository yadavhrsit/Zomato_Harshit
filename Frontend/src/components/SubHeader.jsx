import { React } from 'react';
import { NavLink } from 'react-router-dom';
import UseFetch from './UseFetch';
import '../styles/SubHeader.css';
import '../styles/Page.css';


export default function SubHeader() {

    const { data: options, loading: optLoading, error: optError } = UseFetch("http://localhost:5000/auth/getsubheaderitem");

    return (
        <>
            <div className='sub-header'>
                {
                    optLoading ? <p>Loading...</p> : (optError ? <p>Failed to load data from server</p> :
                        options?.map((option) =>
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
                    )
                }
            </div >
        </>
    )
}
