import React from "react";
import { TruckIcon, RefreshCcw, ShieldCheck } from "lucide-react";

const DeliveryInfo: React.FC = () => {
    return (
        <div className="border rounded-xl p-4 px-6 md:px-10 text-sm text-[#1f1f1f] grid gap-4">
            <h3 className="font-semibold mb-2 text-2xl">Delivery & Returns</h3>
            <div className="flex flex-col gap-y-3">
                <div>
                    <div className="flex items-center gap-3 my-2">
                        <span className="text-brand-600">
                            <TruckIcon />
                        </span>
                        <h5 className="text-lg font-semibold">Delivery</h5>
                    </div>
                    <ul className="list-none list-inside text-[#4a4a4a] space-y-3">
                        <li>Estimated delivery time: 1-9 business days</li>
                        <li>Express Delivery Available</li>
                        <li>
                            <b>For Same-Day-Delivery:</b>
                            {' '}Please place your order before 11AM
                        </li>
                        <li>
                            <b>Next-Day-Delivery:</b>
                            {' '}Orders placed after 11AM will be delivered the next day
                        </li>
                        <li>
                            <b>Note:</b>
                            {' '} Availability may vary by location
                        </li>
                    </ul>
                </div>

                <div>
                    <div className="flex items-center gap-3 my-2">
                        <span className="text-brand-600">
                            <RefreshCcw />
                        </span>
                        <h5 className="text-lg font-semibold">Return Policy</h5>
                    </div>

                    <ul className="list-none list-inside text-[#4a4a4a] space-y-3">
                        <li>Guaranteed 7-Day Return Policy</li>
                    </ul>
                </div>

                <div>
                    <div className="flex items-center gap-3 my-2">
                        <span className="text-brand-600">
                            <ShieldCheck />
                        </span>
                        <h5 className="text-lg font-semibold">Warranty</h5>
                    </div>

                    <ul className="list-none list-inside text-[#4a4a4a] space-y-3">
                        <li>Warranty information unavailable for this item</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DeliveryInfo;