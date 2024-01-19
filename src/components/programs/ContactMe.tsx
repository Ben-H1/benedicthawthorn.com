import Text from '@components/Text';
import Link from '@components/text/Link';

type ContactMeProps = {
    openProgram: (id: string) => void;
};

const ContactMe = ({ openProgram }: ContactMeProps) => {
    return (
        <div className='flex flex-col h-full items-center justify-center space-y-2 p-6'>
            <Link href='https://github.com/Ben-H1' openInNewTab>
                <Text.Body>Follow me on GitHub!</Text.Body>
            </Link>
            <Link href='https://linkedin.com/in/benedicthawthorn/' openInNewTab>
                <Text.Body>Connect with me on LinkedIn!</Text.Body>
            </Link>
            <Link onClick={() => openProgram('emailMe')}>
                <Text.Body>Send me an email!</Text.Body>
            </Link>
        </div>
    );
};

export default ContactMe;
