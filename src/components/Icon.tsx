import { cn } from '@util/css';
import { Icon } from './desktopEnvironment/window/Window';

type IconProps = {
    icon: Icon;
    size?: 'md' | 'sm';
    shadow?: boolean;
    className?: string;
};

const Icon = ({ icon, size = 'md', shadow, className }: IconProps) => {
    const sizeProps = {
        'md': 'h-8 w-8',
        'sm': 'h-4 w-4'
    };

    return (
        <div
            className={cn(
                'flex items-center justify-center',
                sizeProps[size],
                shadow && 'drop-shadow-icon',
                className
            )}
        >
            <img src={icon[size] ?? icon['md']} />
        </div>
    );
};

export default Icon;
