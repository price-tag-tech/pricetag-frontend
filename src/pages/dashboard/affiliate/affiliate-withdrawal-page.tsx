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
        <div className=''>
            <h3 className='text-2xl font-semibold'>
                Place a Withdrawal
            </h3>
            <div className='mt-4 md:mt-8 flex flex-col md:flex-row gap-8'>
                <div className='w-full md:w-1/3'>
                    <div className='flex flex-col gap-y-1   '>
                        <Label title="Enter Amount" />
                        <Input type="number" name="amount" />
                    </div>

                    <div className='text-lg font-semibold uppercase mt-6'>
                        Bank Details
                    </div>

                    <div className='flex flex-col gap-y-1 mt-4'>
                        <Label title="Bank" />
                        <Select default='--Select Bank--' name="bank" />
                    </div>

                    <div className='flex flex-col gap-y-1 mt-4'>
                        <Label title="Account Number" />
                        <Input type='tel' name="accountNumber" />
                    </div>

                    <div className='flex flex-col gap-y-1 mt-4'>
                        <Label title="Account Name" />
                        <Input type="text" name="accountName" />
                    </div>

                    <div className='flex flex-col gap-y-1 mt-4'>
                        <Label title='Account Type' />
                        <Select default='--Select Account Type--' name="accountType" />
                    </div>

                    <div className='mt-4'>
                        <Button variant='secondary' size="sm" className='w-full py-3'>
                            Proceed
                        </Button>
                    </div>
                </div>

                <div className='px-3 w-full md:w-2/3 overflow-y-auto'>
                    <div className='w-full h-full bg-gray-50 rounded-lg shadow border p-5'>
                        <div className='flex-between uppercase p-2'>
                            <h4 className='text-md md:text-lg font-semibold'>
                                Withdrawal History
                            </h4>

                            <Button size="sm" className='font-montserrat uppercase font-semibold'>
                                <Printer className='md:mr-3 h-4 md:h-6' />
                                <span className='hidden md:block'>
                                    Print
                                </span>
                            </Button>
                        </div>

                        <div className='mt-4 md:my-8 text-sm'>
                            <div className="hidden md:grid grid-cols-5 border-y-2 border-y-gray-200 py-3 font-semibold uppercase">
                                <div className="col-span-1 pl-5">S/N</div>
                                <div className="col-span-1">Amount</div>
                                <div className="col-span-1">Date</div>
                                <div className="col-span-1">Time</div>
                                <div className="col-span-1">Status</div>
                            </div>
                            <div className='w-full flex flex-col py-2 md:py-4 divide-y-2'>

                                {withdrawal.map((withdrawal, i) => (
                                    <div key={i} className='grid grid-cols-1 md:grid-cols-5 gap-y-2 py-3'>
                                        <div className='hidden md:block md:col-span-1 pl-5'>
                                            {withdrawal.id}
                                        </div>
                                        <div className='col-span-12 md:col-span-1'>
                                            {withdrawal.amount}
                                        </div>
                                        <div className='col-span-12 md:col-span-1 font-semibold text-brand-700 uppercase'>
                                            {withdrawal.date}
                                        </div>
                                        <div className='col-span-12 md:col-span-1'>
                                            {withdrawal.time}
                                        </div>
                                        <div className='col-span-12 md:col-span-1'>
                                            {withdrawal.status}
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AffiliateWithdrawalPage