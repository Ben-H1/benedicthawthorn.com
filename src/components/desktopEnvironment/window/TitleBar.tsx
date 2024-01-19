import { cn } from '@util/css';
import TitleBarLines from './TitleBarLines';
import TitleBarButtons, { ButtonFunctions, ButtonSet } from './TitleBarButtons';
import Text from '@components/Text';

type TitleBarProps = {
    name: string;
    isActive: boolean;
    isMaximized: boolean;
    buttonSet: ButtonSet;
    buttonFunctions: ButtonFunctions;
    dragHandleClassName: string;
};

const TitleBar = ({ name, isActive, isMaximized, buttonSet, buttonFunctions, dragHandleClassName }: TitleBarProps) => {
    return (
        <div className='bg-white h-6 shrink-0 flex items-center px-2 space-x-2 border-b-black border-b'>
            <div className={cn('flex truncate flex-1 select-none space-x-2', dragHandleClassName)}>
                <TitleBarLines isActive={isActive} />
                <Text.System className='truncate'>{name}</Text.System>
                <TitleBarLines isActive={isActive} />
            </div>
            <TitleBarButtons isMaximized={isMaximized} buttonSet={buttonSet} buttonFunctions={buttonFunctions} />
        </div>
    );
};

export default TitleBar;
