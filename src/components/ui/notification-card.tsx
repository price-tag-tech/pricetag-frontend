import { FC } from 'react'

interface CardProps {
    title: string,
    subtitle: string,
    message: string,
    sentAt: string
}

const NotificationCard: FC<CardProps> = (props) => {
    return (
        <div className='flex flex-col rounded-lg border shadow-sm'>
            <div className='md:hidden flex justify-end p-5'>
                <button className='text-2xl rounded bg-gray-50 border shadow-sm font-medium text-gray-600 h-7 w-7 flex items-center justify-center cursor-pointer'>
                    &times;
                </button>
            </div>

            <div className='flex gap-x-5 pb-10 md:py-10 px-6'>
                <div>
                    <div className='w-10 md:w-16 h-10 md:h-16 rounded-full bg-brand-900 flex items-center justify-center'>
                        <h5 className='uppercase text-white text-lg md:text-4xl font-semibold'>
                            {props.title.substring(0, 1)}
                        </h5>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-y-4 text-sm text-gray-700'>
                    <div className=''>
                        <h4 className='text-xl font-medium text-black'>
                            {props.title}
                        </h4>
                        <p>
                            {props.subtitle}
                        </p>
                    </div>
                    <p>
                        {props.message}
                    </p>
                </div>
                <div className='hidden md:block'>
                    <button className='text-2xl rounded bg-gray-50 border shadow-sm font-medium text-gray-600 h-7 w-7 flex items-center justify-center cursor-pointer'>
                        &times;
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotificationCard