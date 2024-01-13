import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ReactNode, useState } from 'react';
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const focus = (e?: any) => {
        e?.stopPropagation();

        const newZIndex = focusProgram(program.id);
        setZIndex(newZIndex);
    };

    const buttonFunctions: ButtonFunctions = {
        close: () => closeProgram(program.id),
        maximize: () => console.log('maximize'),
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
            onResizeStart={focus}
            style={{ zIndex }}
            {...windowProps}
        >
            <div className='h-full w-full flex flex-col border-black border drop-shadow-window'>
                <TitleBar
                    name={program.name}
                    isActive={isActive}
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