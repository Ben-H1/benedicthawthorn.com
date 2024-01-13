import { cn } from '@util/css';
import { ReactNode } from 'react';

type BodyProps = {
    className?: string;
    children: ReactNode;
};

const Body = ({ className, children }: BodyProps) => {
    return (
        <p className={cn('font-serif text-lg', className)} >
            {children}
        </p>
    );
};

export default Body;
