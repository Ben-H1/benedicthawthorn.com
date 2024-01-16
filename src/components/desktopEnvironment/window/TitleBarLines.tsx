import { cn } from '@util/css';

type TitleBarLinesProps = {
    isActive: boolean;
};

const TitleBarLines = ({ isActive }: TitleBarLinesProps) => {
    return (
        <div className={cn('flex-grow flex items-center min-w-4', !isActive && 'invisible')}>
            <table className='w-full'>
                <tbody>
                    <tr><td className='border-b border-t border-collapse border-black h-1/2'></td></tr>
                    <tr><td className='border-b border-t border-collapse border-black h-1/2'></td></tr>
                    <tr><td className='border-b border-t border-collapse border-black h-1/2'></td></tr>
                    <tr><td className='border-b border-t border-collapse border-black h-1/2'></td></tr>
                </tbody>
            </table>
        </div>
    );
};

export default TitleBarLines;
