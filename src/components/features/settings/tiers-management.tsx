import { useState } from "react"
import { Plus } from "lucide-react"
import Button from "../../common/Button"
import TierCard from "./tier-card"
import { useNavigate } from "react-router-dom"

const initialTiers = [
    {
        id: "1",
        name: "Bronze",
        commission: 15,
        type: "automatic",
        minRevenue: 100000,
        minOrders: 10,
        color: "#CD7F32",
        description: "Basic tier for new sellers.",
    },
    {
        id: "2",
        name: "Emerald",
        commission: 8,
        type: "manual",
        color: "#50C878",
        description: "Manually assigned to top vendors.",
    },
]

const TierManagement = () => {
    const [tiers, setTiers] = useState(initialTiers)
    const [editIndex, setEditIndex] = useState<number | null>(null)

    const navigate = useNavigate()

    const handleDelete = (id: string) => {
        const confirm = window.confirm("Are you sure you want to delete this tier?")
        if (confirm) {
            setTiers(prev => prev.filter(key => key.id !== id))
        }
    }

    const handleAdd = () => {
        const id = crypto.randomUUID()
        setTiers([
            ...tiers,
            {
                id,
                name: "",
                commission: 0,
                type: "manual",
                minRevenue: 0,
                minOrders: 1000,
                color: "#999999",
                description: "",
            },
        ])

        setTimeout(() => {
            navigate(`#tier-${id}`, { replace: false }); // Updates the hash
            document.getElementById(`tier-${id}`)?.scrollIntoView({ behavior: "smooth" });
        }, 100);

    }

    return (
        <div className="my-6 space-y-6 p-3 md:p-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Tiers Management</h2>
                    <p className="text-sm text-gray-500">Control platform behavior, branding, and contact defaults</p>
                </div>
                <Button
                    onClick={handleAdd}
                    variant="secondary"
                    size="sm"
                >
                    <Plus size={16} />
                    <span className="hidden md:block">
                        Add Tier
                    </span>
                </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {tiers.map((tier, i) => <TierCard
                    onDelete={handleDelete}
                    tier={tier}
                    key={i}
                    editing={editIndex === i}
                />
                )}
            </div>
        </div>
    )
}

export default TierManagement
