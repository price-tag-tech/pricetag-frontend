import { Bell } from 'lucide-react'
import NotificationCard from '../../../components/ui/notification-card'
import Button from '../../../components/common/Button'

const NotificationsPage = () => {

    const notifications = [
        {
            title: "Order Alert",
            subtitle: "Order from Daniel Olu",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            sentAt: "1 mins ago"
        },
        {
            title: "Pricetag Admin",
            subtitle: "Notification from Pricetag Admin",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            sentAt: "10 days ago"
        }
    ]

    return (
        <div className='space-y-6'>
            <div className='bg-gradient-to-r from-brand-50 to-green-50 rounded-2xl p-6 border border-brand-200'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='text-2xl md:text-3xl font-bold text-gray-900 mb-2'>
                            Notifications
                        </h1>
                        <p className='text-gray-600'>
                            Stay updated with your latest activities and important updates
                        </p>
                    </div>
                    <div className='hidden md:flex items-center gap-3'>
                        <div className='bg-brand-100 text-brand-700 px-3 py-1.5 rounded-full text-sm font-medium'>
                            {notifications.length} New
                        </div>
                        <Button variant='outline' size='sm' className='bg-white border-brand-300 text-brand-700 hover:bg-brand-50'>
                            Mark All Read
                        </Button>
                    </div>
                </div>
            </div>

            <div className='space-y-4'>
                {notifications.map((notification, i) => (
                    <NotificationCard {...notification} key={i} />
                ))}
            </div>

            {notifications.length === 0 && (
                <div className='text-center py-12'>
                    <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                        <Bell className='h-8 w-8 text-gray-400' />
                    </div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>No notifications yet</h3>
                    <p className='text-gray-600'>You're all caught up! New notifications will appear here.</p>
                </div>
            )}
        </div>
    )
}

export default NotificationsPage