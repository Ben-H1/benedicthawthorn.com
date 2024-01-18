import { cn } from '@util/css';
import { InputHTMLAttributes } from 'react';

interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {
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
