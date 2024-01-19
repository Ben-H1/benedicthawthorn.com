import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@util/css';
import { AnchorHTMLAttributes, ReactNode } from 'react';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    openInNewTab?: boolean;
    className?: string;
    children: ReactNode;
}

const Link = ({ openInNewTab, className, children, ...props }: LinkProps) => {
    return (
        <a
            target={openInNewTab ? '_blank' : undefined}
            rel='noreferrer noopener'
            className={cn('text-indigo-800 hover:underline flex items-center cursor-pointer', className)}
            {...props}
        >
            {children}
            {openInNewTab && (
                <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className='ml-2 h-3 w-3'
                />
            )}
        </a>
    );
};

export default Link;
