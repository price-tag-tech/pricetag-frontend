import { FC } from 'react'
import { getTextSize, TextSize } from '../../../utils/get-text-size'

interface TextareaProps {
    className?: string
    name?: string
    placeholder?: string
    value?: string
    size?: TextSize
    change?: (value: string) => void
    rows?: number
}

const Textarea: FC<TextareaProps> = (props) => {

    const sizeClass = getTextSize(props.size!, 'sm')

    return (
        <textarea
            onChange={e => props.change?.(e.target.value)}
            value={props.value}
            placeholder={props.placeholder}
            rows={props.rows || 4}
            className={`py-4 p-4 border shadow-sm rounded w-full ${sizeClass} ${props.className}`}
        >
            {props.value && props.value}
        </textarea>
    )
}

export default Textarea