import Icon from '@components/Icon';
import Text from '@components/Text';

const UnderConstruction = () => {
    return (
        <div className='flex flex-col h-full items-center justify-center p-8 space-y-2'>
            <Icon icon={{ md: 'images/icons/under-construction.png' }} />
            <Text.H2>Under Construction</Text.H2>
        </div>
    );
};

export default UnderConstruction;
