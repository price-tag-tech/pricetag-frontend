import React, { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import DataTable from '../../../components/ui/data-table'
import ToggleButton from '../../../components/ui/toggle-button'

const affiliates = [
    {
        id: 'AFF-3021',
        name: 'Austin Ameh',
        email: 'austin@example.com',
        referrals: 45,
        earnings: '₦85,000',
        pending: '₦10,000',
        status: 'active',
    },
    {
        id: 'AFF-4422',
        name: 'Prince Godson',
        email: 'princeg@example.com',
        referrals: 102,
        earnings: '₦212,000',
        pending: '₦35,000',
        status: 'suspended',
    },
]

export default function AffiliateManagement() {
    const [search, setSearch] = useState('')
    const [onlyActive, setOnlyActive] = useState(true)

    const filteredAffiliates = affiliates.filter((a) =>
        (onlyActive ? a.status === 'active' : true) &&
        (a.name.toLowerCase().includes(search.toLowerCase()) ||
            a.email.toLowerCase().includes(search.toLowerCase()))
    )

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h1 className="text-2xl font-semibold text-neutral-900">Affiliate Management</h1>
                <div className="flex md:items-center gap-4 flex-col-reverse md:flex-row">
                    <label className="flex items-center gap-2 text-sm text-neutral-600">
                        <ToggleButton value={onlyActive} onChange={setOnlyActive} />
                        Show Active Only
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search affiliates..."
                            className="pl-10 pr-3 py-2 rounded-lg border border-neutral-300 bg-white text-sm w-64 focus:ring-2 focus:ring-green-500 focus:outline-none"
                        />
                        <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-2.5 text-neutral-400" />
                    </div>
                </div>
            </div>

            <div className="overflow-auto bg-white rounded-xl shadow-sm">
                <DataTable
                    cols={['Affiliate', 'Email', 'Referrals', 'Earnings', 'Pending Payout', 'Status']}
                    keys={['name', 'email', 'referrals', 'earnings', 'pending', 'status']}
                    data={filteredAffiliates}
                    statuses={[{ label: 'active', state: 'success' }, { label: 'suspended', state: 'error' }]}
                    action
                    onView={() => window.location.href = '/admin/affiliate/1'}
                />
            </div>
        </div>
    )
}
