import './TrackingPage.css';
import {Header} from '../components/Header'; 
import { Link } from 'react-router';
import { useParams } from 'react-router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

function TrackingPage({ cart }) {
    const {orderId, productId} = useParams();
    const [order, setOrder] = useState(null);

    useEffect(()=>{
        const fetchTrackingData = async () =>{
            const response = await axios.get(`/api/orders/${orderId}?expand=products`)
            setOrder(response.data)
        }
        fetchTrackingData()
    },[orderId])

    if(!order) return null;
    const p = order.products.find((i) => {
        return i.productId === productId
    })

    const totalDeliveryTimeMs = p.estimatedDeliveryTimeMs - order.orderTimeMs;
    const timePassedMs  = (dayjs().valueOf() - order.orderTimeMs );
    let deliveryProgress = (timePassedMs / totalDeliveryTimeMs) * 100 ;

    if(deliveryProgress > 100) deliveryProgress = 100;

    return (
        <>
            <title>Tracking</title>
            <link rel="icon" type="image/svg+xml" href="tracking-favicon.png" />

            <Header cart={cart} /> 

            <div className="tracking-page">
                <div className="order-tracking">
                    <Link className="back-to-orders-link link-primary" to="/orders">
                        View all orders
                    </Link>

                    <div className="delivery-date">
                        {(deliveryProgress >= 100) && 'Delivered on '}
                        {(deliveryProgress < 100) && 'Arriving on '}

                        
                        {dayjs(p.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                    </div>

                    <div className="product-info">
                        {p.product.name}
                    </div>

                    <div className="product-info">
                        Quantity: {p.quantity}
                    </div>

                    <img className="product-image" src={p.product.image} />

                    <div className="progress-labels-container">
                        <div className={"progress-label "+(deliveryProgress < 33 ? "current-status" : "")}>
                            Preparing
                        </div>
                        <div className={"progress-label "+((deliveryProgress >= 33 && deliveryProgress <100) ? "current-status" : "")}>
                            Shipped
                        </div>
                        <div className={"progress-label "+(deliveryProgress === 100 ? "current-status" : "")}>
                            Delivered
                        </div>
                    </div>
                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{width: `${deliveryProgress}%`}}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrackingPage;
