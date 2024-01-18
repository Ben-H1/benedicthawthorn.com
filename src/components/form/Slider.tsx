import { cn } from '@util/css';
import { HTMLAttributes } from 'react';

interface SliderProps extends HTMLAttributes<HTMLInputElement> {
    className?: string;
}

const Slider = ({ className, ...props }: SliderProps) => {
    return (
        <input
            type='range'
            className={cn('slider', className)}
            {...props}
        />
    );
};

export default Slider;
