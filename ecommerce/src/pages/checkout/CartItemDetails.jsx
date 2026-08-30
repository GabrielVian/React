import { formatMoney } from "../../utils/money";
import axios from "axios";
import { DeliveryOptions } from "./DeliveryOptions";
import { useState } from "react";
export default function CartItemDetails({c,deliveryOptions, loadCart}) {
    const [updated, setUpdated] = useState(false); 
    const [quantity, setQuantity] = useState(c.quantity)
    async function deleteItem(){
        await axios.delete(`/api/cart-items/${c.product.id}`)
        await loadCart();
    }
    const changeUpdate = async ()=>{
        if(updated){
            await axios.put(`/api/cart-items/${c.product.id}`, {
                quantity: Number(quantity)
            });
            await loadCart();
        }
        setUpdated(!updated)
    }
    return (
        <div className="cart-item-details-grid">
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
                        Quantity: 
                        {updated && 
                            <input type="text" name="" id="" style={{width: '50px'}} value={quantity} onChange={(event)=>{
                                const q = event.target.value;
                                setQuantity(q);
                            }}/>
                        }

                        {!updated && 
                            <span className="quantity-label">{c.quantity}</span>
                        }
                    </span>
                    <span className="update-quantity-link link-primary" onClick={changeUpdate}>
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary" onClick={deleteItem}>
                        Delete
                    </span>
                </div>
                
            </div>
            <DeliveryOptions cartDeliveryOptionId={c.deliveryOptionId} deliveryOptions={deliveryOptions} cartItem={c} loadCart={loadCart} />
        </div>
    )
}
