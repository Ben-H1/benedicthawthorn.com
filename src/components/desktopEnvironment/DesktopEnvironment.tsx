import { useState } from 'react';
import Window from './window/Window';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { ButtonSet } from './window/TitleBarButtons';

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
                    top: 50,
                    left: 50
                }
            }
        }
    ];

    const [activeIconId, setActiveIconId] = useState<string>('');
    const [activeProgramId, setActiveProgramId] = useState<string>('');
    const [openProgramIds, setOpenProgramIds] = useState<string[]>(['test']);

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
