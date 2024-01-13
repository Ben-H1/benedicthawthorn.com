import { cn } from '@util/css';
import { ReactNode } from 'react';

type H2Props = {
    className?: string;
    children: ReactNode;
};

const H2 = ({ className, children }: H2Props) => {
    return (
        <h2 className={cn('font-appleGaramond text-4xl', className)} >
            {children}
        </h2>
    );
};

export default H2;
