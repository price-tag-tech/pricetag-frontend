import React from 'react'
import Label from '../../../components/ui/form/label'
import Input from '../../../components/ui/form/input'
import Button from '../../../components/common/Button'
import Select from '../../../components/ui/form/select'

const BankSettings = () => {
    return (
        <div className='w-full md:w-1/2 flex flex-col gap-y-6'>
            <div className='flex flex-col gap-y-2'>
                <Label title='Bank' />
                <Select placeholder='--Select Bank--' />
            </div>
            <div className='flex flex-col gap-y-2'>
                <Label title='Account Number' />
                <Input type="tel" />
            </div>
            <div className='flex flex-col gap-y-2'>
                <Label title='Account Name' />
                <Input type="text" />
            </div>
            <div className='flex flex-col gap-y-2'>
                <Label title='Account Type' />
                <Select placeholder='--Select Account Type--' />
            </div>
            <div>
                <Button variant='secondary' className='w-full font-montserrat'>
                    Save Bank Details
                </Button>
            </div>
        </div>
    )
}

export default BankSettings