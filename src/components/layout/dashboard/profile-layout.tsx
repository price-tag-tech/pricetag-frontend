import { Link, Outlet, useLocation } from 'react-router-dom'

const ProfileLayout = () => {
    const subnavs = [
        { label: "Edit Profile", route: "/user/profile" },
        { label: "Password", route: "/user/profile/password" },
        { label: "Social Profiles", route: "/user/profile/social-profiles" },
        { label: "Bank Settings", route: "/user/profile/bank-settings" }
    ]

    const { pathname } = useLocation()

    return (
        <div className='px-5 md:px-10'>
            <h4 className='text-lg md:text-2xl font-semibold text-black'>
                Profile Settings / Edit Profile
            </h4>

            <div className='mt-6 md:mt-12 flex flex-col md:flex-row px-5'>
                <div className='w-full md:w-1/5 flex flex-col gap-y-5 text-md font-light font-montserrat'>
                    {
                        subnavs.map((nav => (
                            <Link key={nav.route} to={nav.route} className={`${pathname === nav.route && "font-semibold text-brand-600"} hover:text-brand-600 transition-all duration-300 ease-in-out`}>
                                {nav.label}
                            </Link>
                        )))
                    }
                </div>

                <div className='w-full md:w-4/5'>
                    <div className='w-full md:w-4/5'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileLayout