import _ from 'lodash';
import { ReactNode, RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Rnd } from 'react-rnd';
import TitleBar from './TitleBar';
import { ButtonFunctions, ButtonSet } from './TitleBarButtons';

export type Icon = {
    md: string;
    sm?: string;
};

export type Program = {
    id: string;
    name: string;
    content: ReactNode;
    buttonSet: ButtonSet;
    icon?: Icon;
    showOnDesktop?: boolean;
    showOnMobile?: boolean;
    centerWithUseEffect?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props?: Record<string, any>;
};

type WindowProps = {
    program: Program;
    isActive: boolean;
    focusProgram: (id: string) => number;
    closeProgram: (id: string) => void;
    desktopRef: RefObject<HTMLDivElement>;
    mobile?: boolean;
};

const Window = ({ program, isActive, focusProgram, closeProgram, desktopRef, mobile }: WindowProps) => {
    const dragHandleClassName = 'dragHandle';
    const [zIndex, setZIndex] = useState(0);
    const [isMaximized, setIsMaximized] = useState(false);
    const [position, setPosition] = useState<{ x: number, y: number }>();

    const rndRef = useRef<Rnd>(null);
    const windowRef = useRef<HTMLDivElement>(null);

    const centerWindow = () => {
        if (
            !_.has(program, 'props.position') &&
            !_.has(program, 'props.default.x') &&
            !_.has(program, 'props.default.y')
        ) {
            const desktopWidth = desktopRef.current?.clientWidth;
            const desktopHeight = desktopRef.current?.clientHeight;

            const windowWidth = windowRef.current?.clientWidth;
            const windowHeight = windowRef.current?.clientHeight;

            if (
                desktopWidth !== undefined &&
                desktopHeight !== undefined &&
                windowWidth !== undefined &&
                windowHeight !== undefined
            ) {
                let x = Math.floor(desktopWidth / 2 - windowWidth / 2);
                let y = Math.floor(desktopHeight / 2 - windowHeight / 2);

                x = Math.max(0, x);
                y = Math.max(0, y);

                rndRef.current?.updatePosition({ x, y });
                setPosition({ x, y });
            }
        }
    };

    useEffect(() => {
        if (program.centerWithUseEffect) {
            centerWindow();
        }

        if (desktopRef.current && windowRef.current && rndRef.current) {
            if (windowRef.current.clientHeight > desktopRef.current.clientHeight) {
                rndRef.current.updateSize({ width: windowRef.current.clientWidth, height: desktopRef.current.clientHeight });
            }

            if (windowRef.current.clientWidth > desktopRef.current.clientWidth) {
                rndRef.current.updateSize({ width: desktopRef.current.clientWidth, height: windowRef.current.clientHeight });
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useLayoutEffect(() => {
        if (!program.centerWithUseEffect) {
            centerWindow();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const focus = (e?: any, updateZIndex = true) => {
        e?.stopPropagation();

        if (updateZIndex) {
            const newZIndex = focusProgram(program.id);
            setZIndex(newZIndex);
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(focus, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => focus(undefined, isActive), [isActive]);

    const buttonFunctions: ButtonFunctions = {
        close: () => closeProgram(program.id),
        maximize: () => {
            const nextValue = !isMaximized;

            if (!nextValue) {
                rndRef.current?.updatePosition(position!);
            }

            setIsMaximized(nextValue);
        },
        minimize: () => console.log('minimize')
    };

    const windowProps = program.props ?? {};
    windowProps.minWidth = Math.max(150, windowProps.minWidth ?? 0);
    windowProps.minHeight = Math.max(58, windowProps.minHeight ?? 0);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const maximizedProps: any = {};
    if (mobile || isMaximized) {
        maximizedProps.size = { width: '100%', height: '100%' };
        maximizedProps.position = { x: 0, y: 0 };

        delete windowProps.minWidth;
        delete windowProps.minHeight;

        delete windowProps.maxWidth;
        delete windowProps.maxHeight;
    }

    return (
        <Rnd
            dragHandleClassName={dragHandleClassName}
            bounds='parent'
            ref={rndRef}
            onMouseDown={focus}
            onResizeStart={focus}
            onResizeStop={(...[,,,, d]) => setPosition({ x: d.x, y: d.y })}
            onDragStop={(_, d) => setPosition({ x: d.x, y: d.y })}
            enableResizing={!(mobile || isMaximized)}
            disableDragging={_.has(program, 'props.position') || mobile || isMaximized}
            style={{ zIndex }}
            {...maximizedProps}
            {...windowProps}
        >
            <div
                ref={windowRef}
                className='h-full w-full flex flex-col border-black border drop-shadow-window'
            >
                <TitleBar
                    name={program.name}
                    icon={program.icon}
                    isActive={isActive}
                    isMaximized={mobile || isMaximized}
                    buttonSet={mobile ? ButtonSet.CLOSE : program.buttonSet}
                    buttonFunctions={buttonFunctions}
                    dragHandleClassName={dragHandleClassName}
                />
                <div className='bg-white flex-1 p-4 overflow-auto scrollbar'>{program.content}</div>
            </div>
        </Rnd>
    );
};

export default Window;
