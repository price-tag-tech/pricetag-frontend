import { Link } from 'react-router-dom'

const CatalogsHeader = ({ title, link, action }: { title: string, link: string, action?: string }) => {
    return (
        <div className='flex-between'>
            <h3 className='text-3xl font-bold capitalize'>{title}</h3>
            <Link to={link} className='text-brand-600 text-sm font-semibold'>
                {action ?? "View More"}
            </Link>
        </div>
    )
}

export default CatalogsHeader