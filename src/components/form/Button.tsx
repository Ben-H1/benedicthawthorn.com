import { cn } from '@util/css';
import { MouseEventHandler, ReactNode, useState } from 'react';

type ButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    tempChildren?: ReactNode;
    tempDelayMs?: number;
    className?: string;
    children: ReactNode;
    [prop: string]: unknown;
};

const Button = ({ onClick, tempChildren, tempDelayMs = 1000, className, children, ...props }: ButtonProps) => {
    const [buttonChildren, setButtonChildren] = useState(children);

    const handleClick: MouseEventHandler<HTMLButtonElement> = (...args) => {
        if (onClick) {
            onClick(...args);
        }

        if (tempChildren) {
            setButtonChildren(tempChildren);
            setTimeout(() => setButtonChildren(children), tempDelayMs);
        }
    };

    return (
        <button
            onClick={handleClick}
            className={cn('border-black border px-2 py-1 rounded-md active:bg-gray-300', className)}
            {...props}
        >
            {buttonChildren}
        </button>
    );
};

export default Button;
