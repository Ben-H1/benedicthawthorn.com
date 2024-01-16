import H2 from '@components/text/H2';

const UnderConstruction = () => {
    return (
        <div className='flex flex-col h-full items-center justify-center p-8 space-y-2'>
            <img
                src='images/under-construction.png'
                className='h-8 w-8'
            />
            <H2>Under Construction</H2>
        </div>
    );
};

export default UnderConstruction;
