import { useEffect, useState } from 'react'
import OrderAndPurchasesTable from '../../features/dashboard/order-and-purchase-table'
import { useAuth } from '../../../contexts/AuthContext'
import { myOrders } from '../../../services/orders'

const LatestOrderAndPurchase = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState<Record<string, any>[]>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchOrders = async () => {
            setLoading(true)
            try {
                const data = await myOrders()
                const flattenedPurchases = data.data?.flatMap((order: any) =>
                    order.items.map((item: any) => ({
                        id: item.id,
                        orderId: order.id,
                        order: item.product.name,
                        imageUrl: item.product.imageUrl,
                        productCode: item.product.id.substring(0, 8).toUpperCase(),
                        quantity: item.quantity,
                        amount: parseFloat(item.price) * item.quantity,
                        store: 'Store',
                        phoneNumber: order.user.phone,
                        date: new Date(order.createdAt).toLocaleString(),
                        status: order.status,
                        paymentMethod: order.paymentMethod,
                        total: parseFloat(order.total)
                    }))
                )
                setOrders(flattenedPurchases?.slice(0, 5))
            } finally {
                setLoading(false)
            }
        }
        fetchOrders()
    }, [user])
    return (
        <div>
            <OrderAndPurchasesTable
                title="Latest Orders & Purchases"
                orders={orders?.slice(0, 5) || []}
                isLoading={loading}
            />
        </div>
    )
}

export default LatestOrderAndPurchase