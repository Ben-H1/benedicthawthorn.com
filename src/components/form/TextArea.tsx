import { cn } from '@util/css';
import { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
}

const TextArea = ({ className, ...props }: TextAreaProps) => {
    return (
        <div className={cn('border-black border rounded-md overflow-hidden flex flex-col', className)}>
            <textarea
                className='px-2 py-1 outline-none scrollbar cursor-auto overflow-auto resize-none align-top flex-1'
                {...props}
            />
        </div>
    );
};

export default TextArea;
