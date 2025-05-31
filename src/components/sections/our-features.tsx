import React from 'react'
import Section from '../layout/Section'
import { ComputerDesktopIcon, DevicePhoneMobileIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'
import { TagIcon } from 'lucide-react'

const OurFeatures = () => {
    return (
        <Section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-semibold mb-12 max-w-lg">
                    Get paid by clients who buy your products and services
                </h2>

                {/* Icons Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {/* Icon 1 */}
                    <div>
                        <div className="mb-4 flex justify-center">
                            <DevicePhoneMobileIcon className="w-12 h-12  text-gray-800" />
                        </div>
                        <p className="text-sm text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </div>

                    {/* Icon 2 */}
                    <div>
                        <div className="mb-4 flex justify-center">
                            <ComputerDesktopIcon className="w-12 h-12  text-gray-800" />
                        </div>
                        <p className="text-sm text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </div>

                    {/* Icon 3 */}
                    <div>
                        <div className="mb-4 flex justify-center">
                            <TagIcon className="w-12 h-12  text-gray-800" />
                        </div>
                        <p className="text-sm text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </div>

                    {/* Icon 4 */}
                    <div>
                        <div className="mb-4 flex justify-center">
                            <RocketLaunchIcon className="w-12 h-12 text-gray-800" />
                        </div>
                        <p className="text-sm text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default OurFeatures