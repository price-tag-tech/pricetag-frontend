import { FC, ReactNode } from 'react'

interface LabelProps {
    for?: string
    title?: string
    className?: string
    children?: ReactNode
    size?: "xs" | "sm" | "md" | "lg"
}

const Label: FC<LabelProps> = (props) => {
    return (
        <label htmlFor={props.for} className={`font-medium text-${props.size || 'sm'} ${props.className}`}>
            {props.title || props.children}
        </label>
    )
}

export default Label