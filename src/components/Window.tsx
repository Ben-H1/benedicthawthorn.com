import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ReactNode } from 'react';
import { Rnd } from 'react-rnd';

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
    icon: Icon;
};

type WindowProps = {
    program: Program;
};

const Window = ({ program, ...props }: WindowProps) => {
    return (
        <Rnd>
            <div></div>
        </Rnd>
    );
};

export default Window;
