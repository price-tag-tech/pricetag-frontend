import React from "react";
import Button from "../../../common/Button";

interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice: number;
    inStock: boolean;
    stockCount: number;
    seller: {
        phone: string;
    };
}

interface ProductActionsProps {
    product: Product;
    quantity: number;
    setQuantity: (quantity: number) => void;
    selectedSize: string;
}

const ProductActions: React.FC<ProductActionsProps> = ({
    product,
    quantity,
    setQuantity,
    selectedSize
}) => {
    const handleQuantityChange = (change: number) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1 && newQuantity <= product.stockCount) {
            setQuantity(newQuantity);
        }
    };

    const isAddToCartDisabled = !selectedSize || !product.inStock;

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-3">
                <p className="text-sm text-[#6e6e6e]">Quantity:</p>
                <div className="flex items-center border rounded-md overflow-hidden">
                    <button
                        onClick={() => handleQuantityChange(-1)}
                        disabled={quantity <= 1}
                        className="px-3 py-1 hover:bg-[#f5f5f5] disabled:opacity-50"
                    >
                        -
                    </button>
                    <span className="px-4">{quantity}</span>
                    <button
                        onClick={() => handleQuantityChange(1)}
                        disabled={quantity >= product.stockCount}
                        className="px-3 py-1 hover:bg-[#f5f5f5] disabled:opacity-50"
                    >
                        +
                    </button>
                </div>
            </div>

            <div className="flex gap-3 mt-2">
                <Button
                    variant="outline"
                    disabled={isAddToCartDisabled}
                >
                    Add to Cart
                </Button>
                <Button
                    variant="secondary"
                    disabled={isAddToCartDisabled}
                >
                    Proceed with Payment
                </Button>
            </div>

            {isAddToCartDisabled && (
                <p className="text-sm text-red-500">
                    {!selectedSize ? "Please select a size" : "Product is out of stock"}
                </p>
            )}
        </div>
    );
};

export default ProductActions;