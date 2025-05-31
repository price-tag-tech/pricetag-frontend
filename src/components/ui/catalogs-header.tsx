import { Link } from 'react-router-dom'

const CatalogsHeader = ({ title, link, action }: { title: string, link: string, action?: string }) => {
    return (
        <div className='flex-between px-4'>
            <h3 className='text-xl md:text-3xl font-bold capitalize'>{title}</h3>
            <Link to={link} className='text-brand-600 text-xs md:text-sm font-semibold'>
                {action ?? "View More"}
            </Link>
        </div>
    )
}

export default CatalogsHeader