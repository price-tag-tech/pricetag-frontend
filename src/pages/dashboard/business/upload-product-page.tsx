import React, { useState } from 'react'
import Label from '../../../components/ui/form/label'
import Input from '../../../components/ui/form/input'
import Select from '../../../components/ui/form/select'
import Button from '../../../components/common/Button'

const UploadProductPage = () => {
    const tabs = [
        "Product Information",
        "Pricing Details",
        "Product Images & Media",
        "Shipping & Delivery",
        "Payment Options"
    ]

    const [active, setActive] = useState(0)

    return (
        <div className="w-full p-4 md:p-8">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                    Upload a Product
                </h2>
            </div>

            {/* Tabs */}
            <div className="flex flex-col md:flex-row gap-4 border-b border-gray-200 text-sm md:text-base font-medium text-gray-500">
                {tabs.map((title, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`relative pb-2 transition-all duration-300 ease-in-out hover:text-brand-600 ${active === i ? "text-brand-600" : ""
                            }`}
                    >
                        {title}

                        <span
                            className={`absolute left-0 -bottom-1 h-1 bg-green-500 rounded-full transition-all duration-300 ${active === i ? "w-full opacity-100" : "w-0 opacity-0"
                                }`}
                        ></span>
                    </button>
                ))}
            </div>

            <div className='mt-10 w-full md:w-5/6'>
                <div className='w-full md:w-4/6 mx-auto text-gray-700'>
                    <h3 className='text-2xl font-bold'>{tabs[active]}</h3>
                    <div className='mt-4'>
                        {active === 0 && (
                            <div className='flex flex-wrap flex-col md:flex-row'>
                                <div className='w-full md:w-1/2 p-2'>
                                    <Label title='Product Name' size='md' className='font-medium' />
                                    <Input type="text" placeholder='E.g., "Nike Shoe"' />
                                </div>

                                <div className='w-full md:w-1/2 p-2'>
                                    <Label title='Product Description' size='md' className='font-medium' />
                                    <Input type="text" placeholder='A brief but detailed description of the product' />
                                </div>

                                <div className='w-full md:w-1/2 p-2'>
                                    <Label title='Category' size='md' className='font-medium' />
                                    <Select name='category' options={[]} />
                                </div>

                                <div className='w-full md:w-1/2 p-2'>
                                    <Label title='Product Code' size='md' className='font-medium' />
                                    <Input type="text" placeholder='00091 - (From the system)' />
                                </div>

                                <div className='w-full md:w-1/2 p-2'>
                                    <Label title='Brand Name (If applicable)' size='md' className='font-medium' />
                                    <Input type="text" placeholder='Gucci Brand' />
                                </div>
                                <div className='w-full p-2'>
                                    <Button variant='secondary' className='font-montserrat'>
                                        Next
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UploadProductPage
