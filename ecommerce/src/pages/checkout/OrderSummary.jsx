import dayjs from "dayjs"
import { formatMoney } from "../../utils/money"
import { DeliveryOptions } from "./DeliveryOptions"

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
                                        Quantity: <span className="quantity-label">{c.quantity}</span>
                                    </span>
                                    <span className="update-quantity-link link-primary">
                                        Update
                                    </span>
                                    <span className="delete-quantity-link link-primary">
                                        Delete
                                    </span>
                                </div>
                            </div>
                            <DeliveryOptions cartDeliveryOptionId={c.deliveryOptionId} cartId={c.id}  deliveryOptions={deliveryOptions}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}