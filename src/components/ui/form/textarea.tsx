import { FC } from 'react'

interface TextareaProps {
    type?: string,
    className?: string
    name?: string
    placeholder?: string
    value?: string
    size?: "xs" | "sm" | "md" | "lg"
}

const Textarea: FC<TextareaProps> = (props) => {
    return (
        <textarea value={props.value} placeholder={props.placeholder} className={`py-4 p-4 border shadow-sm rounded text-${props.size || "sm"} ${props.className}`}>
            {props.value && props.value}
        </textarea>
    )
}

export default Textarea