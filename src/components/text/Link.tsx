import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';

type LinkProps = {
    link: string;
    openInNewTab?: boolean;
    children: ReactNode;
};

const Link = ({ link, openInNewTab, children }: LinkProps) => {
    return (
        <a
            href={link}
            target={openInNewTab ? '_blank' : undefined}
            rel='noreferrer noopener'
            className='text-indigo-800 hover:underline'
        >
            {children}
            {openInNewTab && (
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xs' className='ml-2' />
            )}
        </a>
    );
};

export default Link;
