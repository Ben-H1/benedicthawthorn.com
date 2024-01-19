import { cn } from '@util/css';
import { HTMLAttributes, ReactNode, forwardRef, ForwardedRef } from 'react';

type TextProps = {
    className?: string;
    children?: ReactNode;
};

const H1 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ children, className, ...props }: TextProps, ref: ForwardedRef<HTMLHeadingElement>) => {
        return (
            <h1
                className={cn('font-appleGaramond text-5xl', className)}
                ref={ref}
                {...props}
            >
                {children}
            </h1>
        );
    }
);

const H2 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ children, className, ...props }: TextProps, ref: ForwardedRef<HTMLHeadingElement>) => {
        return (
            <h2
                className={cn('font-appleGaramond text-4xl', className)}
                ref={ref}
                {...props}
            >
                {children}
            </h2>
        );
    }
);

const H3 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ children, className, ...props }: TextProps, ref: ForwardedRef<HTMLHeadingElement>) => {
        return (
            <h3
                className={cn('font-appleGaramond text-2xl', className)}
                ref={ref}
                {...props}
            >
                {children}
            </h3>
        );
    }
);

const Body = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
    ({ children, className, ...props }: TextProps, ref: ForwardedRef<HTMLParagraphElement>) => {
        return (
            <p
                className={cn('font-serif text-lg', className)}
                ref={ref}
                {...props}
            >
                {children}
            </p>
        );
    }
);

const System = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
    ({ children, className, ...props }: TextProps, ref: ForwardedRef<HTMLParagraphElement>) => {
        return (
            <p
                className={cn('font-chicago text-sm', className)}
                ref={ref}
                {...props}
            >
                {children}
            </p>
        );
    }
);

const Text = {
    H1, H2, H3,
    Body, System
};

export default Text;
