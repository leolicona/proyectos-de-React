import { useState, useEffect, useRef } from "react";

function useInputValidate ({search}) {

    const [searchError, setSearchError] = useState(null) 
    const isFirstInput = useRef(true)

    useEffect(()=> {

        if(isFirstInput.current){
          isFirstInput.current = search === '';
          return
        }
    
        if (search === " ") { 
          setSearchError('No se puede buscar una película vacía')
          return
        }
    
        if (search.match(/^\d+$/)) { 
          setSearchError('No se puede buscar una película con un número')
          return
        }
    
        if (search.length < 3) {
          setSearchError('La búsqueda debe tener al menos 3 caracteres')
          return
        }

        setSearchError(null)

      }, [search])

    return [searchError]
}

export default useInputValidate;
