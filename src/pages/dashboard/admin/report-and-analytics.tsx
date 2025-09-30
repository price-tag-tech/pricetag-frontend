import { FC } from "react";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import DataTable from "../../../components/ui/data-table";

const ReportsAnalytics: FC = () => {
    const metrics = [
        { label: "Total Revenue", value: "₦4,560,000" },
        { label: "Orders", value: "2,431" },
        { label: "Active Stores", value: "324" },
        { label: "New Users", value: "188" },
    ];

    const recentTransactions = [
        {
            name: "Spark Clothing",
            activity: "Upgraded to Pro Plan",
            amount: "₦40,000",
            date: "Jul 14, 2025",
            type: "Subscription",
        },
        {
            name: "GadgetHub",
            activity: "Purchased Sponsored Listing",
            amount: "₦15,000",
            date: "Jul 13, 2025",
            type: "Feature Purchase",
        },
        {
            name: "Glow Beauty",
            activity: "Renewed Starter Plan",
            amount: "₦10,000",
            date: "Jul 12, 2025",
            type: "Subscription",
        },
        {
            name: "TrendMart",
            activity: "Boosted Product Visibility",
            amount: "₦5,000",
            date: "Jul 11, 2025",
            type: "Boost",
        },
        {
            name: "Elite Shoes",
            activity: "Purchased Priority Support",
            amount: "₦8,000",
            date: "Jul 10, 2025",
            type: "Add-on",
        },
    ];

    const revenueData = [
        { month: "Jan", revenue: 500000 },
        { month: "Feb", revenue: 620000 },
        { month: "Mar", revenue: 580000 },
        { month: "Apr", revenue: 720000 },
        { month: "May", revenue: 690000 },
        { month: "Jun", revenue: 810000 },
        { month: "Jul", revenue: 760000 },
    ];

    const topStoresData = [
        { name: "Spark Clothing", revenue: 820000 },
        { name: "TrendMart", revenue: 670000 },
        { name: "Elite Shoes", revenue: 550000 },
        { name: "GadgetHub", revenue: 480000 },
        { name: "Glow Beauty", revenue: 360000 },
    ];

    const storeSourceData = [
        { name: "Organic", value: 550 },
        { name: "Sponsored", value: 320 },
        { name: "Affiliate", value: 180 },
        { name: "Referral", value: 120 },
    ];

    const pieChartColors = ["#22c55e", "#0ea5e9", "#f97316", "#a855f7", "#facc15", "#64748b", "#14b8a6", "#e11d48"];


    return (
        <div className="px-2 py-6 md:px-8 space-y-8">

            <div className='flex w-full items-center justify-between'>
                <h3 className='text-lg md:text-2xl font-bold font-montserrat'>
                    Report & Analytics
                </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((item, i) => (
                    <div
                        key={i}
                        className="bg-white border rounded-xl p-5 shadow flex flex-col gap-1 hover:shadow-md transition-all"
                    >
                        <p className="text-sm text-gray-500">{item.label}</p>
                        <p className="text-xl font-bold text-gray-900">{item.value}</p>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-2xl shadow-md p-3 md:p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Revenue Trends</h3>
                </div>

                <div className="w-full h-72 rounded-md overflow-hidden bg-gray-50">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={revenueData}
                            margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
                        >
                            <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />
                            <XAxis
                                dataKey="month"
                                stroke="#9ca3af"
                                fontSize={13}
                                tickLine={false}
                                axisLine={false}
                            />
                            <YAxis
                                stroke="#9ca3af"
                                fontSize={13}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(val) => `₦${val / 1000}k`}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "white",
                                    border: "1px solid #e5e7eb",
                                    borderRadius: "8px",
                                    fontSize: "13px",
                                }}
                                formatter={(value: number) => `₦${value.toLocaleString()}`}
                            />
                            <Line
                                type="monotone"
                                dataKey="revenue"
                                stroke="#38a169"
                                strokeWidth={3}
                                dot={{ r: 4, stroke: "#38a169", strokeWidth: 2, fill: "#fff" }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-3 md:p-6 flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Top Stores by Revenue
                        <span className="text-sm ml-2">
                            (Last 12 Months)
                        </span>
                    </h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={topStoresData}
                                margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
                            >
                                <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
                                <YAxis
                                    stroke="#6b7280"
                                    fontSize={12}
                                    tickFormatter={(val) => `₦${val / 1000}k`}
                                />
                                <Tooltip formatter={(val: number) => `₦${val.toLocaleString()}`} />
                                <Bar
                                    dataKey="revenue"
                                    fill="#38a169"
                                    barSize={25}
                                    radius={[25, 25, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-3 md:p-6 flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Customer Acquisition
                        <span className="text-sm ml-2">
                            (Last 12 Months)
                        </span>
                    </h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={storeSourceData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {storeSourceData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={pieChartColors[index % pieChartColors.length]}
                                        />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value: number) => `${value} stores`} />
                                <Legend verticalAlign="bottom" height={36} iconType="circle" />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>


            <div className="rounded-xl p-3 md:p-6 overflow-auto">
                <h3 className="text-base font-semibold text-gray-700 mb-4">Recent Orders</h3>
                <DataTable
                    cols={["Name", "Activity", "Amount", "Date", "Type"]}
                    keys={["name", "activity", "amount", "date", "type"]}
                    data={recentTransactions}
                />
            </div>
        </div>
    );
};

export default ReportsAnalytics;
