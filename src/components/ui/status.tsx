import { useEffect, useState } from 'react'

interface Props {
    state: 'pending' | 'approved' | 'rejected' | 'default';
    label?: string;
}

const Status = (props: Props) => {
    const [color, setColor] = useState('text-gray-500 bg-gray-100');

    useEffect(() => {
        switch (props.state) {
            case 'pending':
                setColor('text-yellow-700 bg-yellow-100/30');
                break;
            case 'approved':
                setColor('text-green-700 bg-green-100/30');
                break;
            case 'rejected':
                setColor('text-red-700 bg-red-100/30');
                break;
            default:
                setColor('text-gray-700 bg-gray-100/30');
                break;
        }
    }, [props.state]);

    return (
        <span className={`${color} px-1 rounded-lg capitalize`}>{props.label ?? props.state}</span>
    )
}

export default Status