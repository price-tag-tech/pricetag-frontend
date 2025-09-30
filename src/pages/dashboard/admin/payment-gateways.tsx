import { useState } from 'react'
import Button from '../../../components/common/Button'
import ToggleButton from '../../../components/ui/toggle-button'
import Input from '../../../components/ui/form/input'
import Label from '../../../components/ui/form/label'

interface Gateway {
    id: string
    name: string
    status: boolean
    volume: string
    usage: string
    lastUsed: string
}

const gateways: Gateway[] = [
    {
        id: 'paystack',
        name: 'Paystack',
        status: true,
        volume: '₦2,400,000',
        usage: '245 payments',
        lastUsed: '2024-07-20',
    },
    {
        id: 'flutterwave',
        name: 'Flutterwave',
        status: false,
        volume: '₦980,000',
        usage: '89 payments',
        lastUsed: '2024-07-14',
    },
    {
        id: 'Bank Transfer',
        name: 'BankTransfer',
        status: true,
        volume: '₦430,000',
        usage: '41 payments',
        lastUsed: '2024-07-10',
    },
]

export default function PaymentGatewaysPage() {
    const [editingGateway, setEditingGateway] = useState<Gateway | null | 'new'>(null)
    const [formData, setFormData] = useState<Record<string, string>>({})

    const handleChange = (key: string, value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // submit logic here
        setEditingGateway(null)
    }

    return (
        <div className="p-4 md:p-6 space-y-8">
            <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-gray-900">Payment Gateways</h1>
                    <p className="text-gray-500 text-sm">Manage connected payment providers and monitor transaction activity</p>
                </div>
            </header>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {gateways.map((gateway) => (
                    <div
                        key={gateway.id}
                        className="bg-white rounded-xl shadow-sm border p-4 flex flex-col justify-between space-y-4"
                    >
                        <div>
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold text-gray-800">{gateway.name}</h2>
                                <ToggleButton value={gateway.status} onChange={() => { }} />
                            </div>
                            <p className="text-sm text-gray-500 mt-1">Last used on {gateway.lastUsed}</p>
                        </div>

                        <div className="text-sm text-gray-700 space-y-1">
                            <p><strong>Volume Processed:</strong> {gateway.volume}</p>
                            <p><strong>Usage:</strong> {gateway.usage}</p>
                        </div>
                    </div>
                ))}
            </div>

            {editingGateway && (
                <div className="fixed w-screen h-screen top-0 inset-0 z-50 bg-black/50 backdrop-blur-sm">
                    <div className="absolute inset-0 overflow-y-auto flex items-center sm:items-center justify-center p-4 sm:p-8">
                        <div className="bg-white w-full max-w-xl sm:rounded-xl shadow-lg p-6 sm:p-8 space-y-6 overflow-y-auto">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {editingGateway === 'new' ? 'Create Gateway' : 'Edit API Credentials'}
                                </h3>
                                <button onClick={() => setEditingGateway(null)} className="text-gray-500 hover:text-gray-700 text-sm">Close</button>
                            </div>

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                {editingGateway === 'new' && (
                                    <div className='flex flex-col'>
                                        <Label title='Gateway Name' />
                                        <Input
                                            value={formData.name || ''}
                                            change={value => handleChange('name', value)}
                                        />
                                    </div>
                                )}

                                {Object.entries(formData).filter(([k]) => k !== 'name').map(([key, value]) => (
                                    <div key={key} className='flex flex-col'>
                                        <Label title={key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} />
                                        <Input
                                            value={value}
                                            change={value => handleChange(key, value)}
                                        />
                                    </div>
                                ))}

                                <div className="flex justify-end gap-2 pt-4">
                                    <Button size="sm" variant="outline" onClick={() => setEditingGateway(null)}>Cancel</Button>
                                    <Button size="sm" type="submit">{editingGateway === 'new' ? 'Create' : 'Save Changes'}</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
