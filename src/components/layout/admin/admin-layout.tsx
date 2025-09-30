import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from './admin-header'
import AdminSidenav from './admin-sidenav'
import Modal from '../modal'

const AdminLayout: FC = () => {
    return (
        <div className="h-screen md:max-h-screen bg-gray-50 flex flex-col md:flex-row">
            <AdminSidenav />
            <div className="flex flex-col w-full">
                <AdminHeader />
                <main className="flex-1 py-5 px-4 md:p-8 md:max-h-screen md:overflow-y-auto">
                    <Outlet />
                </main>
            </div>

            <Modal />
        </div>
    )
}

export default AdminLayout