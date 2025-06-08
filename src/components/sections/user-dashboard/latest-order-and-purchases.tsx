import React from 'react'
import OrderAndPurchasesTable from '../../features/dashboard/order-and-purchase-table'

const LatestOrderAndPurchase = () => {
    const orders = [
        { id: 1, order: "Quality Blue color Nike shoe with a fancy Light blue printing indicator on the foot", imageUrl: "/assets/users/avatar-1.jpg", productCode: "000123", quantity: 2, amount: 3900, store: "PG Stores", phoneNumber: "09037494084", date: "3/18/2025 - 6:39 AM" },
        { id: 2, order: "Quality Blue color Nike shoe with a fancy Light blue printing indicator on the foot", imageUrl: "/assets/users/avatar-2.jpg", productCode: "000123", quantity: 2, amount: 3900, store: "PG Stores", phoneNumber: "09037494084", date: "3/18/2025 - 6:39 AM" }
    ]

    return (
        <div>
            <OrderAndPurchasesTable title="Latest Orders & Purchases" orders={orders} />
        </div>
    )
}

export default LatestOrderAndPurchase