import { cn } from '@util/css';
import { ReactNode } from 'react';

type H1Props = {
    className?: string;
    children: ReactNode;
};

const H1 = ({ className, children }: H1Props) => {
    return (
        <h1 className={cn('font-appleGaramond text-5xl', className)} >
            {children}
        </h1>
    );
};

export default H1;
