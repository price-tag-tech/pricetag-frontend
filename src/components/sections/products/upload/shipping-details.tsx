import React from 'react'
import Label from '../../../ui/form/label'
import Input from '../../../ui/form/input'
import Select from '../../../ui/form/select'
import Button from '../../../common/Button'

interface Props {
    action: () => void
}

const ShippingAndDelivery = ({ action }: Props) => {
    return (
        <div className='flex flex-wrap flex-col md:flex-row'>
            <div className='w-full md:w-1/2 p-2'>
                <Label title='Estimated Delivery Time' size='md' className='font-medium' />
                <Input type="text" placeholder='E.g. 1-9 business days' />
            </div>

            <div className='w-full md:w-1/2 p-2'>
                <Label title='Express Delivery' size='md' className='font-medium' />
                <Select name='express-delivery' default='--Select Express Delivery--' options={[]} />
            </div>

            <div className='w-full md:w-1/2 p-2'>
                <Label title='Same-Day Delivery' size='md' className='font-medium' />
                <Input type="text" placeholder='E.g. Place your order before 11AM' />
            </div>

            <div className='w-full md:w-1/2 p-2'>
                <Label title='Note' size='md' className='font-medium' />
                <Input type="text" placeholder='E.g. Availability may vary by location' />
            </div>

            <div className='w-full md:w-1/2 p-2'>
                <Label title='Return Policy' size='md' className='font-medium' />
                <Input type="text" placeholder='E.g 7-Day Return Policy' />
            </div>

            <div className='w-full md:w-1/2 p-2'>
                <Label title='Warranty' size='md' className='font-medium' />
                <Input type="text" placeholder='E.g 1 Week Warranty' />
            </div>
            <div className='w-full p-2'>
                <Button
                    onClick={action}
                    variant='secondary'
                    className='font-montserrat'
                >
                    Next
                </Button>
            </div>
        </div>
    )
}

export default ShippingAndDelivery