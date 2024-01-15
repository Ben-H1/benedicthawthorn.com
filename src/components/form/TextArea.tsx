import { cn } from '@util/css';

type TextAreaProps = {
    className?: string;
};

const TextArea = ({ className }: TextAreaProps) => {
    return (
        <div className='border-black border rounded-md overflow-hidden'>
            <textarea
                className={cn('px-2 py-1 outline-none scrollbar overflow-auto resize-none align-top', className)}
            />
        </div>
    );
};

export default TextArea;
