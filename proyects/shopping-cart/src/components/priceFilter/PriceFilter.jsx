import './priceFilterStyles.css'

function PriceFilter ({value, setValue}) {
    return (  
        <input className="input-price" type="text" id="price" placeholder="Precio minimo"
            value={value}
            onChange={setValue}
        /> 
    )
}

export default PriceFilter