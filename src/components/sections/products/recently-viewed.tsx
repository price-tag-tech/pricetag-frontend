import CatalogsHeader from '../../ui/catalogs-header'

const RecentlyViewed = () => {

    const products = [
        { imageurl: "", name: "Bluetooth Speaker", price: 59.99 },
        { imageUrl: "", name: "Coffee Maker", price: 89.99 },
        { imageUrl: "", name: "Desk Lamp", price: 35.99 },
        { imageUrl: "", name: "Air Purifier", price: 129.99 },
        { imageUrl: "", name: "Water Bottle", price: 24.99 },
        { imageUrl: "", name: "Wall Clock", price: 39.99 }
    ]

    return (
        <div className='py-10 px-4 md:px-24'>
            <CatalogsHeader link='' title='Recently Viewed' />

            <div className='flex flex-col md:flex-row gap-4 mt-10'>
                {
                    products.map((product, i) => (
                        <div key={i} className='w-full md:w-1/6 shadow flex flex-col gap-y-4'>
                            <div className='w-full h-[150pt] bg-gray-200'>
                                <img src={product.imageurl} alt={product.name} />
                            </div>

                            <div className='p-3 flex flex-col gap-y-2'>
                                <h3 className='text-xl font-[450]'>
                                    {product.name}
                                </h3>
                                <span className='text-2xl font-semibold'>
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