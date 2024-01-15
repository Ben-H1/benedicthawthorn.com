import { cn } from '@util/css';

type TextBoxProps = {
    className?: string;
};

const TextBox = ({ className }: TextBoxProps) => {
    return (
        <input
            type='text'
            className={cn('border-black border px-2 py-1 rounded-md outline-none', className)}
        />
    );
};

export default TextBox;
