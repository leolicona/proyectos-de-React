import { useState, useEffect, useRef, useMemo } from "react";

function useGetData ({url, callback}) {
    console.log(url)
    const [data, setData] = useState([])
    const [ error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const prevSearch = useRef(url)

    useEffect(() => {

    
        if (prevSearch.current === url) return
        prevSearch.current = url 
        setLoading(true)
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("Data", data);
            //const adaptedDaata = callback(data)
            //console.log("Adapted data", adaptedDaata);
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
