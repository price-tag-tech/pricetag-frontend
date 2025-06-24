import React, { useState } from 'react'
import ProductInformation from '../../../components/sections/products/upload/product-information'
import PricingDetails from '../../../components/sections/products/upload/pricing-details'

const UploadProductPage = () => {
    const tabs = [
        { title: "Product Information", component: <ProductInformation /> },
        { title: "Pricing Details", component: <PricingDetails /> },
        { title: "Product Images & Media", component: "" },
        { title: "Shipping & Delivery", component: "" },
        { title: "Payment Options", component: "" },
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
                {tabs.map(({ title }, i) => (
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
                    <h3 className='text-2xl font-bold'>{tabs[active].title}</h3>
                    <div className='mt-4'>
                        {tabs[active].component}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UploadProductPage
