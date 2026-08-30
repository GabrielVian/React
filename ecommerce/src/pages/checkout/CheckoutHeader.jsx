import './CheckoutHeader.css';
import {Link} from 'react-router';
import checkoutLockIcon from '../../assets/images/checkout-lock-icon.png';

export function CheckoutHeader({cart}) {
    let total = 0;
    cart.map((c) => {
        total += c.quantity
    })
    return (
        <div className="checkout-header">
            <div className="header-content">
                <div className="checkout-header-left-section">
                    <Link to="/">
                        <img className="logo" src="images/logo.png" />
                        <img className="mobile-logo" src="images/mobile-logo.png" />
                    </Link>
                </div>

                <div className="checkout-header-middle-section">
                    Checkout (<Link className="return-to-home-link"
                        to="/">{total} items</Link>)
                </div>

                <div className="checkout-header-right-section">
                    <img src={checkoutLockIcon} />
                </div>
            </div>
        </div>
    )
}