import { Copy, Menu, MoreHorizontal, Pen, Store } from 'lucide-react'
import LatestOrderAndPurchase from "../../../components/sections/user-dashboard/latest-order-and-purchases"
import Button from '../../../components/common/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserDashboard = () => {
    const user = {
        name: "Prince Godson",
        referral: {
            link: "https://pricetag.ng/c/67d859bc-b2b4"
        }
    }

    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

    return (
        <div>
            <div className='w-full md:px-5 flex items-center justify-between mb-8 md:mb-20'>
                <div className='flex items-center gap-6'>
                    <div className='h-10 w-10 md:h-20 md:w-20 rounded-full bg-brand-900 text-white font-semibold text-xl md:text-5xl flex items-center justify-center'>
                        {user.name.substring(0, 1)}
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h4 className='font-bold text-3xl hidden md:block'>
                            {user.name}
                        </h4>
                        <div className='flex gap-x-2'>
                            <Button to="" variant='outline' size="sm" className='button-outline-secondary'>
                                <span className='hidden md:block'>
                                    Edit Profile
                                </span>
                                <span className='md:hidden'>
                                    <Pen className='h-4' />
                                </span>
                            </Button>

                            <div className='relative'>
                                <Button variant='outline' onClick={() => setIsProfileMenuOpen(prev => !prev)} size="sm" to="" className='button-outline-secondary'>
                                    <MoreHorizontal className='h-4 md:h-auto' />
                                </Button>
                                <div className={`${!isProfileMenuOpen && "hidden"} absolute left-0 mt-1 w-44 rounded-xl border bg-white shadow-lg z-10 py-2 flex flex-col text-sm`}>
                                    <Link to="/user/profile" className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        Edit Account
                                    </Link>
                                    <Link to="" className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-50">
                                        Delete Account
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex gap-x-3'>
                    <div className='flex gap-2 text-xs items-center bg-gray-100 shadow px-2 py-1.5 rounded-xl'>
                        <span className='py-2 px-3 rounded-lg h-full flex items-center text-black bg-white font-bold text'>
                            Referral Link
                        </span>
                        <input type="text" disabled value={`${user.referral.link.substring(0, 30)}...`} className='text-gray-600 bg-transparent w-[150pt]' />
                        <Button variant='secondary' className='text-white px-2'>
                            <Copy className='h-4' />
                        </Button>
                    </div>
                    <div className='flex'>
                        <Button variant='outline' size="sm" className='font-montserrat'>
                            <span className='mr-2'>
                                <Store />
                            </span>
                            My Store
                        </Button>
                    </div>
                </div>
            </div>
            <LatestOrderAndPurchase />
        </div >
    )
}

export default UserDashboard