import {
    BarChart,
    Bar,
    LineChart,
    Line,
    PieChart,
    Pie,
    Tooltip,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Cell,
    Legend,
} from 'recharts';
import { Users, Store, ShoppingCart, DollarSign, Activity, Briefcase, Clock } from 'lucide-react';
import { formatCurrency } from '../../../utils/number-formatter';

const pieChartColors = ["#22c55e", "#0ea5e9", "#f97316", "#a855f7", "#facc15", "#64748b", "#14b8a6", "#e11d48"];

const SuperAdminDashboard = () => {
    const metrics = [
        { label: 'Total Stores', icon: Store, value: 1200 },
        { label: 'Total Users', icon: Users, value: 5800 },
        { label: 'Total Orders', icon: ShoppingCart, value: 15000 },
        { label: 'Total Revenue', icon: DollarSign, value: 54000000 },
    ];

    const revenueData = [
        { month: 'Jan', revenue: 4000000 },
        { month: 'Feb', revenue: 3000000 },
        { month: 'Mar', revenue: 4500000 },
        { month: 'Apr', revenue: 3500000 },
        { month: 'May', revenue: 5000000 },
        { month: 'Jun', revenue: 4700000 },
    ];

    const topStores = [
        { name: 'Bello Mart', revenue: 2300000 },
        { name: 'Techify', revenue: 1800000 },
        { name: 'Shopeasy', revenue: 1500000 },
        { name: 'Glamour Hub', revenue: 1200000 },
        { name: 'QuickGroceries', revenue: 900000 },
    ];

    const storeTypes = [
        { name: 'Retail', value: 40 },
        { name: 'Wholesale', value: 25 },
        { name: 'Digital', value: 20 },
        { name: 'Services', value: 15 },
    ];

    const recentActivities = [
        {
            icon: Activity,
            title: 'User Login',
            detail: 'A new user signed in to their account.',
            time: '2 mins ago',
        },
        {
            icon: Briefcase,
            title: 'New Store Registered',
            detail: 'GadgetPlus was approved and added to the platform.',
            time: '10 mins ago',
        },
        {
            icon: DollarSign,
            title: 'Payment Received',
            detail: '₦15,000 payment processed for Shopeasy.',
            time: '30 mins ago',
        },
        {
            icon: Clock,
            title: 'Subscription Expired',
            detail: 'Glamour Hub subscription expired today.',
            time: '1 hour ago',
        },
    ];

    return (
        <div className="p-6 space-y-10">
            {/* Platform Overview */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((metric, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-2xl shadow border p-5 flex items-center gap-4 hover:shadow-md transition"
                    >
                        <metric.icon className="w-6 h-6 text-brand-600" />
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">
                                {metric.label}
                            </p>
                            <p className="text-2xl font-bold text-gray-900">{formatCurrency(metric.value)}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Revenue Overview with Actions */}
            <div className="bg-white rounded-2xl shadow border px-6 py-5 space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-700">Revenue Trends</h3>
                    <button className="text-sm text-brand-600 hover:underline">View Full Report</button>
                </div>
                <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={revenueData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                            <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
                            <YAxis tickFormatter={(v) => `₦${formatCurrency(v)}`} stroke="#9ca3af" fontSize={12} />
                            <Tooltip formatter={(val) => `₦${val.toLocaleString()}`} />
                            <Line type="monotone" dataKey="revenue" stroke="#16a34a" strokeWidth={2} dot={{ r: 4 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Store Insights Section */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2 bg-white rounded-2xl shadow border px-6 py-5">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Top Performing Stores</h3>
                    <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={topStores} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" tickFormatter={(v) => `₦${v / 1000}k`} />
                                <YAxis type="category" dataKey="name" />
                                <Tooltip formatter={(v) => `₦${v.toLocaleString()}`} />
                                <Bar dataKey="revenue" fill="#22c55e" barSize={18} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow border px-6 py-5">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Store Type Distribution</h3>
                    <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={storeTypes}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    label
                                >
                                    {storeTypes.map((_, i) => (
                                        <Cell key={i} fill={pieChartColors[i % pieChartColors.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend layout="horizontal" align="center" verticalAlign="bottom" />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Recent Activity Feed */}
            <div className="bg-white rounded-2xl shadow border px-6 py-5 space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">Recent Activities</h3>
                <ul className="space-y-3">
                    {recentActivities.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <item.icon className="w-5 h-5 mt-1 text-brand-600" />
                            <div>
                                <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                                <p className="text-xs text-gray-500">{item.detail}</p>
                                <p className="text-xs text-gray-400 mt-0.5">{item.time}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SuperAdminDashboard;
