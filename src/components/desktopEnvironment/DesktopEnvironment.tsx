import UnderConstruction from '@components/programs/UnderConstruction';
import { useRef, useState } from 'react';
import DesktopIcon from './DesktopIcon';
import { ButtonSet } from './window/TitleBarButtons';
import Window, { Program } from './window/Window';
import ContactMe from '@components/programs/ContactMe';
import EmailMe from '@components/programs/EmailMe';
import Welcome from '@components/programs/Welcome';
import AboutWebsite from '@components/programs/AboutWebsite';
import Clock from '@components/programs/Clock';
import MyArtwork from '@components/programs/MyArtwork';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import AboutMe from '@components/programs/AboutMe';
import MyMusic from '@components/programs/MyMusic';
import Minesweeper from '@components/programs/Minesweeper';

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
            setOpenProgramIds(p => [...p, programId]);
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
        if (isMobile) {
            setOpenProgramIds([]);
        } else {
            setOpenProgramIds(p => p.filter(id => id !== programId));
        }
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
                md: 'images/icons/tools.png',
                sm: 'images/icons/tools-16.png'
            },
            props: { enableResizing: false }
        },
        {
            id: 'myMusic',
            name: 'My Music',
            content: <MyMusic />,
            buttonSet: ButtonSet.CLOSE,
            icon: {
                md: 'images/icons/cd-music.png',
                sm: 'images/icons/cd-music-16.png'
            },
            props: {
                minWidth: 400, minHeight: 138
            }
        },
        {
            id: 'myArtwork',
            name: 'My Artwork',
            content: <MyArtwork />,
            buttonSet: ButtonSet.CLOSE,
            icon: {
                md: 'images/icons/paint.png',
                sm: 'images/icons/paint-16.png'
            },
            props: {
                default: { width: 500, height: 500 },
                minWidth: 600, minHeight: 500
            }
        },
        {
            id: 'aboutMe',
            name: 'About Me',
            content: <AboutMe />,
            buttonSet: ButtonSet.CLOSE,
            icon: {
                md: 'images/icons/book-help.png',
                sm: 'images/icons/book-help-16.png'
            },
            props: {
                default: { width: 870, height: 800 },
                minWidth: 790
            }
        },
        {
            id: 'contactMe',
            name: 'Contact Me',
            content: <ContactMe openProgram={openProgram} />,
            buttonSet: ButtonSet.CLOSE,
            icon: {
                md: 'images/icons/email.png',
                sm: 'images/icons/email-16.png'
            },
            props: { enableResizing: false }
        },
        {
            id: 'aboutWebsite',
            name: 'About Website',
            content: <AboutWebsite />,
            buttonSet: ButtonSet.CLOSE,
            icon: {
                md: 'images/icons/internet.png',
                sm: 'images/icons/internet-16.png'
            },
            props: { minWidth: 495, minHeight: 250 }
        },
        {
            id: 'emailMe',
            name: 'Email Me',
            content: <EmailMe openProgram={openProgram} />,
            buttonSet: ButtonSet.CLOSE,
            showOnDesktop: false,
            props: { minWidth: 266, minHeight: 434 }
        },
        {
            id: 'welcome',
            name: 'Welcome',
            content: <Welcome />,
            buttonSet: ButtonSet.CLOSE,
            showOnDesktop: false,
            centerWithUseEffect: true,
            props: {
                default: { width: 525, height: 362 },
                minWidth: 400, minHeight: 250,
                maxWidth: 800, maxHeight: 362
            }
        }
    ];

    const programs2: Program[] = [
        {
            id: 'clock',
            name: 'Clock',
            content: <Clock />,
            buttonSet: ButtonSet.CLOSE,
            icon: {
                md: 'images/icons/clock.png',
                sm: 'images/icons/clock-16.png'
            },
            props: {
                default: { height: 106, width: 231 },
                enableResizing: false
            }
        },
        {
            id: 'minesweeper',
            name: 'Minesweeper',
            content: <Minesweeper />,
            buttonSet: ButtonSet.CLOSE,
            icon: {
                md: 'images/icons/minesweeper.png',
                sm: 'images/icons/minesweeper-16.png'
            },
            props: { enableResizing: false }
        }
    ];

    const allPrograms = [...programs, ...programs2];

    const lastActiveProgram = allPrograms.find(p => p.id === openProgramIds.slice(-1)[0]);

    const desktopRef = useRef(null);

    return (
        <>
            <BrowserView>
                <div
                    className='h-screen flex flex-col overflow-hidden relative'
                    onMouseDown={focusNone}
                >
                    <div
                        ref={desktopRef}
                        className='bg-gray-300 flex-1 relative'
                    >
                        <div className='absolute top-5 left-5 bottom-5 flex flex-col flex-wrap w-0'>
                            {programs.filter(p => !!p.icon && (p.showOnDesktop ?? true)).map((program) => (
                                <DesktopIcon
                                    key={`desktopIcon-${program.id}`}
                                    program={program}
                                    isActive={activeIconId === program.id}
                                    focusIcon={focusIcon}
                                    openProgram={openProgram}
                                />
                            ))}
                        </div>
                        <div className='absolute top-5 right-5 bottom-5 flex flex-col flex-wrap-reverse w-0'>
                            {programs2.filter(p => !!p.icon && (p.showOnDesktop ?? true)).map((program) => (
                                <DesktopIcon
                                    key={`desktopIcon-${program.id}`}
                                    program={program}
                                    isActive={activeIconId === program.id}
                                    focusIcon={focusIcon}
                                    openProgram={openProgram}
                                />
                            ))}
                        </div>
                        {Array.from(new Set(openProgramIds)).map((programId) => (
                            <Window
                                key={`window-${programId}`}
                                program={allPrograms.find(p => p.id === programId)!}
                                isActive={activeProgramId === programId}
                                focusProgram={focusProgram}
                                closeProgram={closeProgram}
                                desktopRef={desktopRef}
                            />
                        ))}
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className='h-[100dvh] w-screen fixed flex flex-col overflow-hidden bg-gray-300'>
                    <div
                        ref={desktopRef}
                        className='flex-1 relative m-2'
                    >
                        {lastActiveProgram && (
                            <Window
                                program={lastActiveProgram}
                                isActive
                                mobile
                                focusProgram={focusProgram}
                                closeProgram={closeProgram}
                                desktopRef={desktopRef}
                            />
                        )}
                    </div>
                    <div className='h-fit flex overflow-x-auto overflow-y-hidden px-2 space-x-2'>
                        {allPrograms.filter(p => !!p.icon && (p.showOnDesktop ?? true) && (p.showOnMobile ?? true)).map((program) => (
                            <DesktopIcon
                                key={`desktopIcon-${program.id}`}
                                program={program}
                                isActive={activeIconId === program.id}
                                useSingleClick
                                focusIcon={focusIcon}
                                openProgram={openProgram}
                            />
                        ))}
                    </div>
                </div>
            </MobileView>
        </>
    );
};

export default DesktopEnvironment;
