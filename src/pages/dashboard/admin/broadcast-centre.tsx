import { useEffect, useState } from 'react'
import Button from '../../../components/common/Button'
import { Funnel, Plus, Search, SortAsc } from 'lucide-react'
import DataTable from '../../../components/ui/data-table'

const broadcasts = [
    {
        "name": "Weekly Newsletter - July 10",
        "contacts": 1500,
        "status": "Sent",
        "delivery": "Delivered",
        "sent date": "2025-07-10 10:30 AM"
    },
    {
        "name": "Product Launch Announcement",
        "contacts": 750,
        "status": "Scheduled",
        "delivery": "Pending",
        "sent date": "2025-07-15 02:00 PM"
    },
    {
        "name": "Promotional Offer - Summer Sale",
        "contacts": 2000,
        "status": "Draft",
        "delivery": "N/A",
        "sent date": "N/A"
    },
    {
        "name": "Customer Feedback Survey",
        "contacts": 500,
        "status": "Sent",
        "delivery": "Delivered",
        "sent date": "2025-07-08 09:00 AM"
    },
    {
        "name": "Webinar Invitation - SEO Basics",
        "contacts": 300,
        "status": "Scheduled",
        "delivery": "Pending",
        "sent date": "2025-07-20 11:00 AM"
    },
    {
        "name": "Holiday Greetings - Christmas 2025",
        "contacts": 2500,
        "status": "Draft",
        "delivery": "N/A",
        "sent date": "N/A"
    },
    {
        "name": "New Feature Update - V2.0",
        "contacts": 1200,
        "status": "Sent",
        "delivery": "Delivered",
        "sent date": "2025-07-05 04:00 PM"
    },
    {
        "name": "Event Reminder - Annual Conference",
        "contacts": 400,
        "status": "Scheduled",
        "delivery": "Pending",
        "sent date": "2025-07-25 09:30 AM"
    },
    {
        "name": "Welcome Series - New Subscribers",
        "contacts": 100,
        "status": "Sent",
        "delivery": "Delivered",
        "sent date": "2025-07-11 08:00 AM"
    },
    {
        "name": "Abandoned Cart Reminder",
        "contacts": 250,
        "status": "Draft",
        "delivery": "N/A",
        "sent date": "N/A"
    }
]

const BroadcastCentre = () => {
    const [activeTab, setActivetab] = useState("All Broadcasts")
    const [filtered, setFiltered] = useState(broadcasts)

    const tabs = ["All Broadcasts", "Scheduled", "Sent", "Draft"]

    useEffect(() => {
        setFiltered(broadcasts.filter(key => (
            activeTab === "All Broadcasts" ? broadcasts : key.status === activeTab
        )))
    }, [activeTab])

    return (
        <div>
            <div className='flex w-full items-center justify-between'>
                <h3 className='text-lg md:text-2xl font-bold font-montserrat'>
                    Broadcast Center
                </h3>

                <Button href='broadcast/new' variant='secondary' size='sm' className='text-xs flex items-center'>
                    <Plus />
                    <span className='hidden md:block ml-2'>
                        Create Broadcast
                    </span>
                </Button>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between mt-4 gap-4'>
                <div className='flex items-center gap-x-3 font-montserrat w-full'>
                    {tabs.map(item => (
                        <button onClick={() => setActivetab(item)} className={`${activeTab === item && "bg-brand-100 text-gray-800 shadow-inner"} py-3 text-xs md:text-lg px-3 font-semibold text-gray-700 rounded-lg transition-all duration-300 ease-linear md:px-4`}>
                            {item}
                        </button>
                    ))}
                </div>

                <div className='w-full'>
                    <div className='flex flex-row items-center justify-end gap-4 text-gray-700'>
                        <button className='flex items-center gap-1 text-sm font-semibold hover:text-gray-900 transition-all'>
                            <Search size={20} />
                            <span className='hidden md:block'>
                                Quick find
                            </span>
                        </button>

                        <button className='flex items-center gap-1 text-sm font-semibold hover:text-gray-900 transition-all'>
                            <Funnel size={20} />
                            <span className='hidden md:block'>
                                Filter
                            </span>
                        </button>

                        <button className='flex items-center gap-1 text-sm font-semibold hover:text-gray-900 transition-all'>
                            <SortAsc size={20} />
                            <span className='hidden md:block'>
                                Sort
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                {/* broadcast */}

                <DataTable
                    cols={['name', 'contacts', 'status', 'delivery', 'sent date']}
                    data={filtered}
                    statuses={[
                        { label: "Sent", state: "success" },
                        { label: "Scheduled", state: "pending" }
                    ]}
                />
            </div>
        </div>
    )
}

export default BroadcastCentre