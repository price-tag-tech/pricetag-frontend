import { Bell, Cog, LogOut, Menu, Moon, Search, Sun, User, X } from 'lucide-react'
import { useState } from 'react'
import Input from '../../ui/form/input'
import Button from '../../common/Button'
import { Link } from 'react-router-dom'
import { businessNavItems } from '../business/business-sidenav'


const AdminHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [darkmode, setDarkmode] = useState(false)
    const [profileMenu, setProfileMenu] = useState(false)

    return (
        <div className="flex items-center justify-between w-full px-6 py-4 bg-white md:bg-transparent shadow md:shadow-none">
            <div className="flex items-center">
                <div className="md:hidden flex items-center space-x-2 mb-4 border-b-2 border-b-gray-200">
                    <div className="text-2xl font-bold">
                        <img src="/logo.svg" alt="" />
                    </div>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <div className="relative w-72 text-sm me-4">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input placeholder="Search for Products and Services" className="pl-10 bg-white border-gray-400 w-64 rounded-3xl" />
                    </div>
                </div>
            </div>


            <div className='w-fit flex items-center gap-2 md:gap-x-6 justify-between md:justify-end'>
                <div className="flex items-center gap-2 text-brand-600">
                    <Link to="l">
                        <Bell />
                    </Link>

                    <button onClick={() => setDarkmode(prev => !prev)}>
                        {darkmode ? <Sun /> : <Moon />}
                    </button>

                    <div className='w-auto relative'>
                        <button onClick={() => setProfileMenu(prev => !prev)} className="">
                            <img src="/assets/users/avatar-5.jpg" alt="" className='w-[20pt] h-[20pt] object-cover rounded-full text-[9pt]' />
                        </button>
                        <div className={`${!profileMenu && "hidden"} absolute z-50 transition-all duration-500 ease-linear mx-auto flex flex-col w-52 py-3 px-5 text-sm bg-white mt-4 shadow border rounded-xl -right-20 text-gray-500`}>
                            <div className="mt-y flex items-center space-x-3 py-2">
                                <div className="">
                                    <img src="/assets/users/avatar-5.jpg" alt="" className='w-[20pt] h-[20pt] object-cover rounded-full text-[9pt]' />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-800">Prince Godson</p>
                                    <p className='text-xs'>Super Admin</p>
                                </div>
                            </div>

                            <div className='divide-y-[1pt] flex flex-col'>
                                <Link to="#profile" className='py-2 flex items-center gap-x-2 w-full hover:text-gray-700 transition-all duration-300 ease-linear'>
                                    <User size={17} />
                                    Profile
                                </Link>

                                <Link to="#profile" className='py-2 flex items-center gap-x-2 w-full hover:text-gray-700 transition-all duration-300 ease-linear'>
                                    <Cog size={17} />
                                    Settings
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

                <Button variant="outline" size="sm" className=" hidden md:block items-center space-x-2">
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                </Button>
            </div>

            <Button onClick={() => setIsMenuOpen(true)} variant="outline" size="sm" className="block md:hidden button-outline-dark">
                <Menu />
            </Button>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-white z-20 transform transition-all duration-500 ease-out lg:hidden ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    }`}
            >

                <div className="flex flex-col h-full pt-20 px-6 pb-6 overflow-y-auto">
                    <div className="w-full flex justify-end">
                        <Button onClick={() => setIsMenuOpen(false)} variant="outline" size="sm" className="button-outline-secondary">
                            <X />
                        </Button>
                    </div>
                    <nav className="flex flex-col space-y-6 mb-8">

                        {businessNavItems.map(link => (
                            <Link
                                to={link.route}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center text-black text-left font-montserrat text-lg font-[500] leading-normal hover:text-green-600 transition-all duration-300 ease-out transform hover:translate-x-2"

                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <Button size="md" variant="outline" className="font-montserrat">
                        <LogOut className="h-4" />
                        Logout
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AdminHeader