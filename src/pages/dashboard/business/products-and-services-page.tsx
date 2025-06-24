import React from 'react'
import Button from '../../../components/common/Button'
import { ListFilterPlus, ChevronsLeft, ChevronsRight } from 'lucide-react'
import ResponsiveTable from '../../../components/ui/responsive-table'
import Status from '../../../components/ui/status'

const ProductsAndServicesPage = () => {
    const tableData = [
        [
            <div className="flex items-center gap-2 md:min-w-60">
                <div className='w-16'>
                    <img src="/assets/users/avatar-5.jpg" alt="" className="w-12 h-12 rounded-full" />
                </div>
                <span className='w-fit'>Quality Blue color Nike shoe with a fancy Light blue printing indicator on the foot</span>
            </div>,
            "000123", 10, "₦3,900", "3/18/2025 - 6:39 AM", "Men Shoes",
            <Status state="pending" />
        ],
        [
            <div className="flex items-center gap-2 md:min-w-60">
                <div className='w-16'>
                    <img src="/assets/users/avatar-5.jpg" alt="" className="w-12 h-12 rounded-full" />
                </div>
                <span className='w-fit'>Quality Blue color Nike shoe with a fancy Light blue printing indicator on the foot</span>
            </div>,
            "000123", 10, "₦3,900", "3/18/2025 - 6:39 AM", "Men Shoes",
            <Status state="rejected" />
        ],
        [
            <div className="flex items-center gap-2 md:min-w-60">
                <div className='w-16'>
                    <img src="/assets/users/avatar-5.jpg" alt="" className="w-12 h-12 rounded-full" />
                </div>
                <span className='w-fit'>Quality Blue color Nike shoe with a fancy Light blue printing indicator on the foot</span>
            </div>,
            "000123", 10, "₦3,900", "3/18/2025 - 6:39 AM", "Men Shoes",
            <Status state="approved" />
        ],
    ];


    return (
        <div className="">
            <div className='flex flex-col gap-y-5 mb-4'>
                {/* Header */}
                <div className="flex md:items-center justify-between flex-col md:flex-row w-full gap-5">
                    <div className="flex items-center justify-between md:justify-start w-full gap-4">
                        <h1 className="text-2xl font-bold text-gray-900">Products/Services</h1>
                        <Button
                            variant='outline'
                            size='sm'
                            leftIcon={<ListFilterPlus />}
                            className='button-outline-secondary text-xs bg-white border-none shadow'
                        >
                            <span>
                                Filters
                            </span>
                        </Button>
                    </div>

                    <div className="flex items-center space-x-4 bg-white px-6 py-4 shadow-md rounded-lg border w-80">
                        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold text-3xl min-w-[60px] text-center">
                            0
                        </div>
                        <div>
                            <div className="font-semibold text-gray-900">Products</div>
                            <div className="text-sm text-gray-500">Uploaded Products</div>
                        </div>
                    </div>
                </div>

                <div className='mt-10 bg-white w-full p-5 shadow'>
                    <ResponsiveTable cols={[
                        "Product / Services",
                        "Product Code",
                        "Sales",
                        "Amount",
                        "Date / Time",
                        "Category",
                        "Status",
                        "Action",
                    ]} data={tableData}
                        action={true}
                        serialized={true}
                    />
                </div>

                <div className='w-full flex justify-end'>
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
        </div >
    )
}

export default ProductsAndServicesPage