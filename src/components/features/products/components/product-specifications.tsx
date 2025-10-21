import React from "react";
import {
    TagIcon,
    SwatchIcon,
    ScaleIcon,
    GlobeAltIcon,
    CubeIcon,
    SparklesIcon
} from "@heroicons/react/24/outline";

interface Specifications {
    brand: string;
    material: string;
    color: string;
    sizes: string[];
    weight: string;
    origin: string;
}

interface ProductSpecificationsProps {
    specifications: Specifications;
}

const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({ specifications }) => {
    const specItems = [
        {
            icon: TagIcon,
            label: "Brand",
            value: specifications.brand,
            color: "text-[#1dbf73]",
            bgColor: "bg-[#1dbf73]/10"
        },
        {
            icon: SparklesIcon,
            label: "Material",
            value: specifications.material,
            color: "text-blue-600",
            bgColor: "bg-blue-100"
        },
        {
            icon: SwatchIcon,
            label: "Color",
            value: specifications.color,
            color: "text-purple-600",
            bgColor: "bg-purple-100"
        },
        {
            icon: CubeIcon,
            label: "Available Sizes",
            value: specifications.sizes.join(", "),
            color: "text-orange-600",
            bgColor: "bg-orange-100"
        },
        {
            icon: ScaleIcon,
            label: "Weight",
            value: specifications.weight,
            color: "text-green-600",
            bgColor: "bg-green-100"
        },
        {
            icon: GlobeAltIcon,
            label: "Country of Origin",
            value: specifications.origin,
            color: "text-red-600",
            bgColor: "bg-red-100"
        }
    ];

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                    <IconComponent className={`w-6 h-6 ${item.color}`} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 mb-1">{item.label}</h4>
                                    <p className="text-gray-700">{item.value}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Additional Details */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-medium text-gray-900 mb-3">Product Features</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#1dbf73] rounded-full"></span>
                                Durable construction for long-lasting wear
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#1dbf73] rounded-full"></span>
                                Comfortable fit for all-day use
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#1dbf73] rounded-full"></span>
                                Easy to clean and maintain
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#1dbf73] rounded-full"></span>
                                Stylish design suitable for various occasions
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium text-gray-900 mb-3">Care Instructions</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                Clean with a damp cloth
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                Air dry only, avoid direct sunlight
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                Store in a cool, dry place
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                Avoid harsh chemicals or abrasives
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Size Guide */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Size Guide</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-3 px-4 font-semibold text-gray-900">Size</th>
                                <th className="text-left py-3 px-4 font-semibold text-gray-900">Length (cm)</th>
                                <th className="text-left py-3 px-4 font-semibold text-gray-900">Width (cm)</th>
                                <th className="text-left py-3 px-4 font-semibold text-gray-900">Fit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {specifications.sizes.map((size, index) => (
                                <tr key={size} className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="py-3 px-4 font-medium">{size}</td>
                                    <td className="py-3 px-4 text-gray-600">{25 + index * 0.5}</td>
                                    <td className="py-3 px-4 text-gray-600">{9 + index * 0.2}</td>
                                    <td className="py-3 px-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#1dbf73]/10 text-[#1dbf73]">
                                            Regular
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                    * Measurements are approximate and may vary slightly. For the best fit, we recommend trying the product or consulting our size guide.
                </p>
            </div>
        </div>
    );
};

export default ProductSpecifications;