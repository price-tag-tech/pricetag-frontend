import { ChevronRight, ChevronsLeft, ChevronsRight, Copy, Wallet } from 'lucide-react'
import React from 'react'
import Button from '../../../components/common/Button'

const AffiliatePage = () => {
    const referrals = [
        {
            id: 1,
            name: "Ndubuisi Prince Godson",
            store: "PG Stores",
            phoneNumber: "09037494084",
            dateTime: "3/18/2025 - 6:39 AM",
            commission: 900,
        },
        {
            id: 1,
            name: "Ndubuisi Prince Godson",
            store: "PG Stores",
            phoneNumber: "09037494084",
            dateTime: "3/18/2025 - 6:39 AM",
            commission: 900,
        },
        {
            id: 1,
            name: "Ndubuisi Prince Godson",
            store: "PG Stores",
            phoneNumber: "09037494084",
            dateTime: "3/18/2025 - 6:39 AM",
            commission: 900,
        },
        {
            id: 1,
            name: "Ndubuisi Prince Godson",
            store: "PG Stores",
            phoneNumber: "09037494084",
            dateTime: "3/18/2025 - 6:39 AM",
            commission: 900,
        }
    ]

    return (
        <div className='space-y-8'>
            <div className='bg-gradient-to-r from-brand-50 via-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 border border-brand-200'>
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-2 text-sm'>
                            <h1 className='text-2xl md:text-3xl font-bold text-gray-900'>
                                Affiliate Earnings
                            </h1>
                            <ChevronRight className='h-5 w-5 text-gray-400' />
                            <div className='relative bg-white rounded-lg px-3 py-1.5 border border-brand-200'>
                                <span className='text-gray-700 font-medium'>Prince Godson</span>
                                <span className='absolute -top-2 -right-2 text-xs font-bold bg-gradient-to-r from-brand-500 to-green-500 text-white px-2 py-0.5 rounded-full'>
                                    AGENT
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-center sm:flex-row gap-4'>
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
                                    value="https://pricetag.ng/c/67d859bc-b2b4...."
                                    className='text-gray-600 bg-gray-50 rounded-lg px-3 py-2 text-xs flex-1 border border-gray-200'
                                />
                                <Button variant='secondary' size="sm" className='px-3 py-2'>
                                    <Copy className='h-3 w-3' />
                                </Button>
                            </div>
                        </div>
                        <Button to='/user/affiliate/withdraw' className='bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700'>
                            <Wallet className='h-6 w-6 mr-2' />
                            Withdrawal
                        </Button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className='flex flex-col md:flex-row items-center gap-4'>
                    <div className='w-full bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200'>
                        <div className='flex items-center justify-between mb-4'>
                            <div className='h-12 w-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg'>
                                <Wallet className='h-6 w-6 text-white' />
                            </div>
                            <div className='text-green-600 text-xs font-medium bg-green-100 px-2 py-1 rounded-full'>
                                +12.5%
                            </div>
                        </div>
                        <div className='space-y-1'>
                            <span className="text-2xl md:text-3xl font-bold text-green-800">
                                ₦2,700
                            </span>
                            <p className='text-green-700 font-semibold text-sm'>
                                Total Commission
                            </p>
                        </div>
                    </div>

                    <div className='w-full bg-gradient-to-br from-yellow-50 to-amber-100 border border-yellow-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200'>
                        <div className='flex items-center justify-between mb-4'>
                            <div className='h-12 w-12 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg'>
                                <Wallet className='h-6 w-6 text-white' />
                            </div>
                            <div className='text-yellow-600 text-xs font-medium bg-yellow-100 px-2 py-1 rounded-full'>
                                0%
                            </div>
                        </div>
                        <div className='space-y-1'>
                            <span className="text-2xl md:text-3xl font-bold text-yellow-800">
                                ₦0.00
                            </span>
                            <p className='text-yellow-700 font-semibold text-sm'>
                                Total Withdrawal
                            </p>
                        </div>
                    </div>

                    <div className='w-full bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200'>
                        <div className='flex items-center justify-between mb-4'>
                            <div className='h-12 w-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg'>
                                <Wallet className='h-6 w-6 text-white' />
                            </div>
                            <div className='text-blue-600 text-xs font-medium bg-blue-100 px-2 py-1 rounded-full'>
                                Available
                            </div>
                        </div>
                        <div className='space-y-1'>
                            <span className="text-2xl md:text-3xl font-bold text-blue-800">
                                ₦2,700
                            </span>
                            <p className='text-blue-700 font-semibold text-sm'>
                                Balance
                            </p>
                        </div>
                    </div>
                </div>

                <div className='bg-white rounded-2xl border border-gray-200 shadow-sm p-6'>
                    <h3 className='text-lg font-bold text-gray-900 mb-6'>Activity Overview</h3>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className='space-y-4'>
                            <div className='bg-gradient-to-r from-brand-50 to-green-50 p-4 rounded-xl border border-brand-200'>
                                <h5 className='text-2xl md:text-3xl font-bold text-brand-600'>
                                    ₦900
                                </h5>
                                <p className='text-xs text-gray-600 font-medium mt-1'>
                                    Last Credit: 3/18/2025
                                </p>
                            </div>

                            <div className='bg-gray-50 p-4 rounded-xl border border-gray-200'>
                                <h5 className='text-2xl md:text-3xl font-bold text-gray-600'>
                                    ₦0.00
                                </h5>
                                <p className='text-xs text-gray-600 font-medium mt-1'>
                                    Last Withdrawal: N/A
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200 p-6'>
                            <div className='text-center'>
                                <h3 className='text-4xl md:text-5xl font-bold text-orange-600 mb-2'>
                                    3
                                </h3>
                                <span className='text-orange-700 font-semibold'>
                                    Total Referrals
                                </span>
                            </div>
                            <div className='mt-4 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center'>
                                <svg className='w-8 h-8 text-orange-600' fill='currentColor' viewBox='0 0 20 20'>
                                    <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden'>
                <div className='bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-5 border-b border-gray-200'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                        <div>
                            <h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-1'>
                                Your Referrals
                            </h2>
                            <p className='text-sm text-gray-600'>
                                Track your referral network and commissions
                            </p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-sm font-medium'>
                                {referrals.length} Active
                            </div>
                            <Button variant='outline' size='sm' className='bg-white border-gray-300 text-gray-700 hover:bg-gray-50'>
                                Export Data
                            </Button>
                        </div>
                    </div>
                </div>

                <div className='p-6'>
                    <div className='text-sm'>
                        <div className="hidden md:grid grid-cols-12 bg-gray-50 rounded-xl px-4 py-3 font-semibold text-gray-700 text-xs uppercase tracking-wide border border-gray-200">
                            <div className="col-span-1">S/N</div>
                            <div className="col-span-2">Name</div>
                            <div className="col-span-2">Store</div>
                            <div className="col-span-2">Phone</div>
                            <div className="col-span-2">Date/Time</div>
                            <div className="col-span-2">Commission</div>
                            <div className="col-span-1">Action</div>
                        </div>

                        <div className='w-full flex flex-col mt-4 space-y-3'>
                            {referrals.map((referral, i) => (
                                <div key={i} className='bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200 hover:border-orange-300'>
                                    <div className='flex flex-col md:grid md:grid-cols-12 gap-3 md:gap-2 md:items-center'>
                                        <div className='hidden md:block md:col-span-1 text-gray-500 font-medium'>
                                            #{referral.id.toString().padStart(3, '0')}
                                        </div>
                                        <div className='md:col-span-2'>
                                            <span className='md:hidden text-xs text-gray-500 font-medium block mb-1'>Name</span>
                                            <div className='flex items-center gap-2'>
                                                <div className='w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0'>
                                                    {referral.name.substring(0, 1)}
                                                </div>
                                                <span className='text-gray-900 font-medium'>{referral.name}</span>
                                            </div>
                                        </div>
                                        <div className='md:col-span-2'>
                                            <span className='md:hidden text-xs text-gray-500 font-medium block mb-1'>Store</span>
                                            <span className='inline-block font-semibold text-brand-700 bg-brand-50 px-2 py-1 rounded-lg text-sm'>
                                                {referral.store}
                                            </span>
                                        </div>
                                        <div className='md:col-span-2'>
                                            <span className='md:hidden text-xs text-gray-500 font-medium block mb-1'>Phone</span>
                                            <span className='text-gray-700 font-mono text-sm'>{referral.phoneNumber}</span>
                                        </div>
                                        <div className='md:col-span-2'>
                                            <span className='md:hidden text-xs text-gray-500 font-medium block mb-1'>Date</span>
                                            <span className='text-xs text-gray-600'>{referral.dateTime}</span>
                                        </div>
                                        <div className='md:col-span-2'>
                                            <span className='md:hidden text-xs text-gray-500 font-medium block mb-1'>Commission</span>
                                            <div className='flex items-center gap-2 flex-wrap'>
                                                <span className='text-green-600 font-bold text-lg'>₦{referral.commission}</span>
                                                <div className='bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium'>
                                                    Earned
                                                </div>
                                            </div>
                                        </div>
                                        <div className='md:col-span-1 mt-2 md:mt-0'>
                                            <Button
                                                variant='outline'
                                                size='sm'
                                                className='w-full md:w-auto bg-orange-50 border-orange-200 text-orange-600 hover:bg-orange-100 hover:border-orange-300 text-xs px-3 py-2'
                                            >
                                                Visit
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex justify-between items-center mt-6 pt-4 border-t border-gray-200'>
                        <p className='text-sm text-gray-600'>
                            Showing {referrals.length} of {referrals.length} referrals
                        </p>
                        <div className='flex items-center gap-2'>
                            <Button variant='outline' disabled size='sm' className='bg-white border-gray-300 text-gray-400'>
                                <ChevronsLeft className='h-4' />
                            </Button>
                            <div className='bg-orange-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium'>
                                1
                            </div>
                            <Button variant='outline' size='sm' className='bg-white border-gray-300 text-gray-700 hover:bg-gray-50'>
                                <ChevronsRight className='h-4' />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AffiliatePage