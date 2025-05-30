import { Bell, Heart, Map, ShoppingCart, User } from 'lucide-react'
import Button from '../common/Button'

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
                <Button variant='outline' className='flex items-center gap-x-3'>
                    <span>
                        <User />
                    </span>
                    Login
                </Button>

                <Button className=''>
                    Get Started
                </Button>
            </div>
        </div>
    )
}

export default HeaderQuickActions