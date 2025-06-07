import { FC } from 'react'

interface InputProps {
    type?: string,
    className?: string
    name?: string
    size?: "xs" | "sm" | "md" | "lg"
}

const Input: FC<InputProps> = (props) => {
    return (
        <input type={props.type ?? 'text'} className={`py-4 p-4 border shadow-sm rounded text-${props.size || "xs"} ${props.className}`} />
    )
}

export default Input