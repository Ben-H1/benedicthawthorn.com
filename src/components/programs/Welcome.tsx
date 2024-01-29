import Text from '@components/Text';

const Welcome = () => {
    return (
        <div className='flex flex-col space-y-2 items-center text-center'>
            <Text.H1>Welcome!</Text.H1>
            <Text.Body>Hi there, welcome to my website!</Text.Body>
            <Text.Body>Here, you can find information about my software projects, music, work experience, and more.</Text.Body>
            <Text.Body>To navigate around the site, you can treat it like a normal desktop environment. Feel free to double-click on a desktop icon to open a program, drag windows around, and explore!</Text.Body>
            <Text.Body>For the best experience, please use a Chromium-based browser.</Text.Body>
        </div>
    );
};

export default Welcome;
