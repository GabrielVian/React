import './Header.css';
// import {Link} from 'react-router';
import {NavLink} from 'react-router';
import searchIcon from '../assets/images/search-icon.png';
import { useState } from 'react';

export function Header({cart}) {
    const [search, setSearch] = useState('');
    let totalQuantity = 0;
    cart.forEach((cartItem)=>{
        totalQuantity+=cartItem.quantity;
    })
    const handleChangeSearch = (event) => {
        const text = event.target.value
        setSearch(text)
    }
    const searchProducts = ()=>{
        
    }

    return (
        <div className="header">
            <div className="left-section">
                <NavLink to="/" className="header-link">
                    <img className="logo"
                        src="images/logo-white.png" />
                    <img className="mobile-logo"
                        src="images/mobile-logo-white.png" />
                </NavLink>
            </div>

            <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Search" value={search} onChange={handleChangeSearch}/>

                <button className="search-button" onClick={() => {searchProducts}}>
                    <img className="search-icon" src={searchIcon} />
                </button>
            </div>

            <div className="right-section">
                <NavLink className="orders-link header-link" to="/orders">

                    <span className="orders-text">Orders</span>
                </NavLink>

                <NavLink className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src="images/icons/cart-icon.png" />
                    <div className="cart-quantity">{totalQuantity}</div>
                    <div className="cart-text">Cart</div>
                </NavLink>
            </div>
        </div>
    )
}