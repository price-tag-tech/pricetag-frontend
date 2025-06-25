import React from 'react'
import NotificationCard from '../../../components/ui/notification-card'

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
        <div className=''>
            <h2 className='text-2xl font-semibold'>
                Notifications
            </h2>
            <div className='mt-4 md:mt-8 flex flex-col gap-5'>
                {notifications.map((notification, i) => (
                    <NotificationCard {...notification} key={i} />
                ))}
            </div>
        </div>
    )
}

export default NotificationsPage