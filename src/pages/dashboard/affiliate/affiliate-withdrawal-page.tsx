import React from 'react'
import Button from '../../../components/common/Button'
import { Printer } from 'lucide-react'
import Input from '../../../components/ui/form/input'
import Select from '../../../components/ui/form/select'
import Label from '../../../components/ui/form/label'

const AffiliateWithdrawalPage = () => {

    const withdrawal = [
        {
            id: 1,
            amount: 1200,
            date: "3/18/2025",
            time: "6:02 PM",
            status: "approved",
        },
        {
            id: 2,
            amount: 1200,
            date: "3/18/2025",
            time: "6:02 PM",
            status: "approved",
        },
        {
            id: 3,
            amount: 1200,
            date: "3/18/2025",
            time: "6:02 PM",
            status: "approved",
        },
        {
            id: 4,
            amount: 1200,
            date: "3/18/2025",
            time: "6:02 PM",
            status: "approved",
        },
        {
            id: 5,
            amount: 1200,
            date: "3/18/2025",
            time: "6:02 PM",
            status: "approved",
        },

    ]

    return (
        <div className='space-y-8'>
            <div className='bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200'>
                <div className='flex items-center gap-4'>
                    <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg'>
                        <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                            <path d='M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z' />
                        </svg>
                    </div>
                    <div>
                        <h1 className='text-2xl md:text-3xl font-bold text-gray-900 mb-1'>
                            Withdrawal Request
                        </h1>
                        <p className='text-gray-600'>
                            Request a withdrawal from your affiliate earnings
                        </p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <div className='lg:col-span-1'>
                    <div className='bg-white rounded-2xl border border-gray-200 shadow-sm p-6'>
                        <h2 className='text-xl font-bold text-gray-900 mb-6'>New Withdrawal</h2>
                        <div className='space-y-6'>
                            <div>
                                <Label title="Withdrawal Amount" />
                                <Input type="number" name="amount" placeholder="Enter amount" className='mt-2' />
                                <p className='text-xs text-gray-500 mt-1'>Available balance: ₦2,700</p>
                            </div>

                            <div className='border-t border-gray-200 pt-6'>
                                <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                                    Bank Details
                                </h3>

                                <div className='space-y-4'>
                                    <div>
                                        <Label title="Bank" />
                                        <Select placeholder='--Select Bank--' name="bank" className='mt-2' />
                                    </div>

                                    <div>
                                        <Label title="Account Number" />
                                        <Input type='tel' name="accountNumber" placeholder="Enter account number" className='mt-2' />
                                    </div>

                                    <div>
                                        <Label title="Account Name" />
                                        <Input type="text" name="accountName" placeholder="Enter account name" className='mt-2' />
                                    </div>

                                    <div>
                                        <Label title='Account Type' />
                                        <Select placeholder='--Select Account Type--' name="accountType" className='mt-2' />
                                    </div>
                                </div>
                            </div>

                            <div className='pt-4'>
                                <Button variant='secondary' className='w-full font-montserrat'>
                                    Submit Withdrawal Request
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='lg:col-span-2'>
                    <div className='bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden'>
                        <div className='bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-5 border-b border-gray-200'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <h2 className='text-xl font-bold text-gray-900 mb-1'>
                                        Withdrawal History
                                    </h2>
                                    <p className='text-sm text-gray-600'>
                                        Track all your withdrawal requests and their status
                                    </p>
                                </div>
                                <Button size="sm" className='bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700'>
                                    <Printer className='h-4 w-4 mr-2' />
                                    Print
                                </Button>
                            </div>
                        </div>

                        <div className='p-6'>
                            <div className='text-sm'>
                                <div className="hidden md:grid grid-cols-5 bg-gray-50 rounded-xl px-4 py-3 font-semibold text-gray-700 text-xs uppercase tracking-wide border border-gray-200">
                                    <div className="col-span-1">S/N</div>
                                    <div className="col-span-1">Amount</div>
                                    <div className="col-span-1">Date</div>
                                    <div className="col-span-1">Time</div>
                                    <div className="col-span-1">Status</div>
                                </div>

                                <div className='w-full flex flex-col mt-4 space-y-3'>
                                    {withdrawal.map((item, i) => (
                                        <div key={i} className='bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200 hover:border-green-300'>
                                            <div className='grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2 items-center'>
                                                <div className='hidden md:block text-gray-500 font-medium'>
                                                    #{item.id.toString().padStart(3, '0')}
                                                </div>
                                                <div className='col-span-1'>
                                                    <span className='md:hidden text-xs text-gray-500 font-medium'>Amount: </span>
                                                    <span className='text-green-600 font-bold text-lg'>₦{item.amount.toLocaleString()}</span>
                                                </div>
                                                <div className='col-span-1'>
                                                    <span className='md:hidden text-xs text-gray-500 font-medium'>Date: </span>
                                                    <span className='text-gray-700 font-medium'>{item.date}</span>
                                                </div>
                                                <div className='col-span-1'>
                                                    <span className='md:hidden text-xs text-gray-500 font-medium'>Time: </span>
                                                    <span className='text-gray-600'>{item.time}</span>
                                                </div>
                                                <div className='col-span-1'>
                                                    <span className='md:hidden text-xs text-gray-500 font-medium'>Status: </span>
                                                    <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${item.status === 'approved'
                                                        ? 'bg-green-100 text-green-700'
                                                        : item.status === 'pending'
                                                            ? 'bg-yellow-100 text-yellow-700'
                                                            : 'bg-red-100 text-red-700'
                                                        }`}>
                                                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AffiliateWithdrawalPage