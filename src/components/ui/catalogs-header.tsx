import { Link } from 'react-router-dom'

const CatalogsHeader = ({ title, link, action }: { title: string, link: string, action?: string }) => {
    return (
        <div className='flex items-center justify-between px-4 py-2 mb-6'>
            <div className='space-y-1'>
                <h3 className='text-2xl md:text-4xl font-bold capitalize text-gray-900 leading-tight'>
                    {title}
                </h3>
                <div className='w-16 h-1 bg-gradient-to-r from-brand-600 to-brand-500 rounded-full'></div>
            </div>
            <Link 
                to={link} 
                className='group inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 text-sm md:text-base font-semibold transition-all duration-300 hover:gap-3'
            >
                <span>{action ?? "View More"}</span>
                <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </Link>
        </div>
    )
}

export default CatalogsHeader