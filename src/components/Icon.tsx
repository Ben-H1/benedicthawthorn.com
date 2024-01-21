import { cn } from '@util/css';

type IconProps = {
    path: string;
    shadow?: boolean;
    className?: string;
};

const Icon = ({ path, shadow, className }: IconProps) => {
    return (
        <div
            className={cn(
                'h-8 w-8 flex items-center justify-center',
                shadow && 'drop-shadow-icon',
                className
            )}
        >
            <img src={path} />
        </div>
    );
};

export default Icon;
