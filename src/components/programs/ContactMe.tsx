import Body from '@components/text/Body';
import Link from '@components/text/Link';

type ContactMeProps = {
    openProgram: (id: string) => void;
};

const ContactMe = ({ openProgram }: ContactMeProps) => {
    return (
        <div className='flex flex-col h-full items-center justify-center space-y-2 p-6'>
            <Link link='https://github.com/Ben-H1' openInNewTab>
                <Body>Follow me on GitHub!</Body>
            </Link>
            <Link link='https://linkedin.com/in/benedicthawthorn/' openInNewTab>
                <Body>Connect with me on LinkedIn!</Body>
            </Link>
            <Link onClick={() => openProgram('emailMe')}>
                <Body>Send me an email!</Body>
            </Link>
        </div>
    );
};

export default ContactMe;
