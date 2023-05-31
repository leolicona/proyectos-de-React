import { useState, useEffect } from "react";

function useGetData ({url, callback}) {
    
    const [data, setData] = useState([])
    const [ error, setError] = useState(null)
    const [loading, setLoading] = useState(null)


    useEffect(() => {
        
        setLoading(true)
        fetch(url)
        .then(response => response.json())
        .then(data => {
            // TODO: hacer callback del adapter
            /* if (callback) { 
                console.log("In callback")
                const dataAdapter = callback(data) 
                console.log("Data adapter")
                setData(dataAdapter) 
             } */ 
            setData(data)
        })
        .catch(error => setError({error: error.message}))
        .finally (() => setLoading(false))
    
    }, [url])

    return [loading, data, error]
}

export default useGetData;
