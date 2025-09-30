import { FC } from 'react'
import { getTextSize, TextSize } from '../../../utils/get-text-size'

interface InputProps {
    type?: string,
    className?: string
    name?: string
    placeholder?: string
    value?: string | number
    size?: TextSize
    checked?: boolean
    change?: (value: string) => void
}

const Input: FC<InputProps> = (props) => {

    const sizeClass = getTextSize(props.size!)

    return (
        <input onChange={e => props.change?.(e.target.value)} type={props.type ?? 'text'} value={props.value} placeholder={props.placeholder} className={`py-4 p-4 border shadow-sm rounded ${props.type === 'radio' || props.type === 'checkbox' ? "w-fit" : "w-full"} ${sizeClass} ${props.className}`} checked={props.checked} />
    )
}

export default Input