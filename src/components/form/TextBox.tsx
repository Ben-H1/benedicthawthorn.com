import { cn } from '@util/css';

type TextBoxProps = {
    className?: string;
    [prop: string]: unknown;
};

const TextBox = ({ className, ...props }: TextBoxProps) => {
    return (
        <input
            type='text'
            className={cn('border-black border px-2 py-1 rounded-md outline-none', className)}
            {...props}
        />
    );
};

export default TextBox;
