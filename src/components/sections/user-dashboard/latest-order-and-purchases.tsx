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
                setOrders(data.data)
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
                orders={orders || []}
                isLoading={loading}
                isEmpty={!loading && orders?.length === 0}
            />
        </div>
    )
}

export default LatestOrderAndPurchase