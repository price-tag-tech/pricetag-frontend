import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from 'recharts'
import { formatCurrency } from '../../../libs/number-formatter'

const data = [
    { day: 'Monday', revenue: 0 },
    { day: 'Tuesday', revenue: 200000 },
    { day: 'Wednesday', revenue: 600000 },
    { day: 'Thursday', revenue: 700000 },
    { day: 'Friday', revenue: 200000 },
    { day: 'Saturday', revenue: 800000 },
    { day: 'Sunday', revenue: 1000000 },
]

const WeeklySalesChart = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6 w-full">
            <h3 className="text-lg font-semibold mb-4">Sales weekly Revenue</h3>

            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#1DBF73" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#1DBF73" stopOpacity={0.05} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f3f4f6" />
                    <XAxis dataKey="day" tick={{ fontSize: 12 }} axisLine={false} />
                    <YAxis
                        tickFormatter={formatCurrency}
                        tick={{ fontSize: 12 }}
                        axisLine={false}
                        ticks={[0, 200000, 400000, 600000, 800000, 1000000]}
                    />
                    <Tooltip
                        formatter={(value: number) => formatCurrency(value)}
                        contentStyle={{
                            borderRadius: 8,
                            borderColor: '#22c55e',
                            backgroundColor: 'white',
                            boxShadow: '0 0 6px rgba(0,0,0,0.05)',
                            fontSize: 14,
                        }}
                    />
                    <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#1DBF73"
                        strokeWidth={2}
                        fill="url(#colorRevenue)"
                        dot={{ r: 5, strokeWidth: 2, stroke: '#fff', fill: '#1DBF73' }}
                        activeDot={{
                            r: 7,
                            stroke: '#fff',
                            strokeWidth: 2,
                            fill: '#22c55e',
                            filter: 'drop-shadow(0 0 4px rgba(34, 197, 94, 0.3))'
                        }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default WeeklySalesChart
