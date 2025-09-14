export interface StatusInterface {
    state: 'pending' | 'success' | 'accepted' | 'approved' | 'error' | 'rejected' | 'default' | string
    label?: string
}

const STATUS_COLORS: Record<StatusInterface['state'], string> = {
    // success
    success: 'text-green-700 bg-green-100/30',
    accepted: 'text-green-700 bg-green-100/30',
    approved: 'text-green-700 bg-green-100/30',
    // rejected
    error: 'text-red-700 bg-red-100/30',
    rejected: 'text-red-700 bg-red-100/30',
    // others
    pending: 'text-yellow-700 bg-yellow-100/30',
    default: 'text-gray-700 bg-gray-100/30',
}

const Status = ({ state, label }: StatusInterface) => {
    const color = STATUS_COLORS[state] ?? STATUS_COLORS.default

    return (
        <span className={`${color} px-1 rounded-lg capitalize`}>
            {label ?? state}
        </span>
    )
}

export default Status