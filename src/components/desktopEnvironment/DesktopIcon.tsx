import { MouseEventHandler } from 'react';
import { Program } from './window/Window';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@util/css';
import Icon from '@components/Icon';

type DesktopIconProps = {
    program: Program;
    isActive: boolean;
    focusIcon: (id: string) => void;
    openProgram: (id: string) => void;
};

const DesktopIcon = ({ program, isActive, focusIcon, openProgram }: DesktopIconProps) => {
    const clickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
        if (e.detail % 2 === 0) {
            openProgram(program.id);
        } else {
            focusIcon(program.id);
        }
    };

    return (
        <div className='flex items-center justify-center w-24 h-24'>
            <div
                className='flex flex-col items-center justify-center select-none space-y-2'
                onClick={clickHandler}
            >
                {(typeof program.icon!.icon === 'string') ? (
                    <Icon path={program.icon!.icon} />
                ) : (
                    <FontAwesomeIcon icon={program.icon!.icon} size='2xl' />
                )}
                <div className={cn('px-1 text-center', isActive && 'text-white bg-black')}>
                    {program.name}
                </div>
            </div>
        </div>
    );
};

export default DesktopIcon;
