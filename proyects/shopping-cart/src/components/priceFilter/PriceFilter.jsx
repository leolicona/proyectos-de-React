import {useId} from 'react'
import './priceFilterStyles.css'

function PriceFilter ({value, setPriceFilter}) {
    const inputId = useId()
    return (  
        <input className="input-price" type="text" id={inputId} placeholder="Precio minimo"
            value={value}
            onChange={(e) => setPriceFilter(e)}
        /> 
    )
}

export default PriceFilter