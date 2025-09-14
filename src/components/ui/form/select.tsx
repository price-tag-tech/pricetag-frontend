import { FC } from 'react'
import { getTextSize, TextSize } from '../../../utils/get-text-size'

interface Option {
    label: string,
    value: string,
}

interface SelectProps {
    options?: Option[]
    className?: string
    placeholder?: string
    name?: string
    size?: TextSize
    change?: (value: string) => void
}

const Select: FC<SelectProps> = (props) => {
    const sizeClass = getTextSize(props.size!)

    return (
        <select onChange={(e) => props.change?.(e.target.value)} className={`py-4 p-4 border w-full shadow-sm rounded bg-white text-gray-500 ${sizeClass} ${props.className}`}>
            <option className='capitalize'>
                {props.placeholder ?? `--Select ${props.name?.substring(0, 1).toUpperCase()}${props.name?.substring(1)}--`}
            </option>
            {props.options && props.options.map((option) => <option key={option.value} value={option.value}>
                {option.label}
            </option>)}
        </select>
    )
}

export default Select