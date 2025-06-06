import React from 'react'
import CatalogsHeader from '../../ui/catalogs-header'
import ProductGrid from '../../features/products/product-grid'

const TrendingProducts = () => {
    const trendingProducts = [
        {
            id: "trending-1",
            imageUrl: "/assets/products/product-1.png",
            name: "Wireless Earbuds Pro",
            rating: 4.8,
            reviews: 156,
            price: 89.99,
            store: "AudioTech Store",
            originalPrice: 129.99,
            discount: 31
        },
        {
            id: "trending-2",
            imageUrl: "/assets/products/product-2.png",
            name: "Smart Fitness Watch",
            rating: 4.6,
            reviews: 243,
            price: 199.99,
            store: "FitGear Hub",
            originalPrice: 299.99,
            discount: 33
        },
        {
            id: "trending-3",
            imageUrl: "/assets/products/product-3.png",
            name: "Premium Coffee Maker",
            rating: 4.7,
            reviews: 89,
            price: 149.99,
            store: "Kitchen Essentials",
            originalPrice: 199.99,
            discount: 25
        },
        {
            id: "trending-4",
            imageUrl: "/assets/products/product-4.png",
            name: "Wireless Phone Charger",
            rating: 4.5,
            reviews: 312,
            price: 34.99,
            store: "Tech Solutions",
            originalPrice: 49.99,
            discount: 30
        },
        {
            id: "trending-5",
            imageUrl: "/assets/products/product-5.png",
            name: "Bluetooth Speaker",
            rating: 4.9,
            reviews: 187,
            price: 79.99,
            store: "Sound Paradise",
            originalPrice: 119.99,
            discount: 33
        }
    ]

    return (
        <div className='w-full px-5 md:px-16 lg:px-24 xl:px-32 my-12 md:my-20 lg:my-28'>
            <div className='max-w-[1600px] mx-auto'>
                <CatalogsHeader title="trending products" link="#" action="Shop All" />
                <ProductGrid products={trendingProducts} itemsPerRow={5} />

                {/* Custom CSS for hiding scrollbar */}
                <style>{`
                    .scrollbar-hide {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
            </div>
        </div>
    )
}

export default TrendingProducts