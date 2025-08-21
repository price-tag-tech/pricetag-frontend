import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    PlusIcon,
    BuildingStorefrontIcon,
    ChartBarIcon,
    EyeIcon,
    PencilIcon,
    CogIcon,
    ArrowTrendingUpIcon,
    ShoppingBagIcon,
    UsersIcon,
    SparklesIcon,
    RocketLaunchIcon,
    CurrencyDollarIcon,
    GlobeAltIcon,
    StarIcon
} from '@heroicons/react/24/outline'
import { CheckBadgeIcon, FireIcon } from '@heroicons/react/24/solid'
import Button from '../../../components/common/Button'
import { Store } from '../../../types'

const StoresPage = () => {
    const [stores, setStores] = useState<Store[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchUserStores = async () => {
            setIsLoading(true)
            try {
                // Mock data - replace with actual API call
                // Set to empty array [] to see empty state, or use mockStores for populated state
                const mockStores: Store[] = [
                    {
                        id: '1',
                        name: 'Tech Haven Electronics',
                        businessId: 'biz-1',
                        description: 'Premium electronics and gadgets for tech enthusiasts. From smartphones to laptops, we have everything you need.',
                        category: 'Electronics',
                        location: 'Lagos',
                        productCount: 156
                    },
                    {
                        id: '2',
                        name: 'Fashion Forward Boutique',
                        businessId: 'biz-1',
                        description: 'Trendy fashion items and accessories for the modern style-conscious individual.',
                        category: 'Fashion',
                        location: 'Abuja',
                        productCount: 89
                    },
                    {
                        id: '3',
                        name: 'Artisan Crafts & Gifts',
                        businessId: 'biz-1',
                        description: 'Handmade crafts and unique gift items from local artisans. Perfect for special occasions.',
                        category: 'Arts & Crafts',
                        location: 'Port Harcourt',
                        productCount: 42
                    }
                ]

                setTimeout(() => {
                    setStores(mockStores)
                    setIsLoading(false)
                }, 1000)
            } catch (error) {
                console.error('Error fetching stores:', error)
                setIsLoading(false)
            }
        }

        fetchUserStores()
    }, [])

    const EmptyStoresState = () => (
        <div className="relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-20 h-20 bg-[#1dbf73] rounded-full blur-xl"></div>
                <div className="absolute top-32 right-20 w-16 h-16 bg-[#1f1f1f] rounded-full blur-lg"></div>
                <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-[#1dbf73] rounded-full blur-2xl"></div>
            </div>

            <div className="relative flex flex-col items-center justify-center py-12 sm:py-20 px-4">
                {/* Hero Icon with Animation */}
                <div className="relative mb-8 group">
                    <div className="w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-br from-[#1dbf73]/20 to-[#1dbf73]/10 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-[#1dbf73]/20 group-hover:scale-105 transition-all duration-500">
                        <BuildingStorefrontIcon className="w-14 h-14 sm:w-18 sm:h-18 text-[#1dbf73] group-hover:rotate-12 transition-transform duration-500" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#1dbf73] to-[#19a563] rounded-2xl flex items-center justify-center shadow-lg shadow-[#1dbf73]/25 animate-pulse">
                        <SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-[#1f1f1f] rounded-xl flex items-center justify-center shadow-lg">
                        <PlusIcon className="w-4 h-4 text-white" />
                    </div>
                </div>

                {/* Main Content */}
                <div className="text-center max-w-2xl">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#1f1f1f] via-[#1dbf73] to-[#1f1f1f] bg-clip-text text-transparent mb-6 leading-tight">
                        Launch Your Dream Store
                    </h2>

                    <p className="text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed">
                        Transform your passion into profit. Create a stunning online store,
                        connect with customers worldwide, and watch your business soar.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button
                            variant="primary"
                            size="lg"
                            leftIcon={<RocketLaunchIcon className="w-5 h-5" />}
                            className="shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 bg-gradient-to-r from-[#1dbf73] to-[#19a563]"
                        >
                            Start Building Now
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            leftIcon={<GlobeAltIcon className="w-5 h-5" />}
                            className="border-2 border-[#1dbf73]/30 text-[#1dbf73] hover:border-[#1dbf73] hover:bg-[#1dbf73]/5 backdrop-blur-sm"
                        >
                            Explore Features
                        </Button>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 hover:border-[#1dbf73]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#1dbf73]/20 to-[#1dbf73]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <FireIcon className="w-7 h-7 text-[#1dbf73]" />
                            </div>
                            <h4 className="font-bold text-[#1f1f1f] mb-3 text-lg">Lightning Setup</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">Launch your store in under 5 minutes with our AI-powered setup wizard.</p>
                        </div>

                        <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 hover:border-[#1dbf73]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#1dbf73]/20 to-[#1dbf73]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <UsersIcon className="w-7 h-7 text-[#1dbf73]" />
                            </div>
                            <h4 className="font-bold text-[#1f1f1f] mb-3 text-lg">Global Reach</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">Connect with millions of customers across multiple countries and currencies.</p>
                        </div>

                        <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 hover:border-[#1dbf73]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#1dbf73]/20 to-[#1dbf73]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <CurrencyDollarIcon className="w-7 h-7 text-[#1dbf73]" />
                            </div>
                            <h4 className="font-bold text-[#1f1f1f] mb-3 text-lg">Smart Analytics</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">AI-driven insights to optimize your sales and maximize revenue growth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    const StoreCard = ({ store }: { store: Store }) => {
        const getStoreGradient = (name: string) => {
            const gradients = [
                'from-[#1dbf73] to-[#19a563]',
                'from-[#1f1f1f] to-[#333]',
                'from-[#1dbf73]/80 to-[#1f1f1f]',
                'from-[#19a563] to-[#1dbf73]'
            ]
            return gradients[name.length % gradients.length]
        }

        return (
            <div className="group relative bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-[#1dbf73]/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1dbf73]/5 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>

                <div className="relative p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                            <div className={`relative w-16 h-16 bg-gradient-to-br ${getStoreGradient(store.name)} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                {store.name.charAt(0)}
                                <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#1dbf73] rounded-full flex items-center justify-center">
                                    <CheckBadgeIcon className="w-4 h-4 text-white" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-[#1f1f1f] group-hover:text-[#1dbf73] transition-colors duration-300 mb-1">
                                    {store.name}
                                </h3>
                                <div className="flex items-center space-x-2">
                                    <span className="px-3 py-1 bg-[#1dbf73]/10 text-[#1dbf73] text-xs font-semibold rounded-full">
                                        {store.category}
                                    </span>
                                    <div className="flex items-center space-x-1">
                                        <StarIcon className="w-3 h-3 text-yellow-400 fill-current" />
                                        <span className="text-xs text-gray-500">4.8</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <button className="p-2 text-gray-400 hover:text-[#1dbf73] hover:bg-[#1dbf73]/10 rounded-xl transition-all duration-300 group-hover:rotate-90">
                                <CogIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed">
                        {store.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-xl group-hover:bg-[#1dbf73]/5 transition-colors duration-300">
                            <div className="w-8 h-8 bg-[#1dbf73]/20 rounded-lg flex items-center justify-center">
                                <BuildingStorefrontIcon className="w-4 h-4 text-[#1dbf73]" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Location</p>
                                <p className="text-sm font-semibold text-[#1f1f1f] truncate">{store.location}</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-xl group-hover:bg-[#1dbf73]/5 transition-colors duration-300">
                            <div className="w-8 h-8 bg-[#1dbf73]/20 rounded-lg flex items-center justify-center">
                                <ShoppingBagIcon className="w-4 h-4 text-[#1dbf73]" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Products</p>
                                <p className="text-sm font-semibold text-[#1f1f1f]">{store.productCount}</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-3 gap-2">
                        <Link
                            to={`/store/${store.id}`}
                            className="flex flex-col items-center justify-center py-3 px-2 bg-gray-50 hover:bg-[#1dbf73]/10 rounded-xl transition-all duration-300 text-gray-700 hover:text-[#1dbf73] group/btn"
                        >
                            <EyeIcon className="w-5 h-5 mb-1 group-hover/btn:scale-110 transition-transform duration-200" />
                            <span className="text-xs font-medium">View</span>
                        </Link>

                        <Link
                            to={`/dashboard/business/store/${store.id}/edit`}
                            className="flex flex-col items-center justify-center py-3 px-2 bg-[#1dbf73]/10 hover:bg-[#1dbf73]/20 rounded-xl transition-all duration-300 text-[#1dbf73] group/btn"
                        >
                            <PencilIcon className="w-5 h-5 mb-1 group-hover/btn:scale-110 transition-transform duration-200" />
                            <span className="text-xs font-medium">Edit</span>
                        </Link>

                        <Link
                            to={`/dashboard/business/store/${store.id}/analytics`}
                            className="flex flex-col items-center justify-center py-3 px-2 bg-[#1f1f1f]/10 hover:bg-[#1f1f1f]/20 rounded-xl transition-all duration-300 text-[#1f1f1f] group/btn"
                        >
                            <ChartBarIcon className="w-5 h-5 mb-1 group-hover/btn:scale-110 transition-transform duration-200" />
                            <span className="text-xs font-medium">Analytics</span>
                        </Link>
                    </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#1dbf73]/20 transition-all duration-300"></div>
            </div>
        )
    }

    const LoadingSkeleton = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 animate-pulse overflow-hidden">
                    {/* Background shimmer */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full -translate-y-16 translate-x-16"></div>

                    <div className="relative">
                        {/* Header skeleton */}
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 bg-gray-200 rounded-2xl"></div>
                                <div>
                                    <div className="h-6 bg-gray-200 rounded-lg w-32 mb-2"></div>
                                    <div className="flex items-center space-x-2">
                                        <div className="h-5 bg-gray-200 rounded-full w-20"></div>
                                        <div className="h-4 bg-gray-200 rounded w-8"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-9 h-9 bg-gray-200 rounded-xl"></div>
                        </div>

                        {/* Description skeleton */}
                        <div className="space-y-2 mb-6">
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        </div>

                        {/* Stats skeleton */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="p-3 bg-gray-50 rounded-xl">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                                    <div>
                                        <div className="h-3 bg-gray-200 rounded w-12 mb-1"></div>
                                        <div className="h-4 bg-gray-200 rounded w-16"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 bg-gray-50 rounded-xl">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                                    <div>
                                        <div className="h-3 bg-gray-200 rounded w-12 mb-1"></div>
                                        <div className="h-4 bg-gray-200 rounded w-8"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action buttons skeleton */}
                        <div className="grid grid-cols-3 gap-2">
                            <div className="h-16 bg-gray-100 rounded-xl"></div>
                            <div className="h-16 bg-gray-100 rounded-xl"></div>
                            <div className="h-16 bg-gray-100 rounded-xl"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
            {/* Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#1dbf73]/3 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1f1f1f]/2 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 lg:mb-12">
                    <div className="mb-6 lg:mb-0">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#1dbf73] to-[#19a563] rounded-2xl flex items-center justify-center shadow-lg">
                                <BuildingStorefrontIcon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#1f1f1f] to-[#1dbf73] bg-clip-text text-transparent">
                                    My Stores
                                </h1>
                                <div className="flex items-center space-x-2 mt-1">
                                    {stores.length > 0 && (
                                        <span className="px-3 py-1 bg-[#1dbf73]/10 text-[#1dbf73] text-sm font-semibold rounded-full">
                                            {stores.length} Active
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
                            {stores.length > 0
                                ? `Manage your ${stores.length} store${stores.length > 1 ? 's' : ''} and track performance across all your business ventures.`
                                : 'Create and manage your online stores to start your entrepreneurial journey.'
                            }
                        </p>
                    </div>

                    {stores.length > 0 && (
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button
                                variant="outline"
                                leftIcon={<ChartBarIcon className="w-5 h-5" />}
                                className="border-[#1dbf73]/30 text-[#1dbf73] hover:border-[#1dbf73] hover:bg-[#1dbf73]/5"
                            >
                                View Analytics
                            </Button>
                            <Button
                                variant="primary"
                                leftIcon={<PlusIcon className="w-5 h-5" />}
                                className="shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 bg-gradient-to-r from-[#1dbf73] to-[#19a563]"
                            >
                                Add New Store
                            </Button>
                        </div>
                    )}
                </div>

                {/* Content */}
                {isLoading ? (
                    <LoadingSkeleton />
                ) : stores.length === 0 ? (
                    <EmptyStoresState />
                ) : (
                    <>
                        {/* Stores Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12">
                            {stores.map((store) => (
                                <StoreCard key={store.id} store={store} />
                            ))}
                        </div>

                        {/* Add More Section */}
                        <div className="text-center">
                            <div className="inline-flex flex-col items-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 hover:border-[#1dbf73]/30 transition-all duration-300 group">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#1dbf73]/10 to-[#1dbf73]/5 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <PlusIcon className="w-8 h-8 text-[#1dbf73]" />
                                </div>
                                <h3 className="text-lg font-bold text-[#1f1f1f] mb-2">Expand Your Business</h3>
                                <p className="text-gray-600 text-sm mb-6 max-w-xs">Ready to launch another store? Diversify your business and reach new markets.</p>
                                <Button
                                    variant="outline"
                                    leftIcon={<SparklesIcon className="w-4 h-4" />}
                                    className="border-dashed border-2 border-[#1dbf73]/30 text-[#1dbf73] hover:border-[#1dbf73] hover:bg-[#1dbf73]/5"
                                >
                                    Create Another Store
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default StoresPage