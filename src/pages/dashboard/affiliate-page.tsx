import { ChevronRight, ChevronsLeft, ChevronsRight, Copy, Wallet } from 'lucide-react'
import React from 'react'
import Button from '../../components/common/Button'

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
        <div className=''>
            <div className='flex items-center justify-between flex-col md:flex-row'>
                <div className='flex gap-1 text-sm items-center text-gray-600'>
                    <h4 className='text-lg md:text-2xl font-semibold text-black'>
                        Affiliate Earnings
                    </h4>
                    <ChevronRight className='h-4' />
                    <div className='relative'>
                        Prince Godson
                        <span className='absolute -top-[12pt] right-[5pt] text-[7pt] font-medium bg-[#FFDAC9] px-1 py-.5'>
                            AGENT
                        </span>
                    </div>
                </div>

                <div className='hidden md:flex gap-x-3'>
                    <div className='flex gap-2 text-xs items-center bg-gray-100 shadow px-2 py-1.5 rounded-xl'>
                        <span className='py-2 px-3 rounded-lg h-full flex items-center text-black bg-white font-bold text'>
                            Referral Link
                        </span>
                        <input type="text" disabled value="https://pricetag.ng/c/67d859bc-b2b4...." className='text-gray-600 bg-transparent w-[150pt]' />
                        <Button variant='secondary' className='text-white px-2'>
                            <Copy className='h-4' />
                        </Button>
                    </div>
                    <div className='flex'>
                        <Button to='/user/affiliate/withdraw' size="sm" className='font-montserrat'>
                            <span className='mr-2'>
                                <Wallet />
                            </span>
                            Place a Withdrawal
                        </Button>
                    </div>
                </div>
            </div>

            <div className='mt-4 md:mt-8 flex flex-col md:flex-row gap-4'>
                <div className='w-full md:w-6/12 flex flex-col md:flex-row gap-4'>
                    <div className='w-full md:w-1/3 bg-[#D4FFE5] py-10 p-5 text-green-800 flex flex-col gap-y-5 rounded-2xl shadow-sm'>
                        <Wallet className='h-8' />
                        <div className='flex flex-col gap-y-1'>
                            <span className="text-3xl font-bold">
                                &#8358;2,700
                            </span>
                            <span className='font-semibold'>
                                Total Commission
                            </span>
                        </div>
                    </div>

                    <div className='w-full md:w-1/3 bg-[#FFF5CC] py-10 p-5 text-yellow-800 flex flex-col gap-y-5 rounded-2xl shadow-sm'>
                        <Wallet className='h-8' />
                        <div className='flex flex-col gap-y-1'>
                            <span className="text-3xl font-bold">
                                &#8358;0.00
                            </span>
                            <span className='font-semibold'>
                                Total Withdrawal
                            </span>
                        </div>
                    </div>

                    <div className='w-full md:w-1/3 bg-[#E3F2FD] py-10 p-5 text-blue-800 flex flex-col gap-y-5 rounded-2xl shadow-sm'>
                        <Wallet className='h-8' />
                        <div className='flex flex-col gap-y-1'>
                            <span className="text-3xl font-bold">
                                &#8358;2,700
                            </span>
                            <span className='font-semibold'>
                                Balance
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row items-center gap-3 w-full md:w-6/12'>
                    <div className='w-full md:w-2/5 flex flex-col gap-y-3'>
                        <div className='shadow-lg px-6 py-4 rounded-xl'>
                            <h5 className='text-4xl font-bold text-brand-600'>
                                ₦900
                            </h5>
                            <p className='text-xs text-gray-600 font-medium mt-2'>
                                Last Credit: 3/18/2025
                            </p>
                        </div>

                        <div className='border px-6 py-4 rounded-xl'>
                            <h5 className='text-4xl font-bold text-gray-600'>
                                ₦0.00
                            </h5>
                            <p className='text-xs text-gray-600 font-medium mt-2'>
                                Last Withdrawal: 3/18/2025
                            </p>
                        </div>
                    </div>
                    <div className='w-full md:w-1/5 flex flex-col items-center '>
                        <h3 className='text-7xl font-bold text-center'>
                            3
                        </h3>
                        <span className='text-lg text-gray-700'>
                            Referrals
                        </span>
                    </div>
                    <div className='w-full md:w-2/5 flex items-center justify-center'>
                        <img src="/assets/affiliate.png" alt="affiliate" className='h-[150pt] object-center' />
                    </div>
                </div>
            </div>

            <div className='w-full mt-4 md:mt-10'>
                <div className='w-full flex-between flex-col md:flex-row gap-y-2'>
                    <h2 className='text-lg md:text-2xl font-medium'>
                        Your Referrals
                    </h2>
                </div>

                <div className='mt-4 md:my-8 text-xs'>
                    <div className="hidden md:grid grid-cols-12 border-y-2 border-y-gray-200 py-3 font-semibold uppercase">
                        <div className="col-span-1">S/N</div>
                        <div className="col-span-2">Name</div>
                        <div className="col-span-2">Store</div>
                        <div className="col-span-2">Phone Number</div>
                        <div className="col-span-2">Date/Time</div>
                        <div className="col-span-2">Referral Commission</div>
                        <div className="col-span-1">Action</div>
                    </div>
                    <div className='w-full flex flex-col py-2 md:py-4 divide-y-2'>

                        {referrals.map(order => (
                            <div key={order.id} className='grid grid-cols-1 md:grid-cols-12 gap-y-2 py-3'>
                                <div className='hidden md:block md:col-span-1'>
                                    {order.id}
                                </div>
                                <div className='col-span-12 md:col-span-2'>
                                    {order.name}
                                </div>
                                <div className='col-span-12 md:col-span-2 font-semibold text-brand-700 uppercase'>
                                    {order.store}
                                </div>
                                <div className='col-span-12 md:col-span-2'>
                                    {order.phoneNumber}
                                </div>
                                <div className='col-span-12 md:col-span-2'>
                                    {order.dateTime}
                                </div>
                                <div className='col-span-12 md:col-span-2'>
                                    {order.commission}
                                </div>
                                <div className='col-span-1'>
                                    <Button variant='outline' size='sm' className='button-outline-secondary font-medium text-xs w-full md:w-fit'>
                                        Visit Store
                                    </Button>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                <div className='flex justify-end'>
                    <div className='flex items-center gap-4'>
                        <Button variant='outline' disabled size='sm' className='button-outline-secondary'>
                            <ChevronsLeft className='h-4' />
                        </Button>
                        <span>
                            Page 1
                        </span>
                        <Button variant='outline' size='sm' className='button-outline-secondary'>
                            <ChevronsRight className='h-4' />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AffiliatePage