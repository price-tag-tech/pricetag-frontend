import { ShoppingCart, Users, MessageSquare, Bell, Copy, ChevronDown, Home, ShoppingBag, LineChart, UserCircle } from "lucide-react"
import Button from "../../common/Button"
import { Link, useLocation } from "react-router-dom"

const menuItems = [
    { icon: Home, label: "Dashboard", href: "/business" },
    { icon: ShoppingBag, label: "Products/Services", href: "/business/products" },
    { icon: ShoppingCart, label: "Orders", href: "/business/orders" },
    { icon: LineChart, label: "Inventory", href: "/business/inventory" },
    { icon: Users, label: "Customers", href: "/business/customers" },
    { icon: MessageSquare, label: "Messages", href: "/business/messages" },
]

export function BusinessSidenav() {
    const { pathname } = useLocation()

    return (
        <div className="hidden md:flex flex-col  w-[300pt] bg-white border-r h-screen pt-5 text-gray-600">
            <div className="border-b">

                <div className="flex items-center space-x-2 mb-4 border-b-2 border-b-gray-200 px-5 py-2">
                    <div className="text-2xl font-bold">
                        <img src="/logo.svg" alt="" />
                    </div>
                </div>

                <div className="flex items-center space-x-3 p-5">
                    <div className="h-16 w-20 bg-brand-200 rounded-lg flex items-center justify-center text-brand-800 font-semibold">
                        PG
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <div >
                            <h3 className="text-xl text-gray-800">PG Store</h3>
                            <p className="text-xs text-gray-500">Starter Spark Plan</p>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500">

                            <ChevronDown />
                            <Bell />
                        </div>
                    </div>
                </div>

                <div className="mt-3 text-xs py-5 px-5">
                    <div className=" text-gray-500 px-2 border-2 rounded-xl border-gray-400 shadow-sm w-full flex justify-between items-center">
                        <div className="h-full">
                            <div className="bg-gray-200 py-2 px-2 h-fit rounded-lg text-gray-800 font-medium">
                                Referral Link
                            </div>
                        </div>
                        <div className="flex items-center space-x-1 pl-2 py-1 rounded">
                            <span className="text-xs">https://pricetag.n..</span>
                            <Button variant="secondary" size="sm" className="p-4">
                                <Copy className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 p-5">
                <ul className="space-y-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <li key={item.href}>
                                <Link
                                    to={item.href}
                                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${isActive
                                        ? "bg-gray-200 text-gray-900 font-medium"
                                        : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                                        }`}
                                >
                                    <item.icon className="h-5 w-5" />
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            {/* Profile Section */}
            <div className="p-5 border-t">
                <Link
                    to="/profile"
                    className={`flex items-center space-x-3 py-2 rounded-lg text-sm transition-colors ${pathname === "/profile"
                        ? "bg-gray-100 text-gray-900 font-medium"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                >
                    <UserCircle className="" />
                    <span>Profile</span>
                </Link>

                <div className="mt-3 flex items-center space-x-3">
                    <div className="">
                        <img src="/assets/users/avatar-5.jpg" alt="" className='w-[30pt] h-[30pt] object-cover rounded-full text-[9pt]' />
                    </div>
                    <div>
                        <p className="text-md font-bold text-gray-800">Prince Godson</p>
                        <p className="text-xs text-gray-500">8 Years Selling on Pricetag</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
