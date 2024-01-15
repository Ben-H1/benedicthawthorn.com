import { cn } from '@util/css';

type TextAreaProps = {
    className?: string;
};

const TextArea = ({ className }: TextAreaProps) => {
    return (
        <div className={cn('border-black border rounded-md overflow-hidden flex flex-col', className)}>
            <textarea
                className='px-2 py-1 outline-none scrollbar overflow-auto resize-none align-top flex-1'
            />
        </div>
    );
};

export default TextArea;
