import React from 'react'
import Button from '../../../components/common/Button'
import { Ellipsis, Plus, Upload } from 'lucide-react'
import ProgressBar from '@ramonak/react-progress-bar'
import ResponsiveTable from '../../../components/ui/responsive-table'
import Status from '../../../components/ui/status'
import WeeklySalesChart from '../../../components/features/charts/weekly-sales-chart'

const BusinessDashboard = () => {
    const latestOrders = [
        [
            <div className="flex items-center gap-2 md:min-w-60">
                <div className='w-16'>
                    <img src="/assets/users/avatar-5.jpg" alt="" className="w-12 h-12 rounded-full" />
                </div>
                <span className='w-fit'>Quality Blue color Nike shoe with a fancy Light blue printing indicator on the foot</span>
            </div>,
            "000123", 2, "₦3,900", "Prince Godson", "3/18/2025 - 6:39 AM",
            <Status state="pending" />
        ],
        [
            <div className="flex items-center gap-2 md:min-w-60">
                <div className='w-16'>
                    <img src="/assets/users/avatar-5.jpg" alt="" className="w-12 h-12 rounded-full" />
                </div>
                <span className='w-fit'>Quality Blue color Nike shoe with a fancy Light blue printing indicator on the foot</span>
            </div>,
            "000123", 2, "₦3,900", "Prince Godson", "3/18/2025 - 6:39 AM",
            <Status state="success" label='Successful' />
        ],
        [
            <div className="flex items-center gap-2 md:min-w-60">
                <div className='w-16'>
                    <img src="/assets/users/avatar-5.jpg" alt="" className="w-12 h-12 rounded-full" />
                </div>
                <span className='w-fit'>Quality Blue color Nike shoe with a fancy Light blue printing indicator on the foot</span>
            </div>,
            "000123", 2, "₦3,900", "Prince Godson", "3/18/2025 - 6:39 AM",
            <Status state="success" label='Successful' />
        ],
        [
            <div className="flex items-center gap-2 md:min-w-60">
                <div className='w-16'>
                    <img src="/assets/users/avatar-5.jpg" alt="" className="w-12 h-12 rounded-full" />
                </div>
                <span className='w-fit'>Quality Blue color Nike shoe with a fancy Light blue printing indicator on the foot</span>
            </div>,
            "000123", 2, "₦3,900", "Prince Godson", "3/18/2025 - 6:39 AM",
            <Status state="pending" />
        ],
    ]

    return (
        <div className='w-full py-10 md:px-4'>
            <div className='flex md:items-center justify-between flex-col md:flex-row gap-4'>
                <div className='flex flex-col md:flex-row md:gap-4 md:items-center md:divide-x-2'>
                    <h2 className='text-2xl font-semibold'>
                        Welcome Back!
                    </h2>
                    <p className='md:pl-3 text-gray-500 text-sm md:text-md'>
                        Member Since 3rd May, 2025
                    </p>
                </div>

                <div className='flex gap-2'>
                    <Button variant='primary' size='sm' className='font-montserrat bg-white text-black shadow border hover:bg-green-50 duration-300 transition-all' style={{ color: "black" }}>
                        Customize Store
                    </Button>
                    <Button variant='primary' size='sm' className='font-montserrat bg-white text-black shadow border hover:bg-green-50 duration-300 transition-all' style={{ color: "black" }}>
                        <Ellipsis />
                    </Button>
                </div>
            </div>
            <div className='mt-10 flex flex-col md:flex-row gap-6'>
                <div className='w-full md:w-1/4'>
                    <div className='bg-white border shadow p-10 rounded-md flex flex-col gap-5'>
                        <Button href='/business/products/upload' leftIcon={<Upload />} className='w-full bg-brand-100 text-brand-900 border-brand-800 border-2 rounded-md py-4 text-center font-bold flex items-center gap-3 justify-center hover:text-brand-50 font-montserrat transition-all duration-300 ease-in-out' style={{ color: "#003912" }}>
                            Upload a Product
                        </Button>

                        <Button href='/business/services/add' leftIcon={<Plus />} className='w-full bg-gray-200 shadow-inner text-gray-900 rounded-md py-4 text-center font-bold flex items-center gap-3 justify-center hover:bg-gray-300 font-montserrat transition-all duration-300 ease-in-out' style={{ color: "#585858" }}>
                            Add a Service
                        </Button>

                        <div className='flex gap-3'>
                            <div className='text-green-600 bg-green-100 h-16 min-w-16 flex items-center justify-center text-4xl font-bold rounded-lg p-2'>
                                0
                            </div>
                            <div className='flex flex-col justify-center'>
                                <h4 className='text-xl font-semibold'>
                                    Products
                                </h4>
                                <p className='text-gray-500 text-sm'>
                                    Uploaded Products
                                </p>
                            </div>
                        </div>

                        <div className='flex gap-3'>
                            <div className='text-yellow-600 bg-yellow-100 h-16 min-w-16 flex items-center justify-center text-4xl font-bold rounded-lg p-2'>
                                0
                            </div>
                            <div className='flex flex-col justify-center'>
                                <h4 className='text-xl font-semibold'>
                                    Services
                                </h4>
                                <p className='text-gray-500 text-sm'>
                                    Uploaded Services
                                </p>
                            </div>
                        </div>

                        <div className='flex gap-3'>
                            <div className='text-blue-600 bg-blue-100 h-16 min-w-16 flex items-center justify-center text-4xl font-bold rounded-lg p-2'>
                                0
                            </div>
                            <div className='flex flex-col justify-center'>
                                <h4 className='text-xl font-semibold'>
                                    Customers
                                </h4>
                                <p className='text-gray-500 text-sm'>
                                    Your Customers
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <h4 className='text-2xl font-semibold'>
                            Number of Sales
                        </h4>
                        <div className='mt-3 flex gap-3 flex-col md:flex-row'>
                            <div className='flex flex-col w-full md:w-1/3'>
                                <h5 className='text-4xl md:text-2xl font-bold'>
                                    180.42k
                                </h5>
                                <p className='text-sm text-gray-700'>
                                    Successful Sales
                                </p>
                            </div>
                            <div className='w-full md:w-2/3 flex flex-col gap-y-2'>
                                <p className='font-light'>
                                    delivery rate:
                                </p>
                                <ProgressBar completed={80} height='20px' bgColor='#1DBF73' labelSize='13px' labelAlignment='left' customLabelStyles={{ paddingLeft: "20px" }} className='text-sm' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-3/4 md:px-3'>
                    <div className='bg-white border shadow p-10 rounded-md w-full h-fit'>
                        <WeeklySalesChart />
                    </div>

                    <div className='mt-4 bg-gray-50 md:bg-white shadow md:border rounded-xl py-4 px-2'>
                        <div className='w-full flex items-center justify-between px-4'>
                            <h3 className='font-bold'>
                                Latest Orders
                            </h3>
                            <Button variant='text' className='hover:no-underline hover:text-brand-700 duration-300 transition-all font-montserrat'>
                                All Orders
                            </Button>
                        </div>
                        <ResponsiveTable
                            cols={["Orders", "Product Code", "Quantity", "Amount", "Client Name", "Date/Time", "Status"]}
                            serialized={true}
                            data={latestOrders}
                            transparent={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessDashboard