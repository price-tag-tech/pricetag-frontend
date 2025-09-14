import { BadgeCheck, Banknote, BarChart2, Calendar, ChartBar, ClipboardList, Cog, CreditCard, Group, LayoutDashboard, List, MessageCircleMore, Receipt, Settings, Share2, Smile, Speaker, ThumbsUp, Ticket, UserCheck, UserCircle, UserPlus, Users, UserX } from 'lucide-react'
import { ElementType } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useProfileStore } from '../../../store/profile-store'


interface PageItem { icon: ElementType, name: string, route: string }

const pages: Record<string, PageItem[]> = {
    "super-admin": [
        { icon: LayoutDashboard, name: "Dashboard", route: "/admin" },
        { icon: Users, name: "Manage Users", route: "/admin/users" },
        { icon: Group, name: "Manage Admins", route: "/admin/admins" },
        { icon: Cog, name: "Platform Settings", route: "/admin/settings/platform" },
        { icon: Speaker, name: "Broadcast Center", route: "/admin/broadcast" },
        { icon: List, name: "Activity Logs", route: "/admin/logs" },
        { icon: ChartBar, name: "Report & Analytics", route: "/admin/reports" },
        { icon: Settings, name: "Settings", route: "/admin/#setings" },
    ],
    "user-reg-admin": [
        { icon: LayoutDashboard, name: "Dashboard", route: "/admin" },
        { icon: UserPlus, name: "New User Requests", route: "/admin/users/requests" },
        { icon: UserCheck, name: "KYC Reviews", route: "/admin/kycs" },
        { icon: BadgeCheck, name: "Business Verification", route: "/admin/businesses" },
        { icon: Calendar, name: "Reminders & Emails", route: "/admin/reminders" },
    ],
    "support-admin": [
        { icon: LayoutDashboard, name: "Dashboard", route: "/admin" },
        { icon: Ticket, name: "Support Tickets", route: "/admin/tickets" },
        { icon: MessageCircleMore, name: "Messages", route: "/admin/messages" },
        { icon: ThumbsUp, name: "Reviews & Rating", route: "/admin/reviews" },
        { icon: Smile, name: "Satisfaction Report", route: "/admin/satisfaction" },
    ],
    "finance-admin": [
        { icon: LayoutDashboard, name: "Dashboard", route: "/admin" },
        { icon: Banknote, name: "Payout Requests", route: "/admin/payouts" },
        { icon: Share2, name: "Affiliate Management", route: "/admin/affiliate" },
        { icon: BarChart2, name: "Revenue Overview", route: "/admin/revenue" },
        { icon: Receipt, name: "Expenses Management", route: "/admin/expenses" },
        { icon: CreditCard, name: "Payment Gateway", route: "/admin/gateways" },
    ]
}

const AdminSidenav = () => {
    const { pathname } = useLocation()
    const { role } = useProfileStore()

    return (
        <div className="hidden md:flex flex-col  w-[300pt] bg-white border-r h-screen pt-5 text-gray-600">
            <div className="">
                <div className="flex items-center space-x-2 mb-4 md:border-b-2 md:border-b-gray-200 px-5 py-2">
                    <div className="text-2xl font-bold">
                        <img src="/logo.svg" alt="" />
                    </div>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 p-5">
                <ul className="space-y-2">
                    {pages[role].map(({ icon: Icon, ...item }) => {
                        const isActive = pathname === item.route
                        return (
                            <li key={item.route}>
                                <Link
                                    to={item.route}
                                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg text-sm transition-colors ${isActive
                                        ? "bg-gray-100 text-gray-900 font-medium"
                                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                        }`}
                                >
                                    <Icon className="h-5 w-5" />
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            {/* Profile Section */}
            <div className="p-5 border-t">
                <Link
                    to="/admin/profile"
                    className={`flex items-center space-x-3 py-2 rounded-lg text-sm transition-colors ${pathname === "/profile"
                        ? "bg-gray-100 text-gray-900 font-medium"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
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
                        <p className="text-xs text-gray-500">Super Admin</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSidenav