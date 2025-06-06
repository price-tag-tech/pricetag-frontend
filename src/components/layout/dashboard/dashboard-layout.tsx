import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Sidenav from './sidenav'
import DashboardHeader from './dashboard-header'

const DashboardLayout: FC = () => {
    const user = {
        name: "Prince Godson",
        referral: {
            link: "https://pricetag.ng/c/67d859bc-b2b4"
        }
    }

    return (
        <div className='min-h-screen flex flex-col overflow-x-hidden font-montserrat'>
            <div className='flex flex-col md:flex-row p-4 md:p-10'>
                <Sidenav />
                <main className='px-5 md:px-10 w-full'>
                    <DashboardHeader {...user} />
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default DashboardLayout