import React from 'react'
import Label from '../../../components/ui/form/label'
import Input from '../../../components/ui/form/input'
import Button from '../../../components/common/Button'

const SocialProfiles = () => {
    return (
        <div className='w-full md:w-1/2 flex flex-col gap-y-6'>
            <div className='flex flex-col gap-y-2'>
                <Label title='Facebook' />
                <Input type='text' />
            </div>
            <div className='flex flex-col gap-y-2'>
                <Label title='Instagram' />
                <Input type="text" />
            </div>
            <div className='flex flex-col gap-y-2'>
                <Label title='Twitter' />
                <Input type="text" />
            </div>
            <div className='flex flex-col gap-y-2'>
                <Label title='Website' />
                <Input type="text" />
            </div>
            <div>
                <Button variant='secondary' className='w-full font-montserrat'>
                    Update Social Profile
                </Button>
            </div>
        </div>
    )
}

export default SocialProfiles