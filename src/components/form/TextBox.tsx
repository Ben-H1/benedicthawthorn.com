import { cn } from '@util/css';
import { InputHTMLAttributes } from 'react';

interface TextBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const TextBox = ({ className, ...props }: TextBoxProps) => {
    return (
        <input
            type='text'
            className={cn('border-black border px-2 py-1 rounded-md outline-none font-chicago text-sm', className)}
            {...props}
        />
    );
};

export default TextBox;
