import { Fragment } from "react";
import { formatMoney } from "../../utils/money";
import axios from "axios";
export default function CartItemDetails({c}) {
    function deleteItem(){
        axios.delete(`/api/cart-items/${c.product.id}`)
    }
    return (
        <Fragment>
            <img className="product-image"
                src={c.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {c.product.name}
                </div>
                <div className="product-price">
                    {formatMoney(c.product.priceCents)}
                </div>
                <div className="product-quantity">
                    <span>
                        Quantity: <span className="quantity-label">{c.quantity}</span>
                    </span>
                    <span className="update-quantity-link link-primary">
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary" onClick={deleteItem}>
                        Delete
                    </span>
                </div>
            </div>
        </Fragment>
    )
}
