import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ReactNode } from 'react';
import { Rnd } from 'react-rnd';
import TitleBar from './TitleBar';
import { ButtonFunctions, ButtonSet } from './TitleBarButtons';

type Icon = {
    icon: IconProp;
    position: {
        top: number;
        left: number;
    };
};

type Program = {
    id: string;
    name: string;
    content: ReactNode;
    buttonSet: ButtonSet;
    icon: Icon;
};

type WindowProps = {
    program: Program;
    isActive: boolean;
    focusProgram: (id: string) => void;
    closeProgram: (id: string) => void;
};

const Window = ({ program, isActive, focusProgram, closeProgram, ...props }: WindowProps) => {
    const dragHandleClassName = 'dragHandle';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const focus = (e?: any) => {
        e?.stopPropagation();
        focusProgram(program.id);
    };

    const buttonFunctions: ButtonFunctions = {
        close: () => closeProgram(program.id),
        maximize: () => console.log('maximize'),
        minimize: () => console.log('minimize')
    };

    return (
        <Rnd
            dragHandleClassName={dragHandleClassName}
            bounds='parent'
            onMouseDown={focus}
            onResizeStart={focus}
            {...props}
        >
            <div className='h-full w-full flex flex-col border-black border drop-shadow-window'>
                <TitleBar
                    name={program.name}
                    isActive={isActive}
                    buttonSet={program.buttonSet}
                    buttonFunctions={buttonFunctions}
                    dragHandleClassName={dragHandleClassName}
                />
                <div className='bg-white flex-1 p-2 overflow-auto'>{program.content}</div>
            </div>
        </Rnd>
    );
};

export default Window;
