import { Link, Outlet, useLocation } from 'react-router-dom'

const ProfileLayout = () => {
    const subnavs = [
        { label: "Edit Profile", route: "/user/profile" },
        { label: "Password", route: "/user/profile/password" },
        { label: "Social Profiles", route: "/user/profile/social-profiles" },
        { label: "Bank Settings", route: "/user/profile/bank-settings" }
    ]

    const { pathname } = useLocation()

    const exactPath = pathname.split("/").filter(Boolean).slice(2)

    const breadcrumbList: Record<string, string> = {
        password: "Password",
        "social-profiles": "Social Profiles",
        "bank-settings": "Bank Settings"
    }
    const breadcrumbs = exactPath.map((segment, i) => {
        const path = "/" + exactPath.slice(0, i + 1).join("/");
        const label = breadcrumbList[segment] || segment;

        return <h4 key={path} className='text-lg md:text-2xl font-semibold text-black'>
            Profile Settings / {label || "Edit Profile"}
        </h4>
    })

    return (
        <div className='space-y-8'>
            <div className='bg-gradient-to-r from-brand-50 to-green-50 rounded-2xl p-6 border border-brand-200'>
                <div className='flex items-center gap-4'>
                    <div className='w-16 h-16 bg-gradient-to-br from-brand-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg'>
                        <span className='text-white font-bold text-2xl'>P</span>
                    </div>
                    <div>
                        <h1 className='text-2xl md:text-3xl font-bold text-gray-900 mb-1'>
                            Profile Settings
                        </h1>
                        <p className='text-gray-600'>
                            Manage your personal information and account preferences
                        </p>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8'>
                {breadcrumbs.length > 0 ? breadcrumbs : <h4 className='text-lg md:text-2xl font-semibold text-black'>
                    Profile Settings / Edit Profile
                </h4>}

                <div className='mt-6 md:mt-12 flex flex-col md:flex-row'>
                    <div className='w-full md:w-1/5 flex flex-col gap-y-5 text-md font-light font-montserrat'>
                        {
                            subnavs.map((nav => (
                                <Link key={nav.route} to={nav.route} className={`${pathname === nav.route && "font-semibold text-brand-600"} hover:text-brand-600 transition-all duration-300 ease-in-out`}>
                                    {nav.label}
                                </Link>
                            )))
                        }
                    </div>

                    <div className='w-full md:w-4/5 my-16 md:my-0'>
                        <div className='w-full md:w-4/5'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileLayout