import { Fragment } from "react"
import dayjs from "dayjs"
import { Link } from "react-router"

export default function OrderDetailsGrid({o}) {
    return (
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
                            <Link to={`/tracking/${o.id}/${p.productId}`}>
                                <button className="track-package-button button-secondary">
                                    Track package
                                </button>
                            </Link>
                        </div>
                    </Fragment>
                )
            }))}
        </div>
    )
}
