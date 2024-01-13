import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons';
import { faWindowMinimize, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MouseEventHandler } from 'react';

enum ButtonType {
    'CLOSE' = 'close',
    'MAXIMIZE' = 'maximize',
    'MINIMIZE' = 'minimize'
}

export enum ButtonSet {
    'CLOSE' = 'close',
    'MINCLOSE' = 'minClose',
    'MINMAXCLOSE' = 'minMaxClose'
}

type TitleBarButtonProps = {
    icon: IconProp;
    onClick: MouseEventHandler;
};

const TitleBarButton = ({ icon, onClick }: TitleBarButtonProps) => {
    return (
        <div
            className='h-4 w-4 p-px border-black border flex items-center justify-center active:bg-gray-300'
            onClick={onClick}
        >
            <FontAwesomeIcon icon={icon} className='h-full w-full' />
        </div>
    );
};

export type ButtonFunctions = Record<ButtonType, () => void>;

const buttonIcons = {
    [ButtonType.CLOSE]: faXmark,
    [ButtonType.MAXIMIZE]: faWindowMaximize,
    [ButtonType.MINIMIZE]: faWindowMinimize
};

const getButtonTypes = (buttonSet: ButtonSet) => ({
    [ButtonSet.CLOSE]: [
        ButtonType.CLOSE
    ],
    [ButtonSet.MINCLOSE]: [
        ButtonType.MINIMIZE,
        ButtonType.CLOSE
    ],
    [ButtonSet.MINMAXCLOSE]: [
        ButtonType.MINIMIZE,
        ButtonType.MAXIMIZE,
        ButtonType.CLOSE
    ]
})[buttonSet];

type TitleBarButtonsProps = {
    buttonSet: ButtonSet;
    buttonFunctions: ButtonFunctions;
};

const TitleBarButtons = ({ buttonSet, buttonFunctions }: TitleBarButtonsProps) => {
    const buttonTypes = getButtonTypes(buttonSet);

    return (
        <div className='flex space-x-1'>
            {buttonTypes.map((buttonType) => (
                <TitleBarButton
                    key={`titleBarButton-${buttonType}`}
                    icon={buttonIcons[buttonType]}
                    onClick={buttonFunctions[buttonType]}
                />
            ))}
        </div>
    );
};

export default TitleBarButtons;
