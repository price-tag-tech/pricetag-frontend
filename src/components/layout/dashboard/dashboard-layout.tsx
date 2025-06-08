import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Sidenav from './sidenav'
import DashboardHeader from './dashboard-header'

const DashboardLayout: FC = () => {
    return (
        <div className='min-h-screen flex flex-col overflow-x-hidden font-montserrat'>
            <div className='flex flex-col md:flex-row p-4 md:p-10'>
                <Sidenav />
                <main className='px-5 md:px-10 w-full'>
                    <DashboardHeader />
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default DashboardLayout