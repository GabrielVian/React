import dayjs from "dayjs"
import { formatMoney } from "../../utils/money"
import { Fragment } from "react"
import { Link } from "react-router"

export default function OrdersGrid({orders}) {
    return (
        <div className="orders-grid">
            {orders && (
                orders.map((o) => {
                    return (
                        <div className="order-container" key={o.id}>
                            <div className="order-header">
                                <div className="order-header-left-section">
                                    <div className="order-date">
                                        <div className="order-header-label">Order Placed:</div>
                                        <div>{dayjs(o.orderTimeMs).format('dddd, MMMM D')}</div>
                                    </div>
                                    <div className="order-total">
                                        <div className="order-header-label">Total:</div>
                                        <div>{formatMoney(o.totalCostCents)}</div>
                                    </div>
                                </div>
                                <div className="order-header-right-section">
                                    <div className="order-header-label">Order ID:</div>
                                    <div>{o.id}</div>
                                </div>
                            </div>
                            <div className="order-details-grid">
                                {o.products && (o.products.map((p) => {
                                    return (
                                        <Fragment key={p.productId}>
                                            <div className="product-image-container">
                                                <img src={p.product.image} />
                                            </div>
                                            <div className="product-details">
                                                <div className="product-name">
                                                    {p.product.name}
                                                </div>
                                                <div className="product-delivery-date">
                                                    {dayjs(p.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                                                </div>
                                                <div className="product-quantity">
                                                    Quantity: {p.quantity}
                                                </div>
                                                <button className="buy-again-button button-primary">
                                                    <img className="buy-again-icon" src="images/icons/buy-again.png" />
                                                    <span className="buy-again-message">Add to Cart</span>
                                                </button>
                                            </div>
                                            <div className="product-actions">
                                                <Link to="/tracking">
                                                    <button className="track-package-button button-secondary">
                                                        Track package
                                                    </button>
                                                </Link>
                                            </div>
                                        </Fragment>
                                    )
                                }))}
                            </div>
                        </div>
                    )
                })
            )}
        </div>
    )
}
