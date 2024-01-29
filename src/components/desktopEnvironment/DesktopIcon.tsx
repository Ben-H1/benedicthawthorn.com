import Icon from '@components/Icon';
import Text from '@components/Text';
import { cn } from '@util/css';
import { MouseEventHandler } from 'react';
import { Program } from './window/Window';

type DesktopIconProps = {
    program: Program;
    isActive: boolean;
    useSingleClick?: boolean;
    focusIcon: (id: string) => void;
    openProgram: (id: string) => void;
};

const DesktopIcon = ({ program, isActive, useSingleClick, focusIcon, openProgram }: DesktopIconProps) => {
    const clickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
        if (useSingleClick) {
            openProgram(program.id);
        } else {
            if (e.detail % 2 === 0) {
                openProgram(program.id);
            } else {
                focusIcon(program.id);
            }
        }
    };

    return (
        <div className='flex items-center justify-center w-24 h-24'>
            <div
                className='flex flex-col items-center justify-center select-none space-y-2'
                onClick={clickHandler}
            >
                <Icon icon={program.icon!} shadow />
                <Text.System className={cn('px-1 text-center', isActive && 'text-white bg-black')}>
                    {program.name}
                </Text.System>
            </div>
        </div>
    );
};

export default DesktopIcon;
