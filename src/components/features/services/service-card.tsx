import RatingStars from '../../ui/rating-stars'
import Button from '../../common/Button'

export interface ServiceCardProps {
    id: string,
    imageUrl: string,
    name: string,
    rating: number,
    bookings: number,
    pricePerHour: number,
    category: string,
    available?: boolean,
    distance?: string
}

const ServiceCard: React.FC<ServiceCardProps> = (props) => {
    return (
        <div className='group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100'>
            {/* Image Container */}
            <div className='relative overflow-hidden'>
                <div className='aspect-[4/3] overflow-hidden'>
                    <img
                        src={props.imageUrl}
                        alt={props.name}
                        className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                    />
                </div>

                {/* Gradient Overlay on Hover */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                {/* Category Badge */}
                <div className='absolute top-4 left-4'>
                    <span className='inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-sm text-gray-800 shadow-lg border border-white/20'>
                        {props.category}
                    </span>
                </div>

                {/* Availability Indicator */}
                <div className='absolute top-4 right-4'>
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm shadow-lg ${props.available
                        ? 'bg-emerald-500/95 text-white border border-emerald-400/30'
                        : 'bg-red-500/95 text-white border border-red-400/30'
                        }`}>
                        <div className={`w-2 h-2 rounded-full ${props.available ? 'bg-white animate-pulse' : 'bg-white/80'}`} />
                        {props.available ? 'Available' : 'Busy'}
                    </div>
                </div>

                {/* Popular Badge for Highly Rated Services */}
                {props.rating >= 4.5 && (
                    <div className='absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                        <div className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/95 backdrop-blur-sm text-white text-xs font-semibold shadow-lg border border-amber-400/30'>
                            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                                <path d="M7 14l3-3 3 3 5-5v4h4V7h-6l5 5-3 3-3-3-5 5z" />
                            </svg>
                            Popular
                        </div>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className='p-6 space-y-5'>
                {/* Service Name */}
                <div>
                    <h3 className='text-xl font-bold text-gray-900 leading-tight group-hover:text-brand-600 transition-colors duration-300 mb-1'>
                        {props.name}
                    </h3>
                </div>

                {/* Rating and Bookings Row */}
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <RatingStars rating={props.rating} />
                        <span className='text-sm font-bold text-gray-700'>
                            {props.rating.toFixed(1)}
                        </span>
                    </div>
                    <div className='flex items-center gap-1 text-gray-500 text-sm'>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className='font-medium'>{props.bookings} bookings</span>
                    </div>
                </div>

                {/* Pricing and Location Row */}
                <div className='flex items-center justify-between'>
                    <div className='space-y-1'>
                        <div className='flex items-baseline gap-1'>
                            <span className='text-2xl font-bold text-gray-900'>
                                ₦{props.pricePerHour.toLocaleString()}
                            </span>
                            <span className='text-sm text-gray-500 font-medium'>/hour</span>
                        </div>
                        <p className='text-xs text-gray-500 font-medium'>Starting price</p>
                    </div>

                    <div className='text-right'>
                        <div className={`text-sm font-semibold ${props.available ? 'text-emerald-600' : 'text-orange-600'}`}>
                            {props.available ? 'Available today' : 'Next: Tomorrow'}
                        </div>
                        <div className='flex items-center gap-1 text-xs text-gray-500 mt-1 justify-end'>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className='font-medium'>{props.distance ?? "Near you"}</span>
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <div className='pt-2'>
                    <Button
                        variant='primary'
                        className='w-full font-bold text-base py-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300'
                    >
                        Book Now
                    </Button>
                </div>
            </div>

            {/* Subtle Glow Effect */}
            <div className='absolute inset-0 rounded-2xl ring-1 ring-brand-600/0 group-hover:ring-brand-600/20 transition-all duration-300 pointer-events-none' />
        </div>
    )
}

export default ServiceCard