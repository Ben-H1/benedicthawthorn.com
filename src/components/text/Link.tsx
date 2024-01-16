import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@util/css';
import { MouseEventHandler, ReactNode } from 'react';

type LinkProps = {
    link?: string;
    openInNewTab?: boolean;
    onClick?: MouseEventHandler;
    className?: string;
    children: ReactNode;
};

const Link = ({ link, openInNewTab, onClick, className, children }: LinkProps) => {
    return (
        <a
            href={link}
            target={openInNewTab ? '_blank' : undefined}
            rel='noreferrer noopener'
            onClick={onClick}
            className={cn('text-indigo-800 hover:underline flex items-center cursor-pointer', className)}
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
