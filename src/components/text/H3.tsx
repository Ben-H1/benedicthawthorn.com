import { cn } from '@util/css';
import { ReactNode } from 'react';

type H3Props = {
    className?: string;
    children: ReactNode;
};

const H3 = ({ className, children, ...props }: H3Props) => {
    return (
        <h3
            className={cn('font-appleGaramond text-2xl', className)}
            {...props}
        >
            {children}
        </h3>
    );
};

export default H3;
