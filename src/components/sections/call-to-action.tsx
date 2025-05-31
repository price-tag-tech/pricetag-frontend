import Button from "../common/Button"
import Section from "../layout/Section"

const CallToAction = () => {
    return (
        <Section className="bg-[#003912] min-h-[60vh] md:min-h-[90vh] text-white py-16 flex items-center justify-center" fullWidth={true} >
            <div className="w-full px-6 md:px-24 mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left Side: Text and Button */}
                <div className="w-full md:w-3/5 mt-20 md:mt-0">
                    <h2 className="text-3xl md:text-6xl font-medium leading-tight">
                        Create Your e-Store, Sell, Grow, Compare, and Shop Smarter with PriceTag!
                    </h2>
                    <div className="mt-12 flex flex-col md:flex-row gap-6 w-full lg:w-4/5">
                        <div className="flex-1">
                            <div className="flex flex-col items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#4CAF50" className="size-6">
                                    <path fillRule="evenodd" d="M15 8c0 .982-.472 1.854-1.202 2.402a2.995 2.995 0 0 1-.848 2.547 2.995 2.995 0 0 1-2.548.849A2.996 2.996 0 0 1 8 15a2.996 2.996 0 0 1-2.402-1.202 2.995 2.995 0 0 1-2.547-.848 2.995 2.995 0 0 1-.849-2.548A2.996 2.996 0 0 1 1 8c0-.982.472-1.854 1.202-2.402a2.995 2.995 0 0 1 .848-2.547 2.995 2.995 0 0 1 2.548-.849A2.995 2.995 0 0 1 8 1c.982 0 1.854.472 2.402 1.202a2.995 2.995 0 0 1 2.547.848c.695.695.978 1.645.849 2.548A2.996 2.996 0 0 1 15 8Zm-3.291-2.843a.75.75 0 0 1 .135 1.052l-4.25 5.5a.75.75 0 0 1-1.151.043l-2.25-2.5a.75.75 0 1 1 1.114-1.004l1.65 1.832 3.7-4.789a.75.75 0 0 1 1.052-.134Z" clipRule="evenodd" />
                                </svg>

                                <div>
                                    <h3 className="text-lg font-semibold">
                                        Easy Business Setup
                                    </h3>
                                    <p className="mt-1 text-gray-300 text-base">
                                        Get your store online in minutes with simple registration, customizable profiles, and instant listing tools.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#4CAF50" className="size-6">
                                    <path fillRule="evenodd" d="M15 8c0 .982-.472 1.854-1.202 2.402a2.995 2.995 0 0 1-.848 2.547 2.995 2.995 0 0 1-2.548.849A2.996 2.996 0 0 1 8 15a2.996 2.996 0 0 1-2.402-1.202 2.995 2.995 0 0 1-2.547-.848 2.995 2.995 0 0 1-.849-2.548A2.996 2.996 0 0 1 1 8c0-.982.472-1.854 1.202-2.402a2.995 2.995 0 0 1 .848-2.547 2.995 2.995 0 0 1 2.548-.849A2.995 2.995 0 0 1 8 1c.982 0 1.854.472 2.402 1.202a2.995 2.995 0 0 1 2.547.848c.695.695.978 1.645.849 2.548A2.996 2.996 0 0 1 15 8Zm-3.291-2.843a.75.75 0 0 1 .135 1.052l-4.25 5.5a.75.75 0 0 1-1.151.043l-2.25-2.5a.75.75 0 1 1 1.114-1.004l1.65 1.832 3.7-4.789a.75.75 0 0 1 1.052-.134Z" clipRule="evenodd" />
                                </svg>

                                <div>
                                    <h3 className="text-lg font-semibold">
                                        Smart Search & Comparison
                                    </h3>
                                    <p className="mt-1 text-gray-300 text-base">
                                        Enable customers to easily find, compare, and choose the best products and services — driven by transparent pricing and real reviews.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button className="mt-8 bg-white !text-black font-semibold px-6 py-3 rounded-3xl font-montserrat hover:bg-gray-200 transition">
                        Register a store
                    </Button>
                </div>

                {/* Right Side: Image and Overlays */}
                <div className="w-full md:w-2/5 mt-8 md:mt-0 relative min-h-[400pt]">
                    {/* Shopping Bag Image */}
                    <img
                        src="/bag.jpg"
                        alt="Shopping Bag"
                        className="absolute w-[350pt] h-[250pt] bg-gray-200 rounded-lg shadow-lg object-contain top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                    />
                    {/* Avatar Card */}
                    <div className="absolute flex items-center top-1/2 -left-3 md:-left-10 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full py-2 px-4 shadow-lg z-10">
                        <div className="flex items-center gap-2">
                            <img
                                src="/face.jpg"
                                alt="Avatar"
                                className="w-8 h-8 rounded-full"
                            />
                            <div>
                                <span className="font-semibold text-sm text-black py-2">
                                    Digital Shopping
                                </span>
                                <p className="text-xs  text-black">100% | Efficiency</p>
                            </div>
                        </div>
                    </div>
                    {/* Chart Overlay */}
                    <div className="absolute hidden md:block md:-bottom-[5%] -left-[100pt] bg-white rounded-lg p-4 shadow-lg z-8 w-[300pt] h-[150pt]">
                        <p className="text-sm text-gray-600">Sales Overview</p>
                        <img
                            src="/map.webp"
                            alt="Sales Overview"
                            className="w-full h-24 object-cover"
                        />
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default CallToAction