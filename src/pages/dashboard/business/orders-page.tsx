import { ChevronsLeft, ChevronsRight, SortDesc } from 'lucide-react'
import React from 'react'
import Button from '../../../components/common/Button'
import ResponsiveTable from '../../../components/ui/responsive-table'
import Status from '../../../components/ui/status'

const OrdersPage = () => {
    const orders = [
        [
            <div className="flex items-center gap-2 md:min-w-60">
                <div className='w-16'>
                    <img src="/assets/users/avatar-5.jpg" alt="" className="w-12 h-12 rounded-full" />
                </div>
                <span className='w-fit'>Quality Blue color Nike shoe with a fancy Light blue printing indicator on the foot</span>
            </div>,
            "000123", 10, "₦3,900", "Prince Godson", "09037494084", "3/18/2025 - 6:39 AM",
            <Status state="success" label="Successful" />
        ],
        [
            <div className="flex items-center gap-2 md:min-w-60">
                <div className='w-16'>
                    <img src="/assets/users/avatar-5.jpg" alt="" className="w-12 h-12 rounded-full" />
                </div>
                <span className='w-fit'>Quality Blue color Nike shoe with a fancy Light blue printing indicator on the foot</span>
            </div>,
            "000123", 10, "₦3,900", "Prince Godson", "09037494084", "3/18/2025 - 6:39 AM",
            <Status state="success" label="Successful" />
        ],
        [
            <div className="flex items-center gap-2 md:min-w-60">
                <div className='w-16'>
                    <img src="/assets/users/avatar-5.jpg" alt="" className="w-12 h-12 rounded-full" />
                </div>
                <span className='w-fit'>Quality Blue color Nike shoe with a fancy Light blue printing indicator on the foot</span>
            </div>,
            "000123", 10, "₦3,900", "Prince Godson", "09037494084", "3/18/2025 - 6:39 AM",
            <Status state="pending" />
        ],
    ]

    return (
        <div className='w-full p-4'>
            <div className='flex items-center justify-between'>
                <div className='flex gap-4 items-center divide-x-2'>
                    <h2 className='text-2xl font-medium'>
                        Orders
                    </h2>
                    <p className='pl-3 text-gray-500'>
                        You have <b>20</b> pending orders
                    </p>
                </div>

                <div>
                    <Button variant='primary' size='sm' leftIcon={<SortDesc className='w-4 h-4' />} className='font-montserrat bg-white text-black shadow border hover:bg-green-50 duration-300 transition-all' style={{ color: "black" }}>
                        Filter
                    </Button>
                </div>
            </div>

            <div className='mt-10 bg-white w-full shadow-sm border p-5 rounded-lg'>
                <ResponsiveTable
                    cols={['Orders', 'Product Code', 'Quantity', 'Amount', 'Client Name', 'Phone No.', 'Date/Time', 'Status']}
                    data={orders}
                    serialized={true}
                />
            </div>

            <div className='w-full flex justify-end mt-5'>
                <Button variant='outline' size='sm' disabled className='button-outline-secondary flex items-center gap-2'>
                    <ChevronsLeft className='h-4' />
                </Button>
                <div className='flex items-center gap-2 text-gray-500 text-sm px-3 py-1 font-semibold'>
                    Page 1
                </div>
                <Button variant='outline' size='sm' className='button-outline-secondary flex items-center gap-2'>
                    <ChevronsRight className='h-4' />
                </Button>
            </div>
        </div>
    )
}

export default OrdersPage