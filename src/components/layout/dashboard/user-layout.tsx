import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import UserHeader from './user-header'
import UserSidenav from './user-sidenav'

const UserLayout: FC = () => {
    return (
        <div className='min-h-screen flex flex-col overflow-x-hidden font-montserrat py-5'>
            <UserHeader />
            <div className='flex flex-col md:flex-row p-4 md:p-10'>
                <UserSidenav />
                <main className='px-5 md:px-10 w-full'>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default UserLayout