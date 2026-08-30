import OrderHeader from "./OrderHeader"
import OrderDetailsGrid from "./OrderDetailsGrid"

export default function OrdersGrid({orders, loadCart}) {
    return (
        <div className="orders-grid">
            {orders && (
                orders.map((o) => {
                    return (
                        <div className="order-container" key={o.id}>
                            <OrderHeader o={o}/>
                            <OrderDetailsGrid o={o} loadCart={loadCart}/>
                        </div>
                    )
                })
            )}
        </div>
    )
}
