import { useState } from 'react';

const DesktopEnvironment = () => {
    const [activeIconId, setActiveIconId] = useState<string>('');
    const [activeProgramId, setActiveProgramId] = useState<string>('');
    const [openProgramIds, setOpenProgramIds] = useState<string[]>([]);

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
            <div className='bg-gray-200 flex-1'></div>
        </div>
    );
};

export default DesktopEnvironment;
