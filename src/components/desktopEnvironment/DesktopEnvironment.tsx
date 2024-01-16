import UnderConstruction from '@components/programs/UnderConstruction';
import { useRef, useState } from 'react';
import DesktopIcon from './DesktopIcon';
import { ButtonSet } from './window/TitleBarButtons';
import Window, { Program } from './window/Window';
import ContactMe from '@components/programs/ContactMe';
import EmailMe from '@components/programs/EmailMe';
import Welcome from '@components/programs/Welcome';

const DesktopEnvironment = () => {
    const [activeIconId, setActiveIconId] = useState<string>('');
    const [activeProgramId, setActiveProgramId] = useState<string>('');
    const [openProgramIds, setOpenProgramIds] = useState<string[]>(['welcome']);
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

    const programs: Program[] = [
        {
            id: 'myProjects',
            name: 'My Projects',
            content: <UnderConstruction />,
            buttonSet: ButtonSet.CLOSE,
            icon: {
                icon: 'src/assets/images/tools.png',
                position: {
                    top: 20,
                    left: 20
                }
            },
            props: { enableResizing: false }
        },
        {
            id: 'myMusic',
            name: 'My Music',
            content: <UnderConstruction />,
            buttonSet: ButtonSet.CLOSE,
            icon: {
                icon: 'src/assets/images/cd-music.png',
                position: {
                    top: 116,
                    left: 20
                }
            },
            props: { enableResizing: false }
        },
        {
            id: 'aboutMe',
            name: 'About Me',
            content: <UnderConstruction />,
            buttonSet: ButtonSet.CLOSE,
            icon: {
                icon: 'src/assets/images/book-help.png',
                position: {
                    top: 212,
                    left: 20
                }
            },
            props: { enableResizing: false }
        },
        {
            id: 'contactMe',
            name: 'Contact Me',
            content: <ContactMe openProgram={openProgram} />,
            buttonSet: ButtonSet.CLOSE,
            icon: {
                icon: 'src/assets/images/email.png',
                position: {
                    top: 308,
                    left: 20
                }
            },
            props: { enableResizing: false }
        },
        {
            id: 'aboutWebsite',
            name: 'About Website',
            content: <UnderConstruction />,
            buttonSet: ButtonSet.CLOSE,
            icon: {
                icon: 'src/assets/images/internet.png',
                position: {
                    top: 404,
                    left: 20
                }
            },
            props: { enableResizing: false }
        },
        {
            id: 'emailMe',
            name: 'Email Me',
            content: <EmailMe />,
            buttonSet: ButtonSet.CLOSE,
            props: { minWidth: 266, minHeight: 484 }
        },
        {
            id: 'welcome',
            name: 'Welcome',
            content: <Welcome />,
            buttonSet: ButtonSet.CLOSE,
            props: {
                default: { width: 525, height: 362 },
                minWidth: 400, minHeight: 250,
                maxWidth: 800, maxHeight: 362
            }
        }
    ];

    const desktopRef = useRef(null);

    return (
        <div
            className='h-screen flex flex-col overflow-hidden relative font-chicago text-sm'
            onMouseDown={focusNone}
        >
            <div
                ref={desktopRef}
                className='bg-gray-300 flex-1 relative'
            >
                {programs.filter(p => !!p.icon).map((program) => (
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
                        desktopRef={desktopRef}
                    />
                ))}
            </div>
        </div>
    );
};

export default DesktopEnvironment;
