import { Link } from 'react-router-dom'
import Button from '../../common/Button'
import { ListFilter } from 'lucide-react'

const PopularServices = () => {
    const links = [
        { name: "Products", link: "" },
        { name: "Services", link: "" }
    ]

    return (
        <div className='w-full my-5 px-5 md:px-24'>
            <div className='flex-between'>
                <h3 className='text-3xl font-bold capitalize'>Popular Services</h3>
                <div className='flex items-center gap-x-4'>
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

            <div className='flex '>

            </div>
        </div>
    )
}

export default PopularServices