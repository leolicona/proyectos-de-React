import React, { useEffect, useState, useMemo } from 'react';

const useFilterData = (data, sort) => {
    //const [filteredData, setFilteredData] = useState();

    const sortedData = useMemo(() => {

        console.log("Ejecute SortedData");
        return sort 
            ? [...data].sort((a, b) => a.title.localeCompare(b.title))
            : data;
    },[data])

    return [ sortedData]

}

export default useFilterData;