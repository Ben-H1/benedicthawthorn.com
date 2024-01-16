import Body from '@components/text/Body';
import H1 from '@components/text/H1';

const Welcome = () => {
    return (
        <div className='flex flex-col space-y-2 items-center text-center'>
            <H1>Welcome!</H1>
            <Body>Hi there, welcome to my website!</Body>
            <Body>Here, you can find information about my software projects, music, work experience, and more.</Body>
            <Body>To navigate around the site, you can treat it like a normal desktop environment. Feel free to double-click on a desktop icon to open a program, drag windows around, and explore!</Body>
            <Body>For the best experience, please use a Chromium-based browser.</Body>
        </div>
    );
};

export default Welcome;
