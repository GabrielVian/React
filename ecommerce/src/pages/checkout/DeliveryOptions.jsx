import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
import axios from "axios";

export function DeliveryOptions({ deliveryOptions, cartDeliveryOptionId, cartItem, loadCart }) {
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {deliveryOptions.map((d) => {
                let priceString = 'FREE Shipping';
                if (d.priceCents > 0) {
                    priceString = formatMoney(d.priceCents);
                }
                const updateDeliveryOption = async () => {
                    await axios.put(`/api/cart-items/${cartItem.productId}`, {
                        deliveryOptionId: d.id
                    })
                    loadCart();
                }
                return (
                    <div key={d.id} className="delivery-option" onClick={updateDeliveryOption}>
                        <input type="radio"
                            checked={d.id === cartDeliveryOptionId}
                            className="delivery-option-input"
                            name={`delivery-option-${cartItem.id}`} 
                            onChange={()=>{}}
                            />
                        <div>
                            <div className="delivery-option-date">
                                {dayjs(d.estimatedDeliveryTimeMs).format('dddd, MMMM D')}

                            </div>
                            <div className="delivery-option-price">
                                {priceString}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}