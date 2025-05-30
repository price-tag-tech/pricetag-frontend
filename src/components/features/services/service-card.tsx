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
        <div className='w-full flex flex-col gap-4'>
            <div className='bg-gray-200 w-full h-[150pt] relative'>
                <img src={props.imageUrl} alt={props.name} />
                <div className='absolute bottom-[5pt] left-[5pt] text-sm bg-brand-600 text-white rounded-md px-2 py-1'>
                    {props.category}
                </div>
            </div>
            <div className='py-3 px-2 flex flex-col gap-y-3'>
                <h3 className="text-2xl font-normal">
                    {props.name}
                </h3>
                <div className="flex gap-x-2 items-center">
                    <div className='mr-4 flex items-center gap-x-2'>
                        <RatingStars rating={props.rating} />
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
            <div className='px-4'>
                <Button variant='secondary' className='w-full font-bold font-montserrat'>
                    Book Now
                </Button>
            </div>
        </div>
    )
}

export default ServiceCard