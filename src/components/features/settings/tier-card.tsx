import { useState } from 'react'
import { Pencil, Trash2 } from "lucide-react"

interface Tier {
    id: string,
    name: string,
    commission: number,
    type: string,
    minRevenue?: number,
    minOrders?: number,
    color: string,
    description: string,
}

interface Props {
    tier: Tier,
    editing?: boolean
    onDelete: (i: string) => void
}

const TierCard = (props: Props) => {
    const [tier, setTier] = useState<Tier>(props.tier)
    const [editing, setEditing] = useState(props.editing)

    const handleChange = (field: keyof Tier, value: string | number) => {
        setTier(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleSave = () => {
        setEditing(false)
    }

    return (
        <div
            id={`tier-${tier.id}`}
            key={tier.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col justify-between space-y-5 transition hover:shadow-md"
        >
            <div className="flex items-center justify-between">
                <input
                    type="color"
                    value={tier.color}
                    onChange={(e) => handleChange("color", e.target.value)}
                    className="w-6 h-6 rounded-full border border-gray-300 cursor-pointer"
                    disabled={!editing}
                />

                <div className="flex gap-2">
                    {!editing && (
                        <button
                            onClick={() => setEditing(true)}
                            className="text-gray-500 hover:text-blue-600 transition"
                        >
                            <Pencil size={18} />
                        </button>
                    )}
                    <button
                        onClick={() => props.onDelete(tier.id)}
                        className="text-red-500 hover:text-red-700 transition"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>

            {/* Tier Name */}
            <div>
                {editing ? (
                    <input
                        type="text"
                        value={tier.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Tier name"
                        className="w-full text-xl font-semibold border-b border-gray-300 py-1 focus:outline-none text-gray-800"
                    />
                ) : (
                    <h3 className="text-xl font-bold" style={{ color: tier.color }}>
                        {tier.name}
                    </h3>
                )}
            </div>

            <div className="space-y-2 text-sm text-gray-700">
                {/* Commission */}
                <div className="flex justify-between items-center">
                    <span className="font-medium">Commission:</span>
                    {editing ? (
                        <input
                            type="number"
                            value={tier.commission}
                            onChange={(e) => handleChange("commission", parseInt(e.target.value))}
                            className="w-20 border border-gray-300 rounded px-2 py-0.5 text-sm text-right"
                        />
                    ) : (
                        <span>{tier.commission}%</span>
                    )}
                </div>

                <div className="flex justify-between items-center">
                    <span className="font-medium">Type:</span>
                    {editing ? (
                        <select
                            value={tier.type}
                            onChange={(e) => handleChange("type", e.target.value)}
                            className="border border-gray-300 px-2 py-0.5 rounded text-sm"
                        >
                            <option value="manual">Manual</option>
                            <option value="automatic">Automatic</option>
                        </select>
                    ) : (
                        <span>{tier.type.charAt(0).toUpperCase() + tier.type.slice(1)}</span>
                    )}
                </div>

                {tier.type === "automatic" && (
                    <>
                        <div className="flex justify-between items-center">
                            <span className="font-medium">Min Revenue:</span>
                            {editing ? (
                                <input
                                    type="number"
                                    value={tier.minRevenue ?? ""}
                                    onChange={(e) => handleChange("minRevenue", parseInt(e.target.value))}
                                    className="w-24 border border-gray-300 rounded px-2 py-0.5 text-sm text-right"
                                />
                            ) : (
                                <span>₦{tier.minRevenue?.toLocaleString() || 0}</span>
                            )}
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="font-medium">Min Orders:</span>
                            {editing ? (
                                <input
                                    type="number"
                                    value={tier.minOrders ?? ""}
                                    onChange={(e) => handleChange("minOrders", parseInt(e.target.value))}
                                    className="w-24 border border-gray-300 rounded px-2 py-0.5 text-sm text-right"
                                />
                            ) : (
                                <span>{tier.minOrders || 0}</span>
                            )}
                        </div>
                    </>
                )}
            </div>

            <div className="pt-2">
                <label className="text-sm font-medium text-gray-600 mb-1 block">Description</label>
                {editing ? (
                    <textarea
                        value={tier.description}
                        onChange={(e) => handleChange("description", e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 resize-none"
                        rows={3}
                    />
                ) : (
                    <p className="text-sm text-gray-700 leading-relaxed">{tier.description}</p>
                )}
            </div>

            {editing && (
                <button
                    onClick={handleSave}
                    className="w-full bg-gray-800 text-white py-2 text-sm rounded hover:bg-gray-900 transition"
                >
                    Save Changes
                </button>
            )}
        </div>

    )
}

export default TierCard