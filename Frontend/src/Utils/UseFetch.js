import { useState, useEffect } from 'react';
import axios from "axios";
function UseFetch(url) {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        axios.get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                setError(err);
            })
    }, [url]);

    return { data, error };
}

export default UseFetch;