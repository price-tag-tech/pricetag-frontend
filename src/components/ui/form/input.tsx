import { InputHTMLAttributes, forwardRef } from 'react';
import { getTextSize, TextSize } from '../../../utils/get-text-size';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    textSize?: TextSize;
    change?: (value: string) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        textSize,
        change,
        className,
        type,
        onChange,
        ...rest
    } = props;

    const sizeClass = getTextSize(textSize || 'md');

    const isCheckboxOrRadio = type === 'radio' || type === 'checkbox';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
        change?.(e.target.value);
    };

    return (
        <input
            ref={ref}
            type={type ?? 'text'}
            onChange={handleChange}
            className={`
                py-4 p-4 border shadow-sm rounded 
                ${isCheckboxOrRadio ? "w-fit" : "w-full"} 
                ${sizeClass} 
                ${className ?? ''}
            `}
            {...rest}
        />
    )
});

export default Input;