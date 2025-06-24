import { FC } from 'react'

interface Option {
    label: string,
    value: string,
}

interface SelectProps {
    options?: Option[]
    className?: string
    default?: string
    name?: string
    size?: "xs" | "sm" | "md" | "lg"
}

const Select: FC<SelectProps> = (props) => {
    return (
        <select className={`py-4 p-4 border w-full shadow-sm rounded bg-white text-gray-500 text-${props.size || "sm"} ${props.className}`}>
            <option className='capitalize'>{props.default ?? `--Select ${props.name?.substring(0, 1).toUpperCase()}${props.name?.substring(1)}--`}</option>
            {props.options && props.options.map((option) => <option key={option.value} value={option.value}>
                {option.label}
            </option>)}
        </select>
    )
}

export default Select