import SubscriptionPlan, { SubscriptionInterface } from '../../sections/subscription-plan'

const plans: SubscriptionInterface[] = [
    {
        id: "1",
        price: 0,
        title: "Free Plan",
        subscribers: Math.floor(Math.random() * 10000),
        description: "Ideal for testing the platform",
        features: [
            { label: "Business Store", value: 1 },
            { label: "Products/Services", value: 5 },
            { label: "Business Listing", value: false },
            { label: "Analytics", value: "Basic" },
            { label: "Storage", value: "100MB" }
        ]
    },
    {
        id: "2",
        price: 10000,
        title: "Starter Plan",
        subscribers: Math.floor(Math.random() * 10000),
        description: "Perfect for small businesses",
        features: [
            { label: "Business Stores", value: 2 },
            { label: "Products/Services per Store", value: 15 },
            { label: "Business Listing", value: "Organic" },
            { label: "Analytics", value: "Basic" },
            { label: "Storage", value: "300MB" },
            { label: "Chat Support", value: "24/7" }
        ]
    },
    {
        id: "3",
        price: 20000,
        title: "Growth Plan",
        subscribers: Math.floor(Math.random() * 10000),
        description: "For growing businesses",
        features: [
            { label: "Business Stores", value: 4 },
            { label: "Products/Services per Store", value: 30 },
            { label: "Business Listing", value: "Partial" },
            { label: "Analytics", value: "Standard" },
            { label: "Storage", value: "500MB" },
            { label: "Featured Stores", value: true }
        ]
    },
    {
        id: "4",
        price: 30000,
        title: "Enterprise Plan",
        subscribers: Math.floor(Math.random() * 10000),
        description: "For scaling operations",
        features: [
            { label: "Business Stores", value: 6 },
            { label: "Products/Services per Store", value: 45 },
            { label: "Business Listed", value: "Before Top" },
            { label: "Analytics", value: "Advanced" },
            { label: "Storage", value: "750MB" },
            { label: "Top Searches Promotion", value: true }
        ]
    },
    {
        id: "5",
        price: 40000,
        title: "Pro Plan",
        subscribers: Math.floor(Math.random() * 10000),
        description: "For established and premium brands",
        features: [
            { label: "Business Stores", value: 8 },
            { label: "Products/Services per Store", value: 80 },
            { label: "Business Listing", value: "Top" },
            { label: "Analytics", value: "Premium" },
            { label: "Storage", value: "1.3GB" },
            { label: "Sponsored Ad Placement", value: true }
        ]
    },
    {
        id: "6",
        price: 50000,
        title: "Premium Plan",
        subscribers: Math.floor(Math.random() * 10000),
        description: "For large or multi-location brands",
        features: [
            { label: "Business Stores", value: 12 },
            { label: "Products/Services per Store", value: 100 },
            { label: "Business Listing", value: "Priority" },
            { label: "Analytics", value: "All Advanced Features + Insights" },
            { label: "Storage", value: "2GB" },
            { label: "Dedicated Account Manager", value: true }
        ]
    }
]

const Subscriptions = () => {

    return (
        <div className=''>
            <div className="my-6 p-3 md:p-6">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Subscription Plans</h2>
                    <p className="text-sm text-gray-500">Manage & track all subscription plans</p>
                </div>

                <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {
                        plans.map(plan => (
                            <SubscriptionPlan
                                title={plan.title}
                                subscribers={plan.subscribers}
                                id={plan.id}
                                key={plan.id}
                                price={plan.price}
                                features={plan.features}
                                description={plan.description}
                                onSave={() => console.log}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Subscriptions