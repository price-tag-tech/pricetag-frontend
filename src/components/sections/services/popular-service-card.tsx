import React from 'react'
import RatingStars from '../../ui/rating-stars'
import Button from '../../common/Button'
import { PhoneCallIcon, StoreIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

interface PopularServiceCardProps {
    imageUrl: string,
    name: string,
    description: string,
    rating: number,
    reviews: number,
    price: number
}

const PopularServiceCard = (props: PopularServiceCardProps) => {
    return (
        <div className='w-full flex flex-col gap-y-1 shadow'>
            <div className='w-full flex flex-col gap-y-2'>
                <div className='w-full'>
                    <img src={props.imageUrl} alt={props.name} className='h-[150pt] w-full object-cover' />
                </div>
                <div className='p-4 flex flex-col gap-y-3'>
                    <div className='flex gap-x-3 items-center'>
                        <div className='h-10 md:h-16 w-10 md:w-16 rounded-full bg-gray-200'>
                        </div>
                        <h4 className='text-xl md:text-2xl text-black font-semibold'>
                            {props.name}
                        </h4>
                    </div>
                    <p className="text-sm md:text-md text-black">
                        {props.description}
                    </p>

                    <div className='flex items-center gap-x-3 text-sm md:text-lg my-2'>
                        <span className="text-black font-bold">
                            {props.rating}
                        </span>
                        <RatingStars rating={4.3} />
                        <span>
                            ({props.reviews} Reviews)
                        </span>
                    </div>
                    <div className='text-brand-600 font-bold text-lg md:text-xl mt-2 font-montserrat'>
                        From &#8358;{props.price.toLocaleString()}
                    </div>

                    <div className="flex items-center gap-x-4 mt-2">
                        <Button size="sm" variant='secondary' className='text-xs font-montserrat flex gap-x-2'>
                            <PhoneCallIcon className='h-4' />
                            Get Contact
                        </Button>

                        <Link
                            to="/"
                            className="relative flex items-center p-0 text-xs font-bold text-black
                                hover:text-black/70 hover:after:w-[90%]
                                after:content-[''] after:absolute after:bottom-[-6px] after:left-[5%] after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300"
                        >
                            <StoreIcon className='h-4' />
                            Visit Store
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularServiceCard