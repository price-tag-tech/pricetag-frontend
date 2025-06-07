import { Bell, Heart, Map, ShoppingCart, User, UserPlus } from 'lucide-react'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

const HeaderQuickActions = () => {

    return (
        <div className="hidden lg:flex items-center justify-center gap-x-5">
            <div className="flex-x-end gap-5 font-extrabold text-brand-700">
                <span>
                    <Map />
                </span>

                <span>
                    <Heart />
                </span>

                <span>
                    <ShoppingCart />
                </span>

                <span>
                    <Bell />
                </span>
            </div>

            <div className='flex justify-end gap-4'>
                <Link to="/login">
                    <Button size='sm' variant='outline' className='font-montserrat'>
                        <User className='pr-2' />
                        Login
                    </Button>
                </Link>

                <Link to="/register">
                    <Button size='sm' className='font-montserrat'>
                        <UserPlus className='pr-2' />
                        Get Started
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default HeaderQuickActions