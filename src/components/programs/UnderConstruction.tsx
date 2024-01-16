import Icon from '@components/Icon';
import H2 from '@components/text/H2';

const UnderConstruction = () => {
    return (
        <div className='flex flex-col h-full items-center justify-center p-8 space-y-2'>
            <Icon path='images/under-construction.png' />
            <H2>Under Construction</H2>
        </div>
    );
};

export default UnderConstruction;
