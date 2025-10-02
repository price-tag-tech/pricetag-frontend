import { Copy, MoreHorizontal, Pen, Store } from 'lucide-react'
import LatestOrderAndPurchase from "../../../components/sections/user-dashboard/latest-order-and-purchases"
import Button from '../../../components/common/Button'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useProfileStore } from '../../../store/profile-store'
import { toast } from 'react-toastify'

const UserDashboard = () => {
    const { user } = useProfileStore()
    const [referralLink, setReferralLink] = useState('')

    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

    useEffect(() => {
        setReferralLink(`${window.location.origin}/${user.referralCode}`)
    }, [user.referralCode])

    const copyReferralLink = () => {
        navigator.clipboard.writeText(referralLink)
        toast.info("Copied referral link")
    }

    return (
        <div className="space-y-8">
            <div className='bg-gradient-to-r from-brand-50 via-brand-100 to-green-50 rounded-2xl p-6 md:p-8 border border-brand-200'>
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'>
                    <div className='flex items-center gap-6'>
                        <div className='relative'>
                            <div className='h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white font-bold text-2xl md:text-3xl flex items-center justify-center shadow-lg'>
                                {user.firstName.substring(0, 1)}
                                {user.lastName.substring(0, 1)}
                            </div>
                            <div className='absolute -bottom-1 -right-1 h-6 w-6 bg-green-400 rounded-bufull border-2 border-white flex items-center justify-center'>
                                <div className='h-2 w-2 bg-white rounded-full'></div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div>
                                <h1 className='font-bold text-2xl md:text-3xl text-gray-900 mb-1'>
                                    Welcome back, {user.firstName} {user.lastName}!
                                </h1>
                                <p className='text-gray-600 text-sm md:text-base'>
                                    Manage your orders, track purchases, and grow your network
                                </p>
                            </div>
                            <div className='flex gap-x-3'>
                                <Button to="/user/profile" variant='outline' size="sm" className='bg-white border-brand-300 text-brand-700 hover:bg-brand-50'>
                                    <span className='hidden md:block'>
                                        Edit Profile
                                    </span>
                                    <span className='md:hidden'>
                                        <Pen className='h-4' />
                                    </span>
                                </Button>

                                <div className='relative'>
                                    <Button variant='outline' onClick={() => setIsProfileMenuOpen(prev => !prev)} size="sm" to="" className='bg-white border-gray-300 text-gray-700 hover:bg-gray-50'>
                                        <MoreHorizontal className='h-4 md:h-auto' />
                                    </Button>
                                    <div className={`${!isProfileMenuOpen && "hidden"} absolute left-0 mt-2 w-48 rounded-xl border border-gray-200 bg-white shadow-xl z-10 py-2 flex flex-col text-sm`}>
                                        <Link to="/user/profile" className="w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-200">
                                            Edit Account
                                        </Link>
                                        <Link to="" className="w-full text-left px-4 py-3 text-red-500 hover:bg-red-50 transition-colors duration-200">
                                            Delete Account
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 lg:items-end'>
                        <div className='bg-white rounded-xl p-4 shadow-sm border border-gray-200'>
                            <div className='flex items-center gap-3 mb-2'>
                                <div className='h-8 w-8 bg-brand-100 rounded-lg flex items-center justify-center'>
                                    <Copy className='h-4 w-4 text-brand-600' />
                                </div>
                                <span className='font-semibold text-gray-900 text-sm'>Referral Link</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <input
                                    type="text"
                                    disabled
                                    value={`${referralLink.substring(0, 25)}...`}
                                    className='text-gray-600 bg-gray-50 rounded-lg px-3 py-2 text-xs flex-1 border border-gray-200'
                                />
                                <Button onClick={copyReferralLink} variant='secondary' size="sm" className='px-3 py-2'>
                                    <Copy className='h-3 w-3' />
                                </Button>
                            </div>
                        </div>
                        <Button to="/user/stores" variant='outline' size="sm" className='bg-white border-brand-300 text-brand-700 hover:bg-brand-50 w-full lg:w-auto'>
                            <Store className='h-4 w-4 mr-2' />
                            My Store
                        </Button>
                    </div>
                </div>
            </div>

            <LatestOrderAndPurchase />
        </div>
    )
}

export default UserDashboard