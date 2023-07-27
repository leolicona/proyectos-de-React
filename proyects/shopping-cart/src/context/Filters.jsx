import { createContext, useState } from "react";

// 1. Crear el contexto

export const FilterContext = createContext();

// 2. Crear el componente provider
// El provider se importa en el componente padre de los componentes que van a consumir el contexto

export const FilterProvider = ({ children }) => {
    const [filter, setFilter] = useState({
            search: "",
            price: null,
        });
        
   /*  const data = {
        filter,
        setFilter,
    }; */
        
    return (
        <FilterContext.Provider value={{filter, setFilter}}>{children}</FilterContext.Provider>
    );
    }