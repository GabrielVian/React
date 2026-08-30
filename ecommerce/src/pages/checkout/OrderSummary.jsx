import CartItemDetails from "./CartItemDetails"
import DeliveryDate from "./DeliveryDate"

export function OrderSummary({deliveryOptions, cart, loadCart}) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((c) => {
                return (
                    <div className="cart-item-container" key={c.id}>
                        <DeliveryDate deliveryOptions={deliveryOptions} c={c}/>
                        <CartItemDetails c={c} deliveryOptions={deliveryOptions} cart={cart} loadCart={loadCart}/>
                    </div>
                )
            })}
        </div>
    )
}