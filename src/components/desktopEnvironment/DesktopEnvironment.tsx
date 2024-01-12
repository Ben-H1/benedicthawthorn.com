import { useState } from 'react';
import Window from './window/Window';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { ButtonSet } from './window/TitleBarButtons';
import DesktopIcon from './DesktopIcon';

const DesktopEnvironment = () => {
    const programs = [
        {
            id: 'test',
            name: 'Test Program',
            content: (<>hello</>),
            buttonSet: ButtonSet.CLOSE,
            icon: {
                icon: faInfoCircle,
                position: {
                    top: 10,
                    left: 10
                }
            }
        }
    ];

    const [activeIconId, setActiveIconId] = useState<string>('');
    const [activeProgramId, setActiveProgramId] = useState<string>('');
    const [openProgramIds, setOpenProgramIds] = useState<string[]>([]);
    const [highestZIndex, setHighestZIndex] = useState<number>(0);

    const focusIcon = (programId: string) => {
        setActiveIconId(programId);
        setActiveProgramId('');
    };

    const openProgram = (programId: string) => {
        setActiveIconId('');

        if (openProgramIds.includes(programId)) {
            focusProgram(programId);
        } else {
            setOpenProgramIds(p => [...p, programId]);
            focusProgram(programId);
        }
    };

    const focusProgram = (programId: string) => {
        setActiveIconId('');
        setActiveProgramId(programId);

        const newZIndex = highestZIndex + 1;
        setHighestZIndex(newZIndex);

        return newZIndex;
    };

    const closeProgram = (programId: string) => {
        setOpenProgramIds(p => p.filter(id => id !== programId));
    };

    const focusNone = () => {
        setActiveIconId('');
        setActiveProgramId('');
    };

    return (
        <div
            className='h-screen flex flex-col overflow-hidden relative font-chicago text-sm'
            onMouseDown={focusNone}
        >
            <div className='bg-gray-300 flex-1'>
                {programs.map((program) => (
                    <DesktopIcon
                        key={`desktopIcon-${program.id}`}
                        program={program}
                        isActive={activeIconId === program.id}
                        focusIcon={focusIcon}
                        openProgram={openProgram}
                    />
                ))}
                {openProgramIds.map((programId) => (
                    <Window
                        key={`window-${programId}`}
                        program={programs.find(p => p.id === programId)!}
                        isActive={activeProgramId === programId}
                        focusProgram={focusProgram}
                        closeProgram={closeProgram}
                    />
                ))}
            </div>
        </div>
    );
};

export default DesktopEnvironment;
