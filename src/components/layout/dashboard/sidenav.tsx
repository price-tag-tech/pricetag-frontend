import { Bell, Cog, ShoppingCart, Grid2X2, ExternalLink } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Sidenav = () => {

    const links = [
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

    const { pathname } = useLocation()

    return (
        // desktop only (sliding navigation will be used for mobile view)

        <div className='hidden md:block w-[250pt]'>
            <div className='bg-gray-100 shadow w-full h-fit rounded-2xl py-10'>
                <Link to="/">
                    <div className='px-10'>
                        <img src="/logo.svg" alt="Pricetag" />
                    </div>
                </Link>

                <div className='flex flex-col mt-5 divide-y-2 text-gray-800 text-sm'>
                    {links.map((_, i) => (
                        <Link
                            key={i}
                            to={_.route}
                            className={`
                                ${pathname === _.route && "border-r-4 border-r-brand-500 text-brand-600"} 
                                hover:border-r-4 hover:border-r-brand-500 hover:text-brand-600
                                px-10 py-6 flex items-center gap-x-3 transition-al duration-300 ease-in-out
                            `}
                        >
                            <span>
                                {_.icon}
                            </span>
                            {_.name}
                        </Link>
                    ))}
                </div>
            </div>
        </ div>
    )
}

export default Sidenav