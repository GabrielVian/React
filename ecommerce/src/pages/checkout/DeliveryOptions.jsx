import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";


export function DeliveryOptions({deliveryOptions, cartDeliveryOptionId, cartId}) {
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

                return (
                    <div key={d.id} className="delivery-option">
                        <input type="radio"
                            checked={d.id === cartDeliveryOptionId}
                            className="delivery-option-input"
                            name={`delivery-option-${cartId}`} />
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