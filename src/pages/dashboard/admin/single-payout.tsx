import Button from "../../../components/common/Button"


const SinglePayoutRequest = () => {
    const payout = {
        id: 'REQ-738291',
        amount: '₦120,000',
        merchant: 'Prince Godson',
        email: 'prince@example.com',
        store: 'Godson Tech',
        date: 'July 22, 2025',
        method: 'Bank Transfer',
        bankName: 'Kuda Bank',
        accountName: 'Prince Godson',
        accountNumber: '1234567890',
        status: 'Pending',
    }

    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-2xl font-semibold text-neutral-900">Payout Request</h1>
                    <p className="text-sm text-neutral-500 mt-1">Requested by <span className="font-medium">{payout.merchant}</span> on {payout.date}</p>
                </div>
                <div className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 font-medium">
                    {payout.status}
                </div>
            </div>

            <div className="bg-white shadow-lg rounded-xl overflow-hidden divide-y divide-neutral-100">
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Info label="Request ID" value={payout.id} />
                    <Info label="Amount" value={payout.amount} />
                    <Info label="Store" value={payout.store} />
                    <Info label="Payment Method" value={payout.method} />
                    <Info label="Email" value={payout.email} />
                </div>

                <div className="p-6">
                    <h2 className="text-sm font-semibold text-neutral-700 mb-3">Bank Information</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <Info label="Bank" value={payout.bankName} />
                        <Info label="Account Name" value={payout.accountName} />
                        <Info label="Account Number" value={payout.accountNumber} />
                    </div>
                </div>

                <div className="p-6 flex flex-col sm:flex-row justify-end gap-4 bg-neutral-50">
                    <Button variant="secondary" className="border-red-500 text-red-500 hover:bg-red-500">Reject</Button>
                    <Button variant="primary">Approve</Button>
                </div>
            </div>
        </div>
    )
}

const Info = ({ label, value }: { label: string, value: string }) => (
    <div>
        <p className="text-neutral-500 text-xs">{label}</p>
        <p className="text-neutral-900 font-medium">{value}</p>
    </div>
)

export default SinglePayoutRequest
