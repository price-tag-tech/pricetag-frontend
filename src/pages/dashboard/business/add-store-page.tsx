import React from 'react'
import Label from '../../../components/ui/form/label'
import Input from '../../../components/ui/form/input'
import Select from '../../../components/ui/form/select'
import Textarea from '../../../components/ui/form/textarea'
import FileUpload from '../../../components/ui/form/file-upload'
import Button from '../../../components/common/Button'
import { useNavigate } from 'react-router-dom'

const AddStorePage = () => {
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/business/success', {
            state: {
                title: "Store Successfully Added",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                illustration: "success-2.svg"
            }
        })
    }

    return (
        <div className='w-full p-4'>
            <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                    Add a Store
                </h2>
            </div>

            <form action="" onSubmit={handleSubmit}>
                <div className='flex flex-wrap flex-col md:flex-row'>
                    <div className='w-full p-2'>
                        <Label title='Store Name' size='md' className='font-medium' />
                        <Input type="text" />
                    </div>

                    <div className='w-full md:w-1/2 p-2'>
                        <Label title='Phone Number' size='md' className='font-medium' />
                        <Input type="tel" />
                    </div>

                    <div className='w-full md:w-1/2 p-2'>
                        <Label title='WhatsApp Number' size='md' className='font-medium' />
                        <Input type="tel" />
                    </div>

                    <div className='w-full p-2'>
                        <Label title='Location' size='md' className='font-medium' />
                        <Input type="text" />
                    </div>

                    <div className='w-full md:w-1/2 p-2'>
                        <Label title='Average Response Time' size='md' className='font-medium' />
                        <Input type="text" placeholder='e.g. 1 - 2 hours' />
                    </div>

                    <div className='w-full md:w-1/2 p-2'>
                        <Label title='Language' size='md' className='font-medium' />
                        <Select name="language" options={[]} />
                    </div>

                    <div className='w-full p-2'>
                        <Label title='A brief intro about yourself' size='md' className='font-medium' />
                        <Textarea className='h-40' />
                    </div>

                    <div className='w-full p-2'>
                        <Label title='Your Experience' size='md' className='font-medium' />
                        <Textarea className='h-40' />
                    </div>

                    {/* Dropzone */}
                    <div className='w-full p-2'>
                        <Label title='Upload your Portfolio Images' size='md' className='font-medium mb-1' />
                        <FileUpload />
                    </div>

                    <div className='w-full p-2'>
                        <Button variant='secondary' className='font-montserrat'>
                            Add Store
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddStorePage