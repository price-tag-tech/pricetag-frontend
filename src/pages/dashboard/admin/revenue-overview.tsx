import { useState } from 'react'
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import DataTable from '../../../components/ui/data-table'

const COLORS = ['#22C55E', '#16A34A', '#15803D', '#166534']

const revenueData = [
    { name: 'Subscriptions', value: 4000 },
    { name: 'Store Earnings', value: 2400 },
    { name: 'Affiliate Earnings', value: 1400 },
    { name: 'Other', value: 1000 },
]

const trendData = [
    { name: 'Jan', revenue: 3000 },
    { name: 'Feb', revenue: 4000 },
    { name: 'Mar', revenue: 3500 },
    { name: 'Apr', revenue: 4200 },
    { name: 'May', revenue: 4600 },
    { name: 'Jun', revenue: 4900 },
]

const breakdownTable = [
    { source: 'Subscriptions', amount: '₦4,000', growth: '+8%' },
    { source: 'Store Earnings', amount: '₦2,400', growth: '+5%' },
    { source: 'Affiliate Earnings', amount: '₦1,400', growth: '+3%' },
    { source: 'Other', amount: '₦1,000', growth: '+2%' },
]

const timeFilters = ['Last 7 days', 'Last 30 days', 'Last 90 days']

export default function RevenueOverview() {
    const [filter, setFilter] = useState('Last 30 days')

    return (
        <div className="p-4 sm:p-6 space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Revenue Overview</h2>
                <div className="relative">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                    >
                        {timeFilters.map((option) => (
                            <option key={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <p className="text-sm text-gray-500">Total Revenue</p>
                    <p className="text-xl font-bold text-green-600">₦8,800</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <p className="text-sm text-gray-500">Subscriptions</p>
                    <p className="text-xl font-bold text-green-600">₦4,000</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <p className="text-sm text-gray-500">Store Earnings</p>
                    <p className="text-xl font-bold text-green-600">₦2,400</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <p className="text-sm text-gray-500">Affiliate Earnings</p>
                    <p className="text-xl font-bold text-green-600">₦1,400</p>
                </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <h3 className="text-sm font-medium mb-4">Revenue Trend (Monthly)</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={trendData}>
                            <XAxis dataKey="name" stroke="#888" fontSize={12} />
                            <YAxis stroke="#888" fontSize={12} />
                            <Tooltip />
                            <Line type="monotone" dataKey="revenue" stroke="#22C55E" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                    <p className="text-xs text-center text-gray-500 mt-2">Monthly Naira revenue for the selected period</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4">
                    <h3 className="text-sm font-medium mb-4">Revenue Sources Breakdown</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={revenueData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                label
                            >
                                {revenueData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                    <p className="text-xs text-center text-gray-500 mt-2">Distribution of Naira revenue sources</p>
                </div>
            </div>

            {/* Revenue Breakdown Table */}
            <div className="bg-white rounded-lg shadow-sm p-4">
                <h3 className="text-sm font-medium mb-4">Detailed Breakdown</h3>
                <DataTable
                    cols={['Source', 'Amount', 'Growth']}
                    keys={['source', 'amount', 'growth']}
                    data={breakdownTable}
                />
            </div>Ma
        </div>
    )
}
