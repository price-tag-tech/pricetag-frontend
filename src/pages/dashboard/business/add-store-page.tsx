import React from 'react'
import Label from '../../../components/ui/form/label'
import Input from '../../../components/ui/form/input'
import Select from '../../../components/ui/form/select'
import Textarea from '../../../components/ui/form/textarea'
import FileUpload from '../../../components/ui/form/file-upload'
import Button from '../../../components/common/Button'
import { useNavigate } from 'react-router-dom'
import validator from 'validator'
import z from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createStore } from '../../../services/storeService'
import { toast } from 'react-toastify'

const timeSchema = z.string().refine(validator.isTime)

const storeSchema = z.object({
    name: z.string({ message: "Your store needs to have a name" }).min(3, "Store name is too short"),
    email: z.string().refine(validator.isEmail, { message: "Enter a valid email address" }),
    phone: z.string(),
    whatsapp: z.string(),
    location: z.string(),
    state: z.string(),
    description: z.string(),
    opening_hour: timeSchema,
    closing_hour: timeSchema,
    logo: z.array(z.instanceof(File)).min(1, "Upload a store logo"),
    banner: z.array(z.instanceof(File)).min(1, "Upload a store banner")
})

type StoreType = z.infer<typeof storeSchema>

const AddStorePage = () => {
    const navigate = useNavigate()

    const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm<StoreType>({
        resolver: zodResolver(storeSchema),
        defaultValues: {
            logo: [] as File[],
            banner: [] as File[]
        }
    })

    const submit = async (data: any) => {
        const created = await createStore(data)

        if (created.status === "success") {
            toast.success(created.message || "You store has been created")
            navigate("/user/stores")
            return;
        }
        toast.error(created.message || "Failed to create store")
    }

    return (
        <div className='w-full p-4'>
            <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                    Add a Store
                </h2>
            </div>

            <form onSubmit={handleSubmit(submit)}>
                <div className='flex flex-wrap flex-col md:flex-row'>

                    <div className='w-full p-2'>
                        <Label title='Store Name' size='md' className='font-medium' />
                        <Input type="text" {...register('name')} />
                        {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                    </div>

                    <div className='w-full p-2'>
                        <Label title='Email Address' size='md' className='font-medium' />
                        <Input type="email" {...register('email')} />
                        {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                    </div>

                    <div className='w-full md:w-1/2 p-2'>
                        <Label title='Phone Number' size='md' className='font-medium' />
                        <Input type="tel" {...register('phone')} />
                        {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                    </div>

                    <div className='w-full md:w-1/2 p-2'>
                        <Label title='WhatsApp Number' size='md' className='font-medium' />
                        <Input type="tel" {...register('whatsapp')} />
                        {errors.whatsapp && <p className="text-xs text-red-500">{errors.whatsapp.message}</p>}
                    </div>

                    <div className='w-full p-2'>
                        <Label title='Location / Address' size='md' className='font-medium' />
                        <Input type="text" {...register('location')} />
                        {errors.location && <p className="text-xs text-red-500">{errors.location.message}</p>}
                    </div>

                    <div className='w-full md:w-1/2 p-2'>
                        <Label title='State / Region' size='md' className='font-medium' />
                        <Input type="text" {...register('state')} />
                        {errors.state && <p className="text-xs text-red-500">{errors.state.message}</p>}
                    </div>

                    <div className='w-full p-2'>
                        <Label title='Store Description' size='md' className='font-medium' />
                        <Textarea className='h-40' {...register('description')} />
                        {errors.description && <p className="text-xs text-red-500">{errors.description.message}</p>}
                    </div>

                    <div className='w-full md:w-1/2 p-2'>
                        <Label title='Opening Hour (HH:MM)' size='md' className='font-medium' />
                        <Input type="time" {...register('opening_hour')} />
                        {errors.opening_hour && <p className="text-xs text-red-500">{errors.opening_hour.message}</p>}
                    </div>

                    <div className='w-full md:w-1/2 p-2'>
                        <Label title='Closing Hour (HH:MM)' size='md' className='font-medium' />
                        <Input type="time" {...register('closing_hour')} />
                        {errors.closing_hour && <p className="text-xs text-red-500">{errors.closing_hour.message}</p>}
                    </div>

                    <div className='w-full md:w-1/2 p-2'>
                        <Label title='Upload Store Logo' size='md' className='font-medium mb-1' />
                        <Controller
                            name="logo"
                            control={control}
                            render={({ field }) => (
                                <FileUpload field={field} maxUploads={1} />
                            )}
                        />
                        {errors.logo && <p className="text-xs text-red-500">{errors.logo.message}</p>}
                    </div>

                    <div className='w-full md:w-1/2 p-2'>
                        <Label title='Upload Store Banner' size='md' className='font-medium mb-1' />
                        <Controller
                            name="banner"
                            control={control}
                            render={({ field }) => (
                                <FileUpload field={field} maxUploads={1} />
                            )}
                        />
                        {errors.banner && <p className="text-xs text-red-500">{errors.banner.message}</p>}
                    </div>

                    <div className='w-full p-2'>
                        <Button variant='secondary' className='font-montserrat w-full md:w-auto' type="submit">
                            Add Store
                            {isSubmitting && <div className='w-5 h-5 rounded-full border-2 border-t-0 border-l-0 border-white animate-spin ml-3' />}
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddStorePage