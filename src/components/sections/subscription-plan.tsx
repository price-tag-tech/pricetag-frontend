import { useState } from "react"
import { CheckCircle, XCircle, Edit2, Save } from "lucide-react"
import ToggleButton from "../ui/toggle-button"
import Input from "../ui/form/input"
import Button from "../common/Button"

export interface SubscriptionFeature {
    label: string
    value: boolean | string | number
}

export interface SubscriptionInterface {
    id: string
    title: string
    price: number
    description: string
    features: SubscriptionFeature[]
    subscribers: number
}

interface SubscriptionProps extends SubscriptionInterface {
    onSave?: (features: SubscriptionFeature[]) => void
}

export default function SubscriptionPlan({
    id,
    title,
    price,
    subscribers,
    description,
    features,
    onSave,
}: SubscriptionProps) {
    const [editMode, setEditMode] = useState(false)
    const [editableFeatures, setEditableFeatures] = useState(features)

    const updateLimit = (index: number, newValue: string) => {
        const updated = [...editableFeatures]
        updated[index].value = newValue
        setEditableFeatures(updated)
    }

    const handleSave = () => {
        onSave?.(editableFeatures)
        setEditMode(false)
    }

    return (
        <div className="w-full max-w-xl border rounded-xl shadow-sm p-6 bg-white space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
                <div className="flex flex-col">
                    {
                        editMode ? (
                            <Input type="number" value={price} className="w-24 rounded-3xl" />
                        ) :
                            <p className="text-lg font-semibold text-brand-600">{price > 0 ? `₦${price.toLocaleString()}` : "Free"}</p>
                    }

                    {!editMode && <button
                        onClick={() => setEditMode(true)}
                        className="mt-2 text-sm px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-2"
                    >
                        <Edit2 size={12} />
                        Edit
                    </button>}
                </div>
            </div>

            {
                !editMode && (
                    <div className="flex items-center gap-2 bg-gray-100 border rounded-lg px-4 py-2 w-fit">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm font-medium text-gray-700">
                            {subscribers.toLocaleString()} subscribers
                        </span>
                    </div>

                )
            }

            {/* Features */}
            <ul className="grid gap-3 sm:grid-cols-1">
                {editableFeatures.map((feat, index) => {
                    const isBoolean = typeof feat.value === "boolean"

                    return (
                        <li
                            key={index}
                            className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-md flex-wrap"
                        >
                            <span className="text-sm font-medium text-gray-700">{feat.label}</span>

                            {
                                editMode ? (
                                    isBoolean ? (
                                        <ToggleButton value={!!feat.value} />
                                    ) : (
                                        <Input
                                            type="text"
                                            value={feat.value as string}
                                            change={(value) => updateLimit(index, value)}
                                            className="max-w-64 px-2 py-1 border rounded-3xl text-sm text-gray-700 shadow-inner"
                                        />
                                    )
                                ) : (
                                    isBoolean ? (
                                        feat.value ? (
                                            <CheckCircle className="text-green-500" size={18} />
                                        ) : (
                                            <XCircle className="text-red-400" size={18} />
                                        )
                                    ) : (
                                        <span className="text-sm font-semibold text-gray-800">{feat.value}</span>
                                    ))}
                        </li>
                    )
                })}
            </ul>

            {editMode &&
                <Button onClick={handleSave} variant="secondary" className="w-full">
                    Save
                </Button>
            }
        </div>
    )
}
