import { useState } from "react"
import { Upload, Shield, Wrench, Globe, Settings } from "lucide-react"
import Input from "../../ui/form/input"
import Label from "../../ui/form/label"
import Select from "../../ui/form/select"
import ToggleButton from "../../ui/toggle-button"
import Button from "../../common/Button"

const GeneralSettings = () => {
    const [settings, setSettings] = useState({
        email: {
            support: "support@pricetag.com",
            businessApproval: "admin.business@pricetag.com",
        },
        contact: "+2348000000000",
        currency: "NGN",
        socials: {
            facebook: "https://facebook.com",
            twitter: "https.com/x.com",
            instagram: "https://instagram.com"
        },
        logo: null,
        maintenanceMode: false,
        manualApproval: true,
    })

    const handleChange = (path: string, value: any) => {
        setSettings(prev => {
            const keys = path.split(".")
            const updated = structuredClone(prev)

            keys.slice(0, -1).reduce((obj: any, key) => obj[key], updated)[keys.at(-1)!] = value

            return updated
        })
    }



    return (
        <div className="max-w-5xl my-8 p-4 md:p-6 bg-white rounded-xl shadow-sm border space-y-8">
            <div className="space-y-1">
                <h2 className="text-2xl font-bold text-gray-800">General Settings</h2>
                <p className="text-sm text-gray-500">Control how the platform behaves, its default communication settings, and branding.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <Label for="email">Support Email</Label>
                    <Input
                        type="email"
                        value={settings.email.support}
                        change={(value) => handleChange("email.support", value)}
                        className="w-full px-3 py-2 border rounded-md shadow-inner text-sm"
                    />
                </div>

                <div>
                    <Label for="phone">Support Phone</Label>
                    <Input
                        type="tel"
                        value={settings.contact}
                        change={(value) => handleChange("contact", value)}
                        className="w-full px-3 py-2 border rounded-md shadow-inner text-sm"
                    />
                </div>

                <div>
                    <Label for="approval-email">Business Approval Email</Label>
                    <Input
                        type="email"
                        value={settings.email.businessApproval}
                        change={(value) => handleChange("email.businessApproval", value)}
                        className="w-full px-3 py-2 border rounded-md shadow-inner text-sm"
                    />
                </div>

                <div>
                    <Label for="currency">Default Currency</Label>
                    <Select
                        placeholder="--Select Currency--"
                        options={[
                            { label: "NGN (₦)", value: "NGN" },
                            { label: "USD ($)", value: "USD" },
                            { label: "EUR (€)", value: "EUR" },
                        ]}
                        change={(value) => handleChange("currency", value)}
                        className="w-full px-3 py-2 border rounded-md shadow-inner text-sm"
                    />
                </div>

                <div>
                    <Label for="facebook">Facebook Profile Link</Label>
                    <Input
                        type="url"
                        value={settings.socials.facebook}
                        change={(value) => handleChange("socials.facebook", value)}
                        className="w-full px-3 py-2 border rounded-md shadow-inner text-sm"
                    />
                </div>

                <div>
                    <Label for="twitter">Twitter Profile Link</Label>
                    <Input
                        type="url"
                        value={settings.socials.twitter}
                        change={(value) => handleChange("socials.twitter", value)}
                        className="w-full px-3 py-2 border rounded-md shadow-inner text-sm"
                    />
                </div>

                <div>
                    <Label for="instagram">Instagram Profile Link</Label>
                    <Input
                        type="url"
                        value={settings.socials.instagram}
                        change={(value) => handleChange("socials.instagram", value)}
                        className="w-full px-3 py-2 border rounded-md shadow-inner text-sm"
                    />
                </div>

                {/* Logo Upload */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Platform Logo</label>
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gray-100 border flex items-center justify-center overflow-hidden">
                            {settings.logo ? (
                                <img
                                    src={URL.createObjectURL(settings.logo)}
                                    alt="Logo"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <Globe className="text-gray-400 w-6 h-6" />
                            )}
                        </div>
                        <label className="cursor-pointer text-sm font-medium text-blue-600 hover:underline flex items-center gap-1">
                            <Upload size={16} />
                            Upload New
                            <input
                                type="file"
                                className="hidden"
                                onChange={(e) => handleChange("logo", e.target.files?.[0] || null)}
                            />
                        </label>
                    </div>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 border-t mt-4 pt-6">
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md border shadow-sm">
                    <div className="flex items-start gap-3">
                        <Settings className="text-gray-500 mt-0.5" />
                        <div>
                            <p className="text-sm font-semibold text-gray-800">Maintenance Mode</p>
                            <p className="text-xs text-gray-500">Temporarily disable platform for public users</p>
                        </div>
                    </div>
                    <div className="px-2">
                        <ToggleButton value={settings.maintenanceMode} />
                    </div>
                </div>

                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md border shadow-sm">
                    <div className="flex items-start gap-3">
                        <Settings className="text-gray-500 mt-0.5" />
                        <div>
                            <p className="text-sm font-semibold text-gray-800">Manual Business Approval</p>
                            <p className="text-xs text-gray-500">Require admin review before businesses go live</p>
                        </div>
                    </div>
                    <div className="px-2">
                        <ToggleButton value={settings.manualApproval} />
                    </div>
                </div>
            </div>

            <div className="pt-6">
                <Button className="w-full md:w-auto">
                    Save Settings
                </Button>
            </div>
        </div>
    )
}

export default GeneralSettings