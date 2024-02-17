import Text from '@components/Text';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@util/css';
import { forwardRef, useState } from 'react';
import { Popover } from 'react-tiny-popover';

type BarOption = {
    name: string;
    options?: BarOption[];
    onClick?: () => void;
};

type BarButtonProps = {
    option?: BarOption;
    right?: boolean;
};

const BarButton = forwardRef<HTMLDivElement, BarButtonProps>(({ option, right }: BarButtonProps, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Popover
            isOpen={isOpen}
            onClickOutside={() => setIsOpen(false)}
            positions={[right ? 'right' : 'bottom']}
            align='start'
            containerStyle={{ zIndex: '9999999999' }}
            content={option?.options ? (
                <div
                    className={cn(
                        'bg-white border border-black drop-shadow-window',
                        !right && '-ml-[1px]',
                        right && '-mt-[1px]'
                    )}
                >
                    {option?.options.map((option) => (
                        <BarButton option={option} right />
                    ))}
                </div>
            ) : <></>}
        >
            <div
                ref={ref}
                onClick={() => {
                    if (!option?.options && option?.onClick) {
                        option.onClick();
                    } else if (option?.options) {
                        setIsOpen(p => !p)
                    }
                }}
                className={cn(
                    'px-2 py-1 select-none flex items-center space-x-2',
                    !isOpen && 'hover:bg-gray-300',
                    isOpen && 'bg-gray-400'
                )}
            >
                <Text.System>{option!.name}</Text.System>
                {right && option?.options && (
                    <FontAwesomeIcon icon={faCaretRight} />
                )}
            </div>
        </Popover>
    );
});

type MenuBarProps = {
    options: BarOption[]
};

const MenuBar = ({ options }: MenuBarProps) => {
    return (
        <div className='border-b border-black -mt-4 -ml-4 -mr-4 mb-4 flex'>
            {options.map((option) => (
                <BarButton option={option} />
            ))}
        </div>
    );
};

export default MenuBar;
