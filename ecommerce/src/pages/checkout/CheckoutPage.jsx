import './CheckoutPage.css';
import { CheckoutHeader } from './CheckoutHeader';
import { formatMoney } from '../../utils/money';
import axios from 'axios';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs'

function CheckoutPage({ cart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);

    useEffect(() => {
        axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            .then((response) => {
                setDeliveryOptions(response.data);
            });

        axios.get('/api/payment-summary')
            .then((response) => {
                console.log(response.data);
                setPaymentSummary({
                    totalItems: 3,
                    productCostCents: 4275,
                    shippingCostCents: 499,
                    totalCostBeforeTaxCents: 4774,
                    taxCents: 477,
                    totalCostCents: 5251
                });
                // setPaymentSummary(response.data);
            });
    }, [])

    return (
        <>
            <title>Checkout</title>
            <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
            <CheckoutHeader />
            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
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
                                                            checked={d.id === c.deliveryOptionId}
                                                            className="delivery-option-input"
                                                            name={`delivery-option-${c.id}`} />
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
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="payment-summary">
                        <div className="payment-summary-title">
                            Payment Summary
                        </div>
                        {paymentSummary && (
                            <>
                                <div className="payment-summary-row">
                                    <div>Items ({paymentSummary?.totalItems}):</div>
                                    <div className="payment-summary-money">{formatMoney(paymentSummary?.productCostCents)}</div>
                                </div>

                                <div className="payment-summary-row">
                                    <div>Shipping &amp; handling:</div>
                                    <div className="payment-summary-money">{formatMoney(paymentSummary?.shippingCostCents)}</div>
                                </div>

                                <div className="payment-summary-row subtotal-row">
                                    <div>Total before tax:</div>
                                    <div className="payment-summary-money">{formatMoney(paymentSummary?.totalCostBeforeTaxCents)}</div>
                                </div>

                                <div className="payment-summary-row">
                                    <div>Estimated tax (10%):</div>
                                    <div className="payment-summary-money">{formatMoney(paymentSummary?.taxCents)}</div>
                                </div>

                                <div className="payment-summary-row total-row">
                                    <div>Order total:</div>
                                    <div className="payment-summary-money">{formatMoney(paymentSummary?.totalCostCents)}</div>
                                </div>

                                <button className="place-order-button button-primary">
                                    Place your order
                                </button>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutPage
