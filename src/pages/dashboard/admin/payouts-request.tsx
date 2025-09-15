import { useState } from 'react'
import { formatCurrency, formatDate } from '../../../utils/number-formatter'
import DataTable from '../../../components/ui/data-table'

const payoutRequests = [
    {
        id: 'REQ001',
        merchant: 'Prince Godson Stores',
        email: 'contact@princegodson.store',
        amount: formatCurrency(120000, { short: false }),
        date: formatDate('2025-07-20T10:30:00Z'),
        status: 'pending',
    },
    {
        id: 'REQ002',
        merchant: 'Austin Ameh Supplies',
        email: 'hello@austinameh.com',
        amount: formatCurrency(75000, { short: false }),
        date: formatDate('2025-07-19T14:45:00Z'),
        status: 'approved',
    },
    {
        id: 'REQ003',
        merchant: 'John Doe Collections',
        email: 'john@collections.com',
        amount: formatCurrency(49800, { short: false }),
        date: formatDate('2025-07-18T09:20:00Z'),
        status: 'rejected',
    },
]
const PayoutRequests = () => {
    const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all')

    const filteredRequests =
        filter === 'all'
            ? payoutRequests
            : payoutRequests.filter((req) => req.status === filter)

    return (
        <div className="px-4 py-6 space-y-6 bg-gray-50 min-h-screen">
            <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">Payout Requests</h1>
                    <p className="text-sm text-gray-500">
                        Review and manage payout requests submitted by merchants
                    </p>
                </div>
                <div className="flex gap-2">
                    {['all', 'pending', 'approved', 'rejected'].map((s) => (
                        <button
                            key={s}
                            className={`px-3 py-1 rounded-full text-sm capitalize transition ${filter === s
                                ? 'bg-brand-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            onClick={() => setFilter(s as any)}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>

            <div className="overflow-x-auto">
                <DataTable
                    cols={['Merchants', 'Email', 'Amount', 'Requested At', 'Status']}
                    keys={['merchant', 'email', 'amount', 'date', 'status']}
                    statuses={[
                        { label: 'pending', state: 'pending' },
                        { label: 'approved', state: 'approved' },
                        { label: 'rejected', state: 'rejected' },
                    ]}
                    data={filteredRequests}
                    action={true}
                    onView={() => { window.location.href = '/admin/payout/2' }}
                />

            </div>
        </div>
    )
}

export default PayoutRequests
