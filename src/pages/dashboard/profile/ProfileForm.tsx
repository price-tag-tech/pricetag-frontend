import React, { useMemo, useState } from 'react'
import Label from '../../../components/ui/form/label'
import Input from '../../../components/ui/form/input'
import Select from '../../../components/ui/form/select'
import Textarea from '../../../components/ui/form/textarea'
import Button from '../../../components/common/Button'

export type ProfileMode = 'user' | 'admin'

export interface ProfileData {
    id?: string
    name: string
    email: string
    phone?: string
    country?: string
    stateCity?: string
    address?: string
    role?: string
    status?: 'active' | 'suspended' | 'pending' | string
}

interface Option { label: string; value: string }

interface ProfileFormProps {
    mode?: ProfileMode
    data?: ProfileData
    onSubmit?: (data: ProfileData) => void
    submitting?: boolean
    countries?: Option[]
    states?: Option[]
}

const defaultCountries: Option[] = [
    { label: 'Nigeria', value: 'NG' },
    { label: 'Ghana', value: 'GH' },
    { label: 'Kenya', value: 'KE' },
]

const defaultStates: Option[] = [
    { label: 'Lagos', value: 'Lagos' },
    { label: 'Abuja', value: 'Abuja' },
    { label: 'Rivers', value: 'Rivers' },
]

const ProfileForm: React.FC<ProfileFormProps> = ({
    mode = 'user',
    data,
    onSubmit,
    submitting,
    countries = defaultCountries,
    states = defaultStates,
}) => {
    const [form, setForm] = useState<ProfileData>({
        id: data?.id,
        name: data?.name || '',
        email: data?.email || '',
        phone: data?.phone || '',
        country: data?.country || '',
        stateCity: data?.stateCity || '',
        address: data?.address || '',
        role: data?.role,
        status: (data?.status as any) || undefined,
    })

    const isAdmin = mode === 'admin'

    const canSubmit = useMemo(
        () => form.name.trim().length > 0 && form.email.trim().length > 0,
        [form.name, form.email]
    )

    const update = (key: keyof ProfileData, value: string) => {
        setForm(prev => ({ ...prev, [key]: value }))
    }

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!canSubmit) return
        onSubmit?.(form)
    }

    return (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
            <div className="px-6 py-5 border-b">
                <h2 className="text-lg font-semibold">
                    {isAdmin ? 'Admin Profile' : 'Profile Information'}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    {isAdmin
                        ? 'Manage admin account details, role, and status.'
                        : 'Update your personal information and address details.'}
                </p>
            </div>

            <form onSubmit={submit} className="p-6 space-y-8">
                {/* Basic Information */}
                <section>
                    <h3 className="text-sm font-semibold text-gray-700 mb-4">Basic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className='flex flex-col gap-y-2'>
                            <Label title='Email Address' />
                            <Input type='email' value={form.email} change={(v) => update('email', v)} />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <Label title='Full Name' />
                            <Input type='text' value={form.name} change={(v) => update('name', v)} />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <Label title='Phone Number' />
                            <Input type='text' value={form.phone || ''} change={(v) => update('phone', v)} />
                        </div>
                        {isAdmin && (
                            <div className='flex flex-col gap-y-2'>
                                <Label title='Role' />
                                <Select
                                    placeholder='--Select Role--'
                                    options={[
                                        { label: 'Super Admin', value: 'super-admin' },
                                        { label: 'User Registration Admin', value: 'user-registration-admin' },
                                        { label: 'Support Admin', value: 'support-admin' },
                                        { label: 'Finance & Affiliate Admin', value: 'finance-and-affiliate-admin' },
                                        { label: 'User', value: 'user' },
                                    ]}
                                    change={(v) => update('role', v)}
                                />
                            </div>
                        )}
                    </div>
                </section>

                {/* Address */}
                <section>
                    <h3 className="text-sm font-semibold text-gray-700 mb-4">Address</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className='flex flex-col gap-y-2'>
                            <Label title='Country' />
                            <Select placeholder='--Select Country--' options={countries} change={(v) => update('country', v)} />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <Label title='State/City' />
                            <Select placeholder='--Select State/City--' options={states} change={(v) => update('stateCity', v)} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2 mt-6'>
                        <Label title='Enter Full Address' />
                        <Textarea value={form.address || ''} change={(v) => update('address', v)} />
                    </div>
                </section>

                {/* Admin Settings */}
                {isAdmin && (
                    <section>
                        <h3 className="text-sm font-semibold text-gray-700 mb-4">Admin Settings</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className='flex flex-col gap-y-2'>
                                <Label title='Status' />
                                <Select
                                    placeholder='--Select Status--'
                                    options={[
                                        { label: 'Active', value: 'active' },
                                        { label: 'Suspended', value: 'suspended' },
                                        { label: 'Pending', value: 'pending' },
                                    ]}
                                    change={(v) => update('status', v)}
                                />
                            </div>
                        </div>
                    </section>
                )}

                <div className='flex items-center justify-end gap-3'>
                    <Button variant='outline' size='sm' type='button'>Cancel</Button>
                    <Button size='sm' type='submit' disabled={!canSubmit || submitting}>
                        {submitting ? 'Saving...' : 'Save Profile'}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ProfileForm