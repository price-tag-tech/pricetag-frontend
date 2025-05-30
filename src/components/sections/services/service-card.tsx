import { Star, StarHalf } from 'lucide-react'
import React from 'react'
import RatingStars from '../../ui/rating-stars'
import Button from '../../common/Button'

export interface IService {
    id: string,
    image: string,
    title: string,
    rating: number,
    bookings: number,
    pricePerHour: number,
    category: string
    available?: boolean
}
const ServiceCard = ({ id, image, bookings, pricePerHour, rating, title, category, available }: IService) => {
    return (
        <div className='w-full flex flex-col gap-4'>
            <div className='bg-gray-200 w-full h-[150pt] relative'>
                <img src={image} alt={title} />
                <div className='absolute bottom-[5pt] left-[5pt] text-sm bg-brand-600 text-white rounded-md px-2 py-1'>
                    {category}
                </div>
            </div>
            <div className='py-3 px-2 flex flex-col gap-y-3'>
                <h3 className="text-2xl font-normal">
                    {title}
                </h3>
                <div className="flex gap-x-2 items-center">
                    <div className='mr-4 flex items-center gap-x-2'>
                        <RatingStars rating={rating} />
                        <span className="text-gray-700 text-sm md:text-base font-semibold">{rating.toFixed(1)}</span>
                    </div>
                    <span className="text-gray-500 text-sm md:text-base">{bookings} bookings</span>
                </div>

                <div className='text-md font-normal text-gray-600 flex gap-x-2'>
                    <span>
                        Starting at ${pricePerHour}/hr
                    </span>
                    <span>
                        &bull;
                    </span>
                    <span>
                        {available ? "Available today" : "Not available"}
                    </span>
                </div>
            </div>
            <div className='px-4'>
                <Button variant='secondary' className='w-full font-bold font-montserrat'>
                    Book Now
                </Button>
            </div>
        </div>
    )
}

export default ServiceCard