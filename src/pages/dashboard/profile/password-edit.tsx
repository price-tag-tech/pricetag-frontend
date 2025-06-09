import React from 'react'
import Label from '../../../components/ui/form/label'
import Input from '../../../components/ui/form/input'
import Button from '../../../components/common/Button'

const PasswordEdit = () => {
    return (
        <div className='w-full md:w-1/2 flex flex-col gap-y-6'>
            <div className='flex flex-col gap-y-2'>
                <Label title='Old Password' />
                <Input type='password' />
            </div>
            <div className='flex flex-col gap-y-2'>
                <Label title='New Password' />
                <Input type="password" />
            </div>
            <div>
                <Button variant='secondary' className='w-full font-montserrat'>
                    Change
                </Button>
            </div>
        </div>
    )
}

export default PasswordEdit