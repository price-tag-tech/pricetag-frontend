import { Link } from 'react-router-dom'
import ServiceCard, { IService } from './service-card'

const services: IService[] = [
    { id: "arewa", title: "Home Cleaning Service", rating: 4.6, bookings: 124, pricePerHour: 25, image: "", category: "Home Services", available: true },
    { id: "arewa", title: "Massage Therapy", rating: 4.5, bookings: 98, pricePerHour: 55, image: "", category: "Health & Wellness", available: true },
    { id: "arewa", title: "Tax Consultation", rating: 4.4, bookings: 56, pricePerHour: 100, image: "", category: "Professional", available: true }
]

const ServiceListing = () => {
    return (
        <div className='w-full my-5 px-5 md:px-24'>
            <div className='flex items-center justify-between'>
                <h3 className='text-3xl font-bold'>Services Near You</h3>
                <Link to="" className='text-brand-600 text-sm font-semibold'>
                    View More
                </Link>
            </div>

            <div className='w-full py-4'>
                <div className='flex gap-8 flex-col md:flex-row'>
                    {services.map(
                        (services, index) => <div key={index} className='w-full md:w-1/3'>
                            <ServiceCard {...services} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ServiceListing