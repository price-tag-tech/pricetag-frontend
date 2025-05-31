import CatalogsHeader from '../../ui/catalogs-header'

const RecentlyViewed = () => {

    const products = [
        { imageUrl: "/assets/products/product-6.png", name: "Bluetooth Speaker", price: 59.99 },
        { imageUrl: "/assets/products/product-7.png", name: "Coffee Maker", price: 89.99 },
        { imageUrl: "/assets/products/product-8.png", name: "Desk Lamp", price: 35.99 },
        { imageUrl: "/assets/products/product-9.png", name: "Air Purifier", price: 129.99 },
        { imageUrl: "/assets/products/product-10.png", name: "Water Bottle", price: 24.99 },
        { imageUrl: "/assets/products/product-11.png", name: "Wall Clock", price: 39.99 }
    ]

    return (
        <div className='py-10 px-5 md:px-24'>
            <CatalogsHeader link='' title='Recently Viewed' />

            <div className='flex flex-col md:flex-row gap-4 mt-10'>
                {
                    products.map((product, i) => (
                        <div key={i} className='w-full md:w-1/6 shadow flex flex-col gap-y-4'>
                            <div className='w-full'>
                                <img src={product.imageUrl} alt={product.imageUrl} className='w-full h-[150pt] object-cover' />
                            </div>

                            <div className='p-3 flex flex-col gap-y-2'>
                                <h3 className='text-md md:text-xl font-[450]'>
                                    {product.name}
                                </h3>
                                <span className='text-xl md:text-2xl font-semibold'>
                                    ${product.price}
                                </span>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default RecentlyViewed