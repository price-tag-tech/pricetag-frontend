import React from 'react'
import OrderAndPurchasesTable from '../../../components/features/dashboard/order-and-purchase-table'

const OrdersAndPurchasesPage = () => {
    const orders = [
        { id: 1, order: "Quality Blue color Nike shoe with a fancy Light blue printing indicator on the foot", imageUrl: "/assets/users/avatar-1.jpg", productCode: "000123", quantity: 2, amount: 3900, store: "PG Stores", phoneNumber: "09037494084", date: "3/18/2025 - 6:39 AM" },
        { id: 2, order: "Quality Blue color Nike shoe with a fancy Light blue printing indicator on the foot", imageUrl: "/assets/users/avatar-1.jpg", productCode: "000123", quantity: 2, amount: 3900, store: "PG Stores", phoneNumber: "09037494084", date: "3/18/2025 - 6:39 AM" },
        { id: 3, order: "Quality Blue color Nike shoe with a fancy Light blue printing indicator on the foot", imageUrl: "/assets/users/avatar-2.jpg", productCode: "000123", quantity: 2, amount: 3900, store: "PG Stores", phoneNumber: "09037494084", date: "3/18/2025 - 6:39 AM" }
    ]

    return (
        <div className='space-y-8'>
            <div className='bg-gradient-to-r from-brand-50 to-green-50 rounded-2xl p-6 border border-brand-200'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <div className='w-16 h-16 bg-gradient-to-br from-brand-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg'>
                            <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z' clipRule='evenodd' />
                            </svg>
                        </div>
                        <div>
                            <h1 className='text-2xl md:text-3xl font-bold text-gray-900 mb-1'>
                                Orders & Purchases
                            </h1>
                            <p className='text-gray-600'>
                                View and manage all your order history and purchases
                            </p>
                        </div>
                    </div>
                    <div className='hidden md:flex items-center gap-3'>
                        <div className='bg-brand-100 text-brand-700 px-3 py-1.5 rounded-full text-sm font-medium'>
                            {orders.length} Total Orders
                        </div>
                    </div>
                </div>
            </div>

            <OrderAndPurchasesTable title="All Orders & Purchases" orders={orders} />
        </div>
    )
}

export default OrdersAndPurchasesPage