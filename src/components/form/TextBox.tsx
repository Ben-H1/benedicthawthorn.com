import { cn } from '@util/css';
import { HTMLAttributes } from 'react';

interface TextBoxProps extends HTMLAttributes<HTMLInputElement> {
    className?: string;
}

const TextBox = ({ className, ...props }: TextBoxProps) => {
    return (
        <input
            type='text'
            className={cn('border-black border px-2 py-1 rounded-md outline-none', className)}
            {...props}
        />
    );
};

export default TextBox;
