import React from 'react'
import { useRouteError, useNavigate } from 'react-router-dom';
export default function Error() {

    const navigate = useNavigate();
    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, This Service Page Does not Exists.</p>
            <button onClick={() => { navigate(-1) }}>Go Back</button>
        </div>
    )
}
