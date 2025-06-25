import { FormEvent, useState } from 'react'
import ProductInformation from '../../../components/sections/products/upload/product-information'
import PricingDetails from '../../../components/sections/products/upload/pricing-details'
import ShippingAndDelivery from '../../../components/sections/products/upload/shipping-details'
import PaymentOptions from '../../../components/sections/products/upload/payment-options'
import ProductImagesAndMedia from '../../../components/sections/products/upload/product-images-and-media'
import { useNavigate } from 'react-router-dom'

const UploadProductPage = () => {
    const [active, setActive] = useState(0)
    const navigator = useNavigate()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        navigator("/business/success", {
            state: {
                title: "Product Upload Successful!",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                illustration: "celebrate.svg"
            }
        })
    }

    const handleNext = () => {
        setActive(() => active + 1)
    }

    const tabs = [
        { title: "Product Information", component: <ProductInformation action={handleNext} /> },
        { title: "Pricing Details", component: <PricingDetails action={handleNext} /> },
        { title: "Product Images & Media", component: <ProductImagesAndMedia action={handleNext} /> },
        { title: "Shipping & Delivery", component: <ShippingAndDelivery action={handleNext} /> },
        { title: "Payment Options", component: <PaymentOptions action={handleSubmit} /> },
    ]

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
                    <form className='mt-4' onSubmit={handleSubmit}>
                        {tabs[active].component}
                    </form>
                </div>
            </div>

        </div>
    )
}

export default UploadProductPage
