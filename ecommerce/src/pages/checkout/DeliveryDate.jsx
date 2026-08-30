import dayjs from "dayjs"

export default function DeliveryDate({deliveryOptions, c}) {
    const selectedDeliveryOption = deliveryOptions.find((d) => {
        return d.id === c.deliveryOptionId
    })
    return (
        <div className="delivery-date">
            Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
        </div>
    )
}
