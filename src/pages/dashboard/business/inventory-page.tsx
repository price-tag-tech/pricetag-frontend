import React from 'react'
import Button from '../../../components/common/Button'
import { ChevronsLeft, ChevronsRight, SortDesc } from 'lucide-react'
import ResponsiveTable from '../../../components/ui/responsive-table'
import Status from '../../../components/ui/status'

const InventoryPage = () => {
    const inventory = [
        [
            <div className="flex items-center gap-2 md:max-w-96">
                <div className='w-16'>
                    <img src="/assets/users/avatar-5.jpg" alt="" className="w-12 h-12 rounded-full" />
                </div>
                <span className='w-fit'>Quality Blue color Nike shoe with a fancy Light blue printing indicator on the foot</span>
            </div>,
            "Men Shoes", "00091", "400", "200", "200", <Status state="success" label="Active" />
        ],
        [
            <div className="flex items-center gap-2 md:max-w-96">
                <div className='w-16'>
                    <img src="/assets/users/avatar-5.jpg" alt="" className="w-12 h-12 rounded-full" />
                </div>
                <span className='w-fit'>Quality Blue color Nike shoe with a fancy Light blue printing indicator on the foot</span>
            </div>,
            "Men Shoes", "00091", "400", "200", "200", <Status state="error" label="Out of Stock" />
        ],
        [
            <div className="flex items-center gap-2 md:max-w-96">
                <div className='w-16'>
                    <img src="/assets/users/avatar-5.jpg" alt="" className="w-12 h-12 rounded-full" />
                </div>
                <span className='w-fit'>Quality Blue color Nike shoe with a fancy Light blue printing indicator on the foot</span>
            </div>,
            "Men Shoes", "00091", "400", "200", "200", <Status state="error" label="Out of Stock" />
        ],
    ]

    return (
        <div className='w-full'>
            <div className='flex items-center justify-between'>
                <div className='flex gap-4 items-center divide-x-2'>
                    <h2 className='text-2xl font-medium'>
                        Inventory
                    </h2>
                </div>

                <div>
                    <Button variant='primary' size='sm' leftIcon={<SortDesc className='w-4 h-4' />} className='font-montserrat bg-white text-black shadow border hover:bg-green-50 duration-300 transition-all' style={{ color: "black" }}>
                        Filter
                    </Button>
                </div>
            </div>

            <div className='mt-10 bg-gray-50 md:bg-white w-full shadow-sm border px-4 py-2 rounded-lg'>
                <ResponsiveTable
                    cols={['Product', 'Category', 'Poduct Code', 'Total Quantity', 'Quantity Sold', 'Quantity Remaining.', 'Status']}
                    data={inventory}
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

export default InventoryPage