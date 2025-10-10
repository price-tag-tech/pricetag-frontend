import { TextareaHTMLAttributes, forwardRef } from 'react'
import { getTextSize, TextSize } from '../../../utils/get-text-size'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    size?: TextSize
    change?: (value: string) => void
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
    const { size, change, className, onChange, children, ...rest } = props

    const sizeClass = getTextSize(size ?? 'sm')

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e)
        change?.(e.target.value)
    }

    return (
        <textarea
            ref={ref}
            onChange={handleChange}
            className={`py-4 p-4 border shadow-sm rounded w-full ${sizeClass} ${className}`}
            {...rest}
        >
            {children}
        </textarea>
    )
})

export default Textarea