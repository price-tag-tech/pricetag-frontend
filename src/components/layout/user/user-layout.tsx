import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import UserHeader from './user-header'
import UserSidenav from './user-sidenav'

const UserLayout: FC = () => {
    return (
        <div className='min-h-screen flex flex-col overflow-x-hidden font-montserrat bg-gradient-to-br from-gray-50 to-gray-100'>
            <UserHeader />
            <div className='flex flex-col md:flex-row flex-1 p-4 md:p-8 gap-6'>
                <UserSidenav />
                <main className='flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 min-h-[calc(100vh-200px)]'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default UserLayout