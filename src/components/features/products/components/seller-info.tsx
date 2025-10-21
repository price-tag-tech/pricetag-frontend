import React from "react";
import Button from "../../../common/Button";
import ProgressBar from "@ramonak/react-progress-bar";

interface Seller {
    name: string;
    avatar: string;
    description: string;
    rating: number;
    totalSales: string;
    deliveryRate: number;
    phone: string;
}

interface SellerInfoProps {
    seller: Seller;
}

const SellerInfo: React.FC<SellerInfoProps> = ({ seller }) => {
    return (
        <div className="border rounded-xl p-4 text-sm">
            <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold mb-2">Seller Information</h3>
                <Button size="sm" variant="outline" className="p-2 text-xs">
                    Visit Store
                </Button>
            </div>

            <div className="flex items-center gap-3 mb-2">
                <img
                    src={seller.avatar}
                    alt="Seller"
                    className="w-10 h-10 rounded-full object-cover border"
                />
                <div>
                    <p className="text-sm font-medium">{seller.name}</p>
                    <p className="text-xs text-[#6e6e6e]">
                        {seller.description}
                    </p>
                </div>
            </div>

            <div className="mt-2">
                <h3 className="text-md font-semibold mb-1">Number of Sales</h3>
                <div className="flex items-center gap-2 w-full">
                    <div className="flex flex-col w-full md:w-1/2">
                        <h5 className="font-bold text-xl">
                            {seller.totalSales}
                        </h5>
                        <p className="text-gray-600 text-sm">
                            Successful sales
                        </p>
                    </div>

                    <div className="w-full md:w-1/2">
                        <h4 className="font-light mb-2">
                            delivery rate
                        </h4>
                        <ProgressBar
                            completed={seller.deliveryRate}
                            height='20px'
                            bgColor='#1DBF73'
                            labelSize='13px'
                            labelAlignment='left'
                            customLabelStyles={{ paddingLeft: "20px" }}
                            className='text-sm'
                        />
                    </div>
                </div>
            </div>
            <p className="text-xs text-[#6e6e6e] mt-1">{seller.totalSales} successful sales</p>
        </div>
    );
};

export default SellerInfo;