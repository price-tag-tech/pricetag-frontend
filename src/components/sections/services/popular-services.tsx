import { Link } from 'react-router-dom'
import Button from '../../common/Button'
import { ListFilter } from 'lucide-react'
import PopularServiceCard from './popular-service-card'

const PopularServices = () => {
    const links = [
        { name: "Products", link: "" },
        { name: "Services", link: "" }
    ]

    const services = [
        { id: "arewa", name: "Dry Cleaner", imageUrl: "", description: "Lorem ipsum dolor sit amet, consectetur", rating: 4.3, reviews: 10, price: 3900 },
        { id: "arewa", name: "Dry Cleaner", imageUrl: "", description: "Lorem ipsum dolor sit amet, consectetur", rating: 4.3, reviews: 10, price: 3900 },
        { id: "arewa", name: "Dry Cleaner", imageUrl: "", description: "Lorem ipsum dolor sit amet, consectetur", rating: 4.3, reviews: 10, price: 3900 },
        { id: "arewa", name: "Dry Cleaner", imageUrl: "", description: "Lorem ipsum dolor sit amet, consectetur", rating: 4.3, reviews: 10, price: 3900 },
    ]

    return (
        <div className='w-full my-5 px-5 md:px-24 gap-y-6 flex flex-col'>
            <div className='flex-between flex-col md:flex-row gap-y-4'>
                <h3 className='text-2xl md:text-3xl font-bold capitalize'>Popular Services</h3>
                <div className='flex items-center gap-x-5'>
                    <div className='flex gap-x-4'>
                        {links.map((_, i) => (
                            <Link to={_.link} className='text-black hover:text-brand-600 text-sm font-semibold '>
                                {_.name}
                            </Link>
                        ))}
                    </div>

                    <div>
                        <Button variant='outline' className='flex-center gap-x-2 py-[4pt]'>
                            <ListFilter />
                            Filters
                        </Button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row'>
                {services.map((service, i) => (
                    <div className='p-4 w-full md:w-1/4'>
                        <PopularServiceCard key={i} {...services} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopularServices