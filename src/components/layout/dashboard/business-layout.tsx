import type React from "react"
import { Outlet } from "react-router-dom"
import { BusinessHeader } from "./business-header"
import { FC } from "react"
import { BusinessSidenav } from "./business-sidenav"

const BusinessLayout: FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
            <BusinessSidenav />
            <div className="flex flex-col w-full">
                <BusinessHeader />
                <main className="flex-1 p-5">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default BusinessLayout