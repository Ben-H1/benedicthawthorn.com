import { cn } from '@util/css';
import { MouseEventHandler, ReactNode } from 'react';

type ButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    children: ReactNode;
    [prop: string]: unknown;
};

const Button = ({ onClick, className, children, ...props }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={cn('border-black border px-2 py-1 rounded-md active:bg-gray-300', className)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
