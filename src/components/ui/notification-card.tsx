import { FC } from 'react'

interface CardProps {
    title: string,
    subtitle: string,
    message: string,
    sentAt: string
}

const NotificationCard: FC<CardProps> = (props) => {
    return (
        <div className='relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group'>
            <div className='md:hidden flex justify-end p-4'>
                <button className='w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-500 hover:text-gray-700 flex items-center justify-center transition-colors duration-200'>
                    <span className='text-lg leading-none'>&times;</span>
                </button>
            </div>

            <div className='flex gap-4 p-6 pt-2 md:pt-6'>
                <div className='flex-shrink-0'>
                    <div className='w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-lg'>
                        <h5 className='uppercase text-white text-lg md:text-xl font-bold'>
                            {props.title.substring(0, 1)}
                        </h5>
                    </div>
                </div>
                <div className='flex-1 min-w-0 space-y-3'>
                    <div className='flex items-start justify-between gap-4'>
                        <div className='flex-1 min-w-0'>
                            <h4 className='text-lg font-bold text-gray-900 mb-1'>
                                {props.title}
                            </h4>
                            <p className='text-sm text-brand-600 font-medium'>
                                {props.subtitle}
                            </p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full'>
                                {props.sentAt}
                            </span>
                            <button className='hidden md:flex w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-500 hover:text-gray-700 items-center justify-center transition-colors duration-200 opacity-0 group-hover:opacity-100'>
                                <span className='text-lg leading-none'>&times;</span>
                            </button>
                        </div>
                    </div>

                    <p className='text-gray-700 text-sm leading-relaxed'>
                        {props.message}
                    </p>

                    <div className='flex items-center gap-3 pt-2'>
                        <button className='text-brand-600 hover:text-brand-700 text-sm font-medium transition-colors duration-200'>
                            Mark as read
                        </button>
                        <span className='text-gray-300'>•</span>
                        <button className='text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors duration-200'>
                            View details
                        </button>
                    </div>
                </div>
            </div>

            <div className='absolute top-0 left-0 w-1 h-full bg-brand-500 rounded-r-full' />
        </div>
    )
}

export default NotificationCard