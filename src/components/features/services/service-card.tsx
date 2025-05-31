import RatingStars from '../../ui/rating-stars'
import Button from '../../common/Button'

export interface ServiceCardProps {
    id: string,
    imageUrl: string,
    name: string,
    rating: number,
    bookings: number,
    pricePerHour: number,
    category: string
    available?: boolean
}
const ServiceCard: React.FC<ServiceCardProps> = (props) => {
    return (
        <div className='w-full flex flex-col gap-4 shadow'>
            <div className='w-full relative'>
                <img src={props.imageUrl} alt={props.name} className='h-[200pt] w-full object-cover' />
                <div className='absolute bottom-[5pt] left-[5pt] text-sm bg-brand-600 text-white rounded-md px-2 py-1'>
                    {props.category}
                </div>
            </div>
            <div className='px-3 py-4 flex flex-col gap-y-4'>
                <div className='py-3 flex flex-col gap-y-3'>
                    <h3 className="text-2xl font-normal">
                        {props.name}
                    </h3>
                    <div className="flex gap-x-2 items-center">
                        <div className='mr-4 flex items-center gap-x-2'>
                            <RatingStars rating={1} />
                            <span className="text-gray-700 text-sm md:text-base font-semibold">{props.rating.toFixed(1)}</span>
                        </div>
                        <span className="text-gray-500 text-sm md:text-base">{props.bookings} bookings</span>
                    </div>

                    <div className='text-md font-normal text-gray-600 flex gap-x-2'>
                        <span>
                            Starting at ${props.pricePerHour}/hr
                        </span>
                        <span>
                            &bull;
                        </span>
                        <span>
                            {props.available ? "Available today" : "Not available"}
                        </span>
                    </div>
                </div>
                <div className='px-2'>
                    <Button variant='secondary' className='w-full font-bold font-montserrat'>
                        Book Now
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard