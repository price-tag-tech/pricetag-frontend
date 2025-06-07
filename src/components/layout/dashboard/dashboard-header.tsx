import { FC } from 'react'
import Button from '../../common/Button'
import { Copy, Menu, MoreHorizontal, Pen, Store } from 'lucide-react'

interface User {
    name: string,
    referral: { link: string }
}

const DashboardHeader: FC<User> = (props) => {

    return (
        <div className='w-full md:px-5 flex items-center justify-between'>
            <div className='flex items-center gap-6'>
                <div className='h-10 w-10 md:h-20 md:w-20 rounded-full bg-brand-900 text-white font-semibold text-xl md:text-5xl flex items-center justify-center'>
                    {props.name.substring(0, 1)}
                </div>
                <div className='hidden md:flex flex-col gap-4'>
                    <h4 className='font-bold text-3xl hidden md:block'>
                        {props.name}
                    </h4>
                    <div className='flex gap-x-2'>
                        <Button to="" variant='outline' size="sm" className='button-outline-secondary'>
                            <span className='hidden md:block'>
                                Edit Profile
                            </span>
                            <span className='md:hidden'>
                                <Pen className='h-4' />
                            </span>
                        </Button>
                        <Button variant='outline' size="sm" to="" className='button-outline-secondary'>
                            <MoreHorizontal className='h-4 md:h-auto' />
                        </Button>
                    </div>
                </div>
            </div>
            <div className='hidden md:flex gap-x-3'>
                <div className='flex gap-2 text-xs items-center bg-gray-100 shadow px-2 py-1.5 rounded-xl'>
                    <span className='py-2 px-3 rounded-lg h-full flex items-center text-black bg-white font-bold text'>
                        Referral Link
                    </span>
                    <input type="text" disabled value={`${props.referral.link.substring(0, 30)}...`} className='text-gray-600 bg-transparent w-[150pt]' />
                    <Button variant='secondary' className='text-white px-2'>
                        <Copy className='h-4' />
                    </Button>
                </div>
                <div className='flex'>
                    <Button variant='outline' size="sm" className='font-montserrat'>
                        <span className='mr-2'>
                            <Store />
                        </span>
                        My Store
                    </Button>
                </div>
            </div>

            <div className='md:hidden'>
                <Button variant='outline' size='sm' className='button-outline-secondary'>
                    <Menu />
                </Button>
            </div>
        </div>
    )
}

export default DashboardHeader