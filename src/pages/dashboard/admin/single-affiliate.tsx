import Button from "../../../components/common/Button"
import DataTable from "../../../components/ui/data-table"

export default function SingleAffiliate() {
    const affiliate = {
        name: 'Austin Ameh',
        email: 'austin@example.com',
        status: 'active',
        referrals: 45,
        earnings: '₦85,000',
        pending: '₦10,000',
    }

    const referralActivities = [
        { name: 'Prince Godson', date: '2025-06-10', amount: '₦5,000' },
        { name: 'John Doe', date: '2025-06-15', amount: '₦10,000' },
        { name: 'Prince Godson', date: '2025-07-01', amount: '₦7,500' },
    ]

    const payoutHistory = [
        { amount: '₦40,000', status: 'Paid', date: '2025-06-20' },
        { amount: '₦35,000', status: 'Pending', date: '2025-07-10' },
    ]

    const handleSuspendToggle = () => {
        // handle status change
    }

    return (
        <div className="max-w-5xl mx-auto p-6 space-y-8">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-semibold text-neutral-900">{affiliate.name}</h1>
                    <p className="text-sm text-neutral-500">{affiliate.email}</p>
                </div>
                <Button
                    variant={affiliate.status === 'active' ? 'outline' : 'primary'}
                    onClick={handleSuspendToggle}
                >
                    {affiliate.status === 'active' ? 'Suspend' : 'Reinstate'}
                </Button>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <StatCard label="Referrals" value={affiliate.referrals} />
                <StatCard label="Total Earnings" value={affiliate.earnings} highlight="green" />
                <StatCard label="Pending Payout" value={affiliate.pending} highlight="yellow" />
            </div>

            {/* Referral Activities */}
            <div className="bg-white rounded-xl shadow-sm p-5 space-y-3">
                <h2 className="text-lg font-semibold text-neutral-800">Referral Activities</h2>
                <DataTable
                    cols={['Name', 'Date', 'Amount']}
                    keys={['name', 'date', 'amount']}
                    data={referralActivities}
                    serialized
                />
            </div>

            {/* Payout History */}
            <div className="bg-white rounded-xl shadow-sm p-5 space-y-3">
                <h2 className="text-lg font-semibold text-neutral-800">Payout History</h2>
                <DataTable
                    cols={['Amount', 'Status', 'Date']}
                    keys={['amount', 'status', 'date']}
                    statuses={[{ label: 'Paid', state: 'success' }, { label: 'Pending', state: 'pending' }]}
                    data={payoutHistory}
                    serialized
                />
            </div>
        </div>
    )
}

function StatCard({ label, value, highlight }: { label: string; value: string | number; highlight?: 'green' | 'yellow' }) {
    const color =
        highlight === 'green'
            ? 'text-green-600'
            : highlight === 'yellow'
                ? 'text-yellow-600'
                : 'text-neutral-900'
    return (
        <div className="bg-white rounded-xl shadow-sm p-4">
            <p className="text-sm text-neutral-500">{label}</p>
            <p className={`text-xl font-semibold ${color}`}>{value}</p>
        </div>
    )
}
