import dayjs from "dayjs"
import CartItemDetails from "./CartItemDetails"

export function OrderSummary({deliveryOptions, cart}) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((c) => {
                const selectedDeliveryOption = deliveryOptions.find((d) => {
                    return d.id === c.deliveryOptionId
                })
                return (
                    <div className="cart-item-container" key={c.id}>
                        <div className="delivery-date">
                            Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                        </div>
                        <CartItemDetails c={c}/>

                    </div>
                )
            })}
        </div>
    )
}