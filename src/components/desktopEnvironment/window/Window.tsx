import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ReactNode, useEffect, useState } from 'react';
import { Rnd } from 'react-rnd';
import TitleBar from './TitleBar';
import { ButtonFunctions, ButtonSet } from './TitleBarButtons';

type Icon = {
    icon: IconProp;
    position: {
        top?: number;
        left?: number;
        right?: number;
        bottom?: number;
    };
};

export type Program = {
    id: string;
    name: string;
    content: ReactNode;
    buttonSet: ButtonSet;
    icon: Icon;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props?: Record<string, any>;
};

type WindowProps = {
    program: Program;
    isActive: boolean;
    focusProgram: (id: string) => number;
    closeProgram: (id: string) => void;
};

const Window = ({ program, isActive, focusProgram, closeProgram }: WindowProps) => {
    const dragHandleClassName = 'dragHandle';
    const [zIndex, setZIndex] = useState(0);
    const [isMaximized, setIsMaximized] = useState(false);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const focus = (e?: any) => {
        e?.stopPropagation();

        const newZIndex = focusProgram(program.id);
        setZIndex(newZIndex);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(focus, []);

    const buttonFunctions: ButtonFunctions = {
        close: () => closeProgram(program.id),
        maximize: () => setIsMaximized(p => !p),
        minimize: () => console.log('minimize')
    };

    const windowProps = program.props ?? {};
    windowProps.minWidth = Math.max(150, windowProps.minWidth ?? 0);
    windowProps.minHeight = Math.max(42, windowProps.minHeight ?? 0);

    return (
        <Rnd
            dragHandleClassName={dragHandleClassName}
            bounds='parent'
            onMouseDown={focus}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onResizeStart={(e: any) => {
                focus(e);
                setIsMaximized(false);
            }}
            style={{ zIndex }}
            {...windowProps}
        >
            <div className='h-full w-full flex flex-col border-black border drop-shadow-window'>
                <TitleBar
                    name={program.name}
                    isActive={isActive}
                    isMaximized={isMaximized}
                    buttonSet={program.buttonSet}
                    buttonFunctions={buttonFunctions}
                    dragHandleClassName={dragHandleClassName}
                />
                <div className='bg-white flex-1 p-2 overflow-auto scrollbar'>{program.content}</div>
            </div>
        </Rnd>
    );
};

export default Window;
