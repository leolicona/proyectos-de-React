import CartButton from "../cardButton/CartButton"
import './headerStyles.css'
function Header() {
    return ( 
        <div className="header_container">
            <div className="logo">
                <h2>The Fake Store </h2> 
            </div>
            <CartButton/>
        </div>
     );
}

export default Header ;