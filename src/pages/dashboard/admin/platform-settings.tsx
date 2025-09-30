import { ReactNode, useState } from 'react'
import Subscriptions from '../../../components/features/subscriptions'
import GeneralSettings from '../../../components/features/settings/general-settings'
import TierManagement from '../../../components/features/settings/tiers-management'

interface Category {
    name: string,
    component: ReactNode
}

const PlatformSettings = () => {
    const categories: Category[] = [
        { name: "General", component: <GeneralSettings /> },
        { name: "Subscriptions", component: <Subscriptions /> },
        { name: "Tiers", component: <TierManagement /> }
    ]

    const [active, setActive] = useState<Category>(categories[0])

    return (
        <div className='w-full'>
            <div className='flex w-full items-center justify-between'>
                <h3 className='text-lg md:text-2xl font-bold font-montserrat'>
                    Platform Settings
                </h3>
            </div>
            <div className='mt-8 flex items-center gap-x-3 border-b-2 text-gray-500'>
                {
                    categories.map((tab, index) => (
                        <button onClick={() => setActive(tab)} className={`${active.name === tab.name && "nav-active text-gray-900"} py-3 text-xs md:text-lg px-3 font-semibold transition duration-300 ease-linear md:px-4`}>
                            {tab.name}
                        </button>
                    ))
                }
            </div>

            <div>
                {active.component}
            </div>

        </div>
    )
}

export default PlatformSettings