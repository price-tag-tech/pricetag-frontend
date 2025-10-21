import React from "react";
import RatingStars from "../../../ui/rating-stars";

interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice: number;
    discount: number;
    rating: number;
    reviewCount: number;
    productCode: string;
    category: string;
    description: string;
    inStock: boolean;
    stockCount: number;
    specifications: {
        brand: string;
        material: string;
        color: string;
        sizes: string[];
        weight: string;
        origin: string;
    };
}

interface ProductInfoProps {
    product: Product;
    selectedSize: string;
    setSelectedSize: (size: string) => void;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product, selectedSize, setSelectedSize }) => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-[#1f1f1f]">
                {product.name}
            </h1>

            <div className="text-md grid gap-2 text-[#6e6e6e]">
                <p>Product Code: {product.productCode}</p>
                <p>Category: {product.category}</p>
            </div>

            <div className="flex items-center gap-2">
                <RatingStars rating={product.rating} />
                <span className="text-sm text-gray-600">({product.reviewCount} reviews)</span>
            </div>

            <div>
                <p className="text-2xl font-bold text-[#1dbf73]">₦{product.price.toLocaleString()}</p>
                <p className="line-through text-sm text-[#a0a0a0]">₦{product.originalPrice.toLocaleString()}</p>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Size</h3>
                <div className="flex flex-wrap gap-2">
                    {product.specifications.sizes.map((size) => (
                        <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`aspect-square rounded-lg border-2 font-medium transition-all duration-200 p-3 ${selectedSize === size
                                ? 'border-[#1dbf73] bg-[#1dbf73] text-white'
                                : 'border-gray-300 hover:border-[#1dbf73]'
                                }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
                {!selectedSize && (
                    <p className="text-sm text-red-500">Please select a size</p>
                )}
            </div>
        </div>
    );
};

export default ProductInfo;