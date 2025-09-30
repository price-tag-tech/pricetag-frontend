import { useState } from 'react'
import DataTable from '../../../components/ui/data-table'
import Button from '../../../components/common/Button'

const previousExpenses = [
    { title: 'Domain Renewal', category: 'Operations', amount: '₦8,000', date: '2024-07-01' },
    { title: 'Facebook Ads', category: 'Marketing', amount: '₦30,000', date: '2024-07-10' },
    { title: 'Cloud Storage', category: 'Software', amount: '₦12,000', date: '2024-07-15' },
]

export default function ExpensesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="p-4 md:p-6 space-y-8">
            <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-gray-900">Expenses Management</h1>
                    <p className="text-gray-500 text-sm">Log and manage all outgoing business payments</p>
                </div>
                <Button className="w-full md:w-auto" onClick={() => setIsModalOpen(true)}>Add New Expense</Button>
            </header>

            <div className="bg-white rounded-xl shadow-sm border p-4 space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">Previous Expenses</h2>
                <DataTable
                    cols={['Title', 'Category', 'Amount', 'Date']}
                    keys={['title', 'category', 'amount', 'date']}
                    data={previousExpenses}
                />
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800">New Expense</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-600">Title</label>
                                <input type="text" className="w-full border rounded-md px-3 py-2 text-sm" placeholder="e.g. Software Subscription" />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600">Category</label>
                                <select className="w-full border rounded-md px-3 py-2 text-sm">
                                    <option>Operations</option>
                                    <option>Marketing</option>
                                    <option>Software</option>
                                    <option>Miscellaneous</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600">Amount (₦)</label>
                                <input type="number" className="w-full border rounded-md px-3 py-2 text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600">Date</label>
                                <input type="date" className="w-full border rounded-md px-3 py-2 text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600">Notes</label>
                                <textarea className="w-full border rounded-md px-3 py-2 text-sm" rows={2} placeholder="Optional notes..." />
                            </div>
                            <div className="flex justify-end gap-2">
                                <Button size="sm" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                                <Button size="sm" type="submit">Save Expense</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
