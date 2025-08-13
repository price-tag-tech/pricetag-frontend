
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Button from '../common/Button'
import {
    MagnifyingGlassIcon,
    UserPlusIcon,
    BuildingStorefrontIcon,
    UserIcon,
    Bars3Icon,
    XMarkIcon,
    ChevronDownIcon
} from '@heroicons/react/24/outline'

interface Navigation {
    name: string,
    route: string,
    icon?: React.ReactNode,
    hasDropdown?: boolean,
    dropdownItems?: { name: string, route: string }[]
}

const StoreLayout = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const location = useLocation()

    const nav: Navigation[] = [
        {
            name: "Find Stores",
            route: "/stores",
            icon: <MagnifyingGlassIcon className="w-4 h-4" />,
            hasDropdown: true,
            dropdownItems: [
                { name: "Browse All Stores", route: "/stores" },
                { name: "Top Rated Stores", route: "/stores/top-rated" },
                { name: "Nearby Stores", route: "/stores/nearby" },
                { name: "Featured Stores", route: "/stores/featured" }
            ]
        },
        {
            name: "Become an Agent",
            route: "/agent",
            icon: <UserPlusIcon className="w-4 h-4" />
        },
        {
            name: "Open a Store",
            route: "/open-store",
            icon: <BuildingStorefrontIcon className="w-4 h-4" />
        },
        {
            name: "Login",
            route: "/login",
            icon: <UserIcon className="w-4 h-4" />
        },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMobileMenuOpen(false)
        setActiveDropdown(null)
    }, [location])

    const toggleDropdown = (itemName: string) => {
        setActiveDropdown(activeDropdown === itemName ? null : itemName)
    }

    return (
        <div className="relative">
            <header className={`fixed z-50 top-0 left-0 w-full transition-all duration-500 ease-out ${isScrolled
                ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50 h-16'
                : 'bg-transparent backdrop-blur-sm h-20'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex items-center justify-between h-full">
                        <div className="flex items-center space-x-4">
                            <Link to="/" className="flex items-center space-x-3 group">
                                <div className="relative">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isScrolled
                                        ? 'bg-gradient-to-br from-[#1dbf73] to-[#17a866] shadow-lg'
                                        : 'bg-white/20'
                                        }`}>
                                        <img
                                            src="/logo.svg"
                                            alt="Logo"
                                            className={`w-6 h-6 transition-all duration-300 ${isScrolled ? 'brightness-0 invert' : ''
                                                }`}
                                        />
                                    </div>
                                    <div className="absolute -inset-1 bg-gradient-to-r from-[#1dbf73] to-[#17a866] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                                </div>
                                <div className={`font-bold text-xl transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'
                                    }`}>
                                    MarketPlace
                                </div>
                            </Link>
                        </div>

                        <nav className="hidden lg:flex items-center space-x-1">
                            {nav.map((item, index) => (
                                <div key={index} className="relative group">
                                    <Link
                                        to={item.route}
                                        className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${isScrolled
                                            ? 'text-gray-700 hover:text-[#1dbf73] hover:bg-gray-50'
                                            : 'text-gray-200 hover:text-white hover:bg-white/10'
                                            }`}
                                        onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                                        onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                                    >
                                        {item.icon}
                                        <span>{item.name}</span>
                                        {item.hasDropdown && (
                                            <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
                                                }`} />
                                        )}
                                    </Link>

                                    {item.hasDropdown && activeDropdown === item.name && (
                                        <div
                                            className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-200/50 py-2 opacity-0 animate-in fade-in slide-in-from-top-2 duration-200"
                                            style={{ animation: 'fadeInDown 0.3s ease-out forwards' }}
                                            onMouseEnter={() => setActiveDropdown(item.name)}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                        >
                                            {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                                                <Link
                                                    key={dropdownIndex}
                                                    to={dropdownItem.route}
                                                    className="block px-4 py-3 text-sm text-gray-700 hover:text-[#1dbf73] hover:bg-gray-50 transition-colors duration-200"
                                                >
                                                    {dropdownItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        <div className="flex items-center space-x-4">
                            <Button
                                variant="outline"
                                size="sm"
                                className={`hidden sm:flex transition-all duration-300 hover:scale-105 ${isScrolled
                                    ? 'border-[#1dbf73] text-[#1dbf73] hover:bg-[#1dbf73] hover:text-white'
                                    : 'border-white/30 text-white hover:bg-white hover:text-gray-900'
                                    }`}
                                leftIcon={<UserPlusIcon className="w-4 h-4" />}
                            >
                                Sign up for free
                            </Button>

                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${isScrolled
                                    ? 'text-gray-700 hover:bg-gray-100'
                                    : 'text-white hover:bg-white/10'
                                    }`}
                            >
                                {isMobileMenuOpen ? (
                                    <XMarkIcon className="w-6 h-6" />
                                ) : (
                                    <Bars3Icon className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200/50 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}>
                    <div className="max-w-7xl mx-auto px-4 py-6">
                        <nav className="space-y-2">
                            {nav.map((item, index) => (
                                <div key={index}>
                                    <Link
                                        to={item.route}
                                        className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-[#1dbf73] hover:bg-gray-50 rounded-xl transition-colors duration-200"
                                        onClick={() => item.hasDropdown && toggleDropdown(item.name)}
                                    >
                                        {item.icon}
                                        <span className="font-medium">{item.name}</span>
                                        {item.hasDropdown && (
                                            <ChevronDownIcon className={`w-4 h-4 ml-auto transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
                                                }`} />
                                        )}
                                    </Link>

                                    {/* Mobile Dropdown */}
                                    {item.hasDropdown && activeDropdown === item.name && (
                                        <div className="ml-8 mt-2 space-y-1">
                                            {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                                                <Link
                                                    key={dropdownIndex}
                                                    to={dropdownItem.route}
                                                    className="block px-4 py-2 text-sm text-gray-600 hover:text-[#1dbf73] hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                                >
                                                    {dropdownItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            <div className="pt-4 border-t border-gray-200">
                                <Button
                                    variant="primary"
                                    size="sm"
                                    fullWidth
                                    leftIcon={<UserPlusIcon className="w-4 h-4" />}
                                >
                                    Sign up for free
                                </Button>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="relative">
                <Outlet />
            </main>

            {isScrolled && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-[#1dbf73] hover:bg-[#17a866] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            )}
        </div>
    )
}

export default StoreLayout