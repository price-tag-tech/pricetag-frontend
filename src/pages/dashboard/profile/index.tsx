import React from 'react'
import ProfileForm, { type ProfileData } from './ProfileForm'
import Label from '../../../components/ui/form/label'
import Select from '../../../components/ui/form/select'
import Textarea from '../../../components/ui/form/textarea'
import Input from '../../../components/ui/form/input'
import Button from '../../../components/common/Button'

const ProfilePage = () => {
    const currentUser: ProfileData = {
        id: 'me',
        name: 'Prince Godson',
        email: 'princegodson24@gmail.com',
        phone: '09037494084',
        country: 'NG',
        stateCity: 'Lagos',
        address: '',
    }

    const handleSubmit = (data: ProfileData) => {
        console.log('Save user profile:', data)
        alert('Profile saved')
    }

    return (
        <div className='max-w-2xl'>
            <h2 className='text-xl font-bold text-gray-900 mb-6'>Personal Information</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='md:col-span-2'>
                    <Label title='Email Address' />
                    <Input type='email' value="princegodson24@gmail.com" className='mt-2' />
                </div>

                <div>
                    <Label title='First Name' />
                    <Input type="text" value="Prince" className='mt-2' />
                </div>

                <div>
                    <Label title='Last Name' />
                    <Input type="text" value="Godson" className='mt-2' />
                </div>

                <div className='md:col-span-2'>
                    <Label title="Phone Number" />
                    <Input type='text' value='09037494084' className='mt-2' />
                </div>

                <div>
                    <Label title='Country' />
                    <Select placeholder='--Select Country--' className='mt-2' />
                </div>

                <div>
                    <Label title="State/City" />
                    <Select placeholder='--Select State/City--' className='mt-2' />
                </div>

                <div className='md:col-span-2'>
                    <Label title='Full Address' />
                    <Textarea value='' placeholder='Enter your complete address...' className='mt-2' />
                </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200'>
                <Button variant='secondary' className='flex-1 font-montserrat'>
                    Save Changes
                </Button>
                <Button variant='outline' className='flex-1 font-montserrat bg-white border-gray-300 text-gray-700 hover:bg-gray-50'>
                    Cancel
                </Button>
            </div>
        </div>
    )
}

export default ProfilePage