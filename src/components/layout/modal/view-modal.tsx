import { FC, ReactNode } from 'react';

interface ViewField {
    label: string;
    value: string | ReactNode;
}

interface ViewModalProps {
    data: ViewField[];
    image?: string;
    title?: string; // optional name/title for user
    subtitle?: string; // optional subtext like email/role
}

const ViewModal: FC<ViewModalProps> = ({ data, image, title, subtitle }) => {
    return (
        <div className="py-6 px-2 md:px-6 flex flex-col items-center gap-y-6 text-gray-800">
            {image && (
                <div className="flex flex-col items-center gap-y-2">
                    <img
                        src={image}
                        alt="Profile"
                        className="w-16 h-16 rounded-full object-cover border shadow"
                    />
                    {title && <h3 className="text-lg font-semibold">{title}</h3>}
                    {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
                </div>
            )}

            {/* Data Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.map(({ label, value }, index) => (
                    <div
                        key={index}
                        className="flex flex-col bg-gray-50 rounded-lg p-3 border"
                    >
                        <div className="text-[8pt] text-gray-500 uppercase font-medium">
                            {label}
                        </div>
                        <div className="text-sm font-medium text-gray-900">{value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewModal;
