import { useState } from "react";
import "./searchBarStyles.css"

function SearchBar ({value, setSearch}) {
    return (
        <input className="search-bar" type="text" value={value} placeholder="Buscar" 
            onChange={(e) =>  setSearch (e)} 
        /> 
    )
}

export default SearchBar