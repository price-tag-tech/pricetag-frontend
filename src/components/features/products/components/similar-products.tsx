import React from "react";
import Button from "../../../common/Button";
import { ShoppingCart, StoreIcon } from "lucide-react";

interface SimilarProduct {
    id: number;
    name: string;
    price: string;
    oldPrice: string;
    image: string;
    store: string;
    rating: number;
    reviews: number;
}

interface SimilarProductsProps {
    products: SimilarProduct[];
}

const SimilarProducts: React.FC<SimilarProductsProps> = ({ products }) => {
    return (
        <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">Similar Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-xl overflow-hidden hover:shadow-md transition bg-white"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <p className="text-sm font-medium text-[#1f1f1f] mb-1">
                                {product.name}
                            </p>
                            <p className="text-xs text-[#6e6e6e] mb-1">{product.store}</p>
                            <p className="text-[#1dbf73] font-semibold">₦{product.price}</p>
                            <p className="line-through text-xs text-[#a0a0a0]">
                                ₦{product.oldPrice}
                            </p>
                            <div className="flex gap-2 mt-3">
                                <Button variant="outline" className="flex items-center">
                                    <span className="md:hidden">
                                        <StoreIcon />
                                    </span>
                                    <span className="hidden md:block">
                                        Visit store
                                    </span>
                                </Button>
                                <Button variant="secondary">
                                    <span className="md:hidden">
                                        <ShoppingCart />
                                    </span>
                                    <span className="hidden md:block">
                                        Add to cart
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SimilarProducts;