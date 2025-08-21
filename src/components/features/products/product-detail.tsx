import React, { useState } from "react";
import ProductImageGallery from "./components/product-image-gallery";
import ProductInfo from "./components/product-info";
import ProductActions from "./components/product-actions";
import DeliveryInfo from "./components/delivery-info";
import SellerInfo from "./components/seller-info";
import SimilarProducts from "./components/similar-products";

// Mock data - in real app this would come from props or API
const mockProduct = {
  id: "1",
  name: "Quality Blue color Nike shoe with a fancy Light blue printing indicator on the foot",
  price: 36900,
  originalPrice: 69000,
  discount: 47,
  rating: 4.5,
  reviewCount: 128,
  productCode: "33309",
  category: "Men Shoes",
  description: "Experience ultimate comfort and style with these premium Nike shoes. Featuring a striking blue colorway with light blue accents, these shoes are perfect for both casual wear and athletic activities.",
  images: [
    "/assets/products/product-1.png",
    "/assets/products/product-2.png",
    "/assets/products/product-3.png",
    "/assets/products/product-4.png",
  ],
  inStock: true,
  stockCount: 15,
  seller: {
    name: "Prince G Shop",
    avatar: "/assets/users/avatar-1.jpg",
    description: "Official store & good pricing",
    rating: 4.8,
    totalSales: "180.42K",
    deliveryRate: 95,
    phone: "08032454684"
  },
  specifications: {
    brand: "Nike",
    material: "Synthetic Leather",
    color: "Blue",
    sizes: ["40", "41", "42", "43", "44", "45"],
    weight: "0.8kg",
    origin: "Vietnam"
  }
};

const similarProducts = [
  {
    id: 1,
    name: "Nike Shoe",
    price: "36,900",
    oldPrice: "69,000",
    image: "/assets/products/product-1.png",
    store: "Prince G Shop",
    rating: 4.3,
    reviews: 89
  },
  {
    id: 2,
    name: "Blue Sneakers",
    price: "36,900",
    oldPrice: "69,000",
    image: "/assets/products/product-2.png",
    store: "Prince G Shop",
    rating: 4.1,
    reviews: 67
  },
  {
    id: 3,
    name: "White Trainers",
    price: "36,900",
    oldPrice: "69,000",
    image: "/assets/products/product-3.png",
    store: "Prince G Shop",
    rating: 4.6,
    reviews: 134
  },
  {
    id: 4,
    name: "Pink Runners",
    price: "36,900",
    oldPrice: "69,000",
    image: "/assets/products/product-4.png",
    store: "Prince G Shop",
    rating: 4.2,
    reviews: 78
  },
];

const ProductDetail: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-full bg-white">
      <div className="mx-auto px-4 sm:px-8 md:px-16 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <span className="hover:text-[#1dbf73] cursor-pointer transition-colors">Home</span>
          <span>/</span>
          <span className="hover:text-[#1dbf73] cursor-pointer transition-colors">Men Shoes</span>
          <span>/</span>
          <span className="text-gray-900 font-medium">Nike Shoes</span>
        </nav>

        {/* Product details grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: product images */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <ProductImageGallery images={mockProduct.images} productName={mockProduct.name} />
            <div className="mt-2">
              <p className="text-gray-500">
                Call store owner for enquiries:{" "}
                <span className="font-medium text-[#1dbf73]">
                  {mockProduct.seller.phone}
                </span>
              </p>
              <div className="flex gap-3 mt-2">
                <div className="flex items-center gap-2">
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Save for later
                </div>

                <div className="p-3 rounded-xl border shadow">
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </div>
                <div className="p-3 rounded-xl border shadow">
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Center: product info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <ProductInfo
              product={mockProduct}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
            <ProductActions
              product={mockProduct}
              quantity={quantity}
              setQuantity={setQuantity}
              selectedSize={selectedSize}
            />
          </div>



          {/* Seller Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <DeliveryInfo />

            <SellerInfo seller={mockProduct.seller} />
          </div>
        </div>

        {/* Similar Products */}
        <SimilarProducts products={similarProducts} />
      </div>
    </div>
  );
};

export default ProductDetail;