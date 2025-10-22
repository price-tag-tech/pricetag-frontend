import React, { useState } from "react";

interface ProductImageGalleryProps {
    images: string[];
    productName: string;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images, productName }) => {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="flex flex-col gap-4">
            <img
                src={images[selectedImage]}
                alt={productName}
                className="rounded-xl border border-[#e7e7e9] h-[400pt] object-cover"
            />

            <div className="flex gap-3">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`${productName} ${index + 1}`}
                        onClick={() => setSelectedImage(index)}
                        className={`w-16 h-16 rounded-lg border object-cover cursor-pointer transition ${selectedImage === index
                            ? 'border-[#1dbf73]'
                            : 'border-[#e7e7e9] hover:border-[#1dbf73]'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductImageGallery;