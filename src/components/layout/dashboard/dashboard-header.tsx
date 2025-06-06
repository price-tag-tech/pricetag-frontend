import { FC } from 'react'
import Button from '../../common/Button'
import { Copy, MoreHorizontal, Store } from 'lucide-react'

interface User {
    name: string,
    referral: { link: string }
}

const DashboardHeader: FC<User> = (props) => {

    return (
        <div className='w-full px-2 md:px-5 flex flex-col md:flex-row items-center justify-between'>
            <div className='flex items-center gap-x-6'>
                <div className='h-10 w-10 md:h-20 md:w-20 rounded-full bg-brand-900 text-white font-semibold text-xl md:text-5xl flex items-center justify-center'>
                    {props.name.substring(0, 1)}
                </div>
                <div>
                    <h4 className='font-bold text-3xl'>
                        {props.name}
                    </h4>
                    <div className='flex gap-x-2 mt-4'>
                        <Button to="" variant='outline' size="sm" className='font-montserrat border-gray-400 text-gray-700 hover:bg-gray-200 transition-all duration-300 ease-in-out hover:text-black text-xs'>
                            Edit Profile
                        </Button>
                        <Button variant='outline' size="sm" to="" className='border-gray-400 text-gray-700 hover:bg-gray-200 transition-all duration-300 ease-in-out hover:text-black'>
                            <MoreHorizontal />
                        </Button>
                    </div>
                </div>
            </div>
            <div className='flex gap-x-3'>
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
        </div>
    )
}

export default DashboardHeader