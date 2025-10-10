import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Crown, LineChart, PlusCircle, Sparkles, Star, Store, TrendingUp } from 'lucide-react'
import Button from '../../../components/common/Button'
import { useAuth } from '../../../contexts/AuthContext'
import { myStores } from '../../../services/storeService'

const UserStores: React.FC = () => {
    const [stores, setStores] = useState<Record<string, any>[]>([])

    const { user } = useAuth()

    useEffect(() => {
        const fetchStores = async () => {
            const data = await myStores()
            setStores(data?.data || [])
        }

        if (user) {
            fetchStores()
        }
    }, [user])

    return (
        <div className="relative">
            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
                        <Store className="h-7 w-7 text-brand-600" />
                        My Stores
                    </h1>
                    <p className="text-gray-600 mt-1 text-sm">Manage all your storefronts and jump into your business dashboard in one click.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                    {stores.length > 0 && (
                        <Button to="/subscription" variant="outline" className="bg-white border-brand-200 text-brand-700 group">
                            <Crown className="h-4 w-4 mr-2 text-brand-500 group-hover:text-white" /> Upgrade Plan
                        </Button>
                    )}
                    <Button to="/user/stores/add" variant="primary">
                        <PlusCircle className="h-4 w-4 mr-2" /> Create Store
                    </Button>
                </div>
            </div>

            {stores.length > 0 ? (
                <div className="space-y-8">
                    <div className="relative overflow-hidden rounded-2xl border bg-white shadow-sm">
                        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6 p-6">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-500 to-emerald-500 text-white flex items-center justify-center font-bold">
                                    <LineChart className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-gray-900 font-semibold">Analytics</p>
                                    <p className="text-gray-600 text-sm">Your stores averaged 12% more visits this week</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <TrendingUp className="h-4 w-4 text-emerald-600" /> Tips and insights update daily
                            </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {stores.map((s) => (
                            <Link
                                key={s.id}
                                to="/business"
                                className="group relative rounded-2xl border bg-white p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="relative flex items-start justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className={`h-12 w-12 rounded-xl bg-gradient-to-br from-brand-500 to-emerald-500 text-white font-semibold flex items-center justify-center shadow-md`}>
                                            {s.name.substring(0, 2)}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900">{s.name}</h3>
                                            <div className="mt-1 inline-flex items-center gap-2">
                                                <span className="text-xs px-2 py-1 rounded-full bg-gray-50 text-gray-800">{s.category}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 grid grid-cols-2 gap-3">
                                    <div className="rounded-xl border p-3 bg-gray-50">
                                        <p className="text-[11px] uppercase text-gray-500">Sales</p>
                                        <p className="text-gray-900 font-semibold">{s.sales.toLocaleString()}</p>
                                    </div>
                                    <div className="rounded-xl border p-3 bg-gray-50">
                                        <p className="text-[11px] uppercase text-gray-500">Rating</p>
                                        <p className="text-gray-900 font-semibold inline-flex items-center gap-1">
                                            <Star className="h-4 w-4 text-amber-500" /> {s.rating}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Open Business Dashboard</span>
                                    <span className="inline-flex items-center text-brand-700 group-hover:translate-x-1 transition-transform">
                                        <ArrowRight className="h-4 w-4" />
                                    </span>
                                </div>

                                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-gray-200/70 group-hover:ring-brand-300 transition-colors" />
                            </Link>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="relative overflow-hidden rounded-2xl border bg-white p-8 md:p-12 shadow-sm">
                    <div className="relative max-w-2xl">
                        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-gray-600 bg-white">
                            <Sparkles className="h-3.5 w-3.5 text-brand-600" /> New to selling?
                        </div>
                        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">Launch your first store</h2>
                        <p className="mt-2 text-gray-600 text-sm">Create a stunning storefront in minutes and start selling. Pick a plan now or upgrade later.</p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Button to="/user/stores/add" variant="primary">
                                <PlusCircle className="h-4 w-4 mr-2" /> Create your first store
                            </Button>
                            <Button to="/pricing" variant="outline" className="bg-white border-brand-200 text-brand-700 group">
                                <Crown className="h-4 w-4 mr-2 text-brand-500 group-hover:text-white" /> See pricing plans
                            </Button>
                        </div>

                        <div className="mt-6 flex items-center gap-3 text-sm text-gray-600">
                            <LineChart className="h-4 w-4 text-emerald-600" />
                            You’ll get access to analytics, inventory, and more in your dashboard.
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserStores