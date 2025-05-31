import { ServiceCardProps } from '../../features/services/service-card'
import ServicesGrid from '../../features/services/services-grid'
import CatalogsHeader from '../../ui/catalogs-header'

const services: ServiceCardProps[] = [
    { id: `${Math.random() * 99}`, name: "Home Cleaning Service", rating: 4.6, bookings: 124, pricePerHour: 25, imageUrl: "/assets/services/services-1.png", category: "Home Services", available: true },
    { id: `${Math.random() * 99}`, name: "Massage Therapy", rating: 4.5, bookings: 98, pricePerHour: 55, imageUrl: "/assets/services/services-2.png", category: "Health & Wellness", available: true },
    { id: `${Math.random() * 99}`, name: "Tax Consultation", rating: 4.4, bookings: 56, pricePerHour: 100, imageUrl: "/assets/services/services-3.png", category: "Professional", available: true }
]

const ServiceListing = () => {
    return (
        <div className='w-full my-5 px-5 md:px-24'>
            <CatalogsHeader title="services near you" link="#" />
            <ServicesGrid services={services} itemsPerRow={3} />
        </div>
    )
}

export default ServiceListing