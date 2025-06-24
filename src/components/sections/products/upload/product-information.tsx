import React from 'react'
import Button from '../../../common/Button'
import Input from '../../../ui/form/input'
import Label from '../../../ui/form/label'
import Select from '../../../ui/form/select'

interface Props {
    action: () => void
}

const ProductInformation = ({ action }: Props) => {
    return (
        <div className='flex flex-wrap flex-col md:flex-row'>
            <div className='w-full md:w-1/2 p-2'>
                <Label title='Product Name' size='md' className='font-medium' />
                <Input type="text" placeholder='E.g., "Nike Shoe"' />
            </div>

            <div className='w-full md:w-1/2 p-2'>
                <Label title='Product Description' size='md' className='font-medium' />
                <Input type="text" placeholder='A brief but detailed description of the product' />
            </div>

            <div className='w-full md:w-1/2 p-2'>
                <Label title='Category' size='md' className='font-medium' />
                <Select name='category' options={[]} />
            </div>

            <div className='w-full md:w-1/2 p-2'>
                <Label title='Product Code' size='md' className='font-medium' />
                <Input type="text" placeholder='00091 - (From the system)' />
            </div>

            <div className='w-full md:w-1/2 p-2'>
                <Label title='Brand Name (If applicable)' size='md' className='font-medium' />
                <Input type="text" placeholder='Gucci Brand' />
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

export default ProductInformation