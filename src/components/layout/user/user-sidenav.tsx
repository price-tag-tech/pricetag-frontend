import { Bell, Cog, ShoppingCart, Grid2X2, ExternalLink } from 'lucide-react'
import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const userNavLinks: { icon: ReactNode, name: string, route: string }[] = [
    {
        icon: <Grid2X2 />,
        name: "Dashboard Overview",
        route: "/user"
    },
    {
        icon: <ShoppingCart />,
        name: "Orders & Purchases",
        route: "/user/orders-and-purchases",
    },
    {
        icon: <Bell />,
        name: "Notifications",
        route: "/user/notifications"
    },
    {
        icon: <ExternalLink />,
        name: "Affiate Earnings",
        route: "/user/affiliate"
    },
    {
        icon: <Cog />,
        name: "Profile Settings",
        route: "/user/profile"
    }
]

const UserSidenav = () => {

    const { pathname } = useLocation()

    return (
        // desktop only (sliding navigation will be used for mobile view)

        <div className='hidden md:block w-[280px] flex-shrink-0'>
            <div className='bg-white shadow-lg border border-gray-100 w-full h-fit rounded-2xl overflow-hidden sticky top-8'>
                <Link to="/">
                    <div className='px-8 py-6 border-b border-gray-100 bg-gradient-to-r from-brand-50 to-brand-100'>
                        <img src="/logo.svg" alt="Pricetag" className="h-8" />
                    </div>
                </Link>

                <div className='flex flex-col py-4 text-gray-700 text-sm'>
                    {userNavLinks.map((_, i) => (
                        <Link
                            key={i}
                            to={_.route}
                            className={`
                                ${pathname === _.route
                                    ? "bg-gradient-to-r from-brand-50 to-transparent border-r-4 border-r-brand-500 text-brand-700 font-semibold shadow-sm"
                                    : "hover:bg-gradient-to-r hover:from-gray-50 hover:to-transparent hover:text-brand-600"
                                } 
                                mx-3 my-1 px-6 py-4 flex items-center gap-x-4 transition-all duration-300 ease-in-out rounded-xl group
                            `}
                        >
                            <span className={`
                                ${pathname === _.route ? "text-brand-600" : "text-gray-500 group-hover:text-brand-500"}
                                transition-colors duration-300
                            `}>
                                {_.icon}
                            </span>
                            <span className="font-medium">
                                {_.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserSidenav