import DesktopEnvironment from '@components/desktopEnvironment/DesktopEnvironment';

const App = () => {
    return (
        <>
            <div className='absolute text-transparent select-none pointer-events-none'>
                <p className='font-chicago'>.</p>
                <p className='font-appleGaramond'>.</p>
            </div>
            <DesktopEnvironment />
        </>
    );
};

export default App;
