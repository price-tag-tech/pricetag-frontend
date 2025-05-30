import React from 'react'
import ServiceCard, { ServiceCardProps } from './service-card'

interface ServicesGridProps {
    services: ServiceCardProps[],
    itemsPerRow: number
}

const ServicesGrid: React.FC<ServicesGridProps> = (props) => {
    return (
        <div className='w-full py-4'>
            <div className='flex flex-wrap flex-col md:flex-row'>
                {props.services.map(
                    (service, index) => <div key={index} className={`w-full md:w-1/${props.itemsPerRow} px-5`}>
                        <ServiceCard {...service} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default ServicesGrid