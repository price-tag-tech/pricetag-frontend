import { FC } from 'react'

interface InputProps {
    type?: string,
    className?: string
    name?: string
    placeholder?: string
    value?: string
    size?: "xs" | "sm" | "md" | "lg"
}

const Input: FC<InputProps> = (props) => {
    return (
        <input type={props.type ?? 'text'} value={props.value} placeholder={props.placeholder} className={`py-4 p-4 border shadow-sm rounded text-${props.size || "sm"} ${props.className}`} />
    )
}

export default Input