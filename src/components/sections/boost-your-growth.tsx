import React from 'react'

const BoostYourGrowth = () => {

    const items = [
        { note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", imageUrl: "/assets/boosts-growth/boost-growth-1.jpg" },
        { note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", imageUrl: "/assets/boosts-growth/boost-growth-2.jpg" },
        { note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", imageUrl: "/assets/boosts-growth/boost-growth-3.jpg" },
    ]

    return (
        <div className='px-5 md:px-24 py-10'>
            <h3 className='text-4xl font-medium text-gray-700'>
                Helpful guides to boost your growth
            </h3>

            <div className='flex gap-y-12 md:gap-8 mt-10 flex-col md:flex-row'>
                {items.map((item, i) => (
                    <div className='flex flex-col md:gap-y-3 w-full'>
                        <img src={item.imageUrl} alt={item.note.substring(0, 10)} className='bg-gray-200 h-[200pt] object-cover' />
                        <div>
                            <p className='mt-5'>
                                {item.note}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BoostYourGrowth