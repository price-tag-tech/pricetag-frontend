import React from 'react'
import CatalogsHeader from '../../ui/catalogs-header'
import ProductGrid from '../../features/products/product-grid'

const TrendingProducts = () => {

    const trendingProducts = [
        { id: "arewa", imageUrl: "", name: "Wireless Earbuds", rating: 4.3, reviews: 42, price: 49.99, store: "Tech Solutions" },
        { id: "arewa", imageUrl: "", name: "Wireless Earbuds", rating: 4.3, reviews: 42, price: 49.99, store: "Tech Solutions" },
        { id: "arewa", imageUrl: "", name: "Wireless Earbuds", rating: 4.3, reviews: 42, price: 49.99, store: "Tech Solutions" },
        { id: "arewa", imageUrl: "", name: "Wireless Earbuds", rating: 4.3, reviews: 42, price: 49.99, store: "Tech Solutions" },
        { id: "arewa", imageUrl: "", name: "Wireless Earbuds", rating: 4.3, reviews: 42, price: 49.99, store: "Tech Solutions" },
    ]

    return (
        <div className='w-full px-4 md:px-24 my-10 md:my-24'>
            <CatalogsHeader title="trending products" link="#" />
            <ProductGrid products={trendingProducts} itemsPerRow={5} />
        </div>
    )
}

export default TrendingProducts