import { useState, useEffect } from "react";

function useGetData (url) {
    const [data, setData] = useState([])
    const [ error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        setLoading(true)
        console.log("Fetching data",  url)
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
        .catch(error => setError({error: error.message}))
        .finally (() => setLoading(false))
    
    }, [url])

    return [loading, data, error]
}

export default useGetData;
