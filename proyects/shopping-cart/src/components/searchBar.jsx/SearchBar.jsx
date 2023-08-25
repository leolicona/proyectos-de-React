import { useState } from "react";
import "./searchBarStyles.css"

function SearchBar ({value, name, setSearch}) {
    return (
        <input name={name} className="search-bar" type="text" value={value} placeholder="Buscar" 
            onChange={(e) =>  setSearch (e)} 
        /> 
    )
}

export default SearchBar