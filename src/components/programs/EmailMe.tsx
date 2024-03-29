import Text from '@components/Text';
import Button from '@components/form/Button';
import TextArea from '@components/form/TextArea';
import TextBox from '@components/form/TextBox';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, useState } from 'react';
import { MobileView } from 'react-device-detect';

type EmailMeProps = {
    openProgram: (id: string) => void;
};

const EmailMe = ({ openProgram }: EmailMeProps) => {
    const emailAddress = 'benedicthawthorn@gmail.com';

    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className='w-full flex flex-col space-y-2 min-h-full'>
            <MobileView>
                <Button
                    onClick={() => openProgram('contactMe')}
                    className='flex items-center space-x-1 w-fit mb-2'
                >
                    <FontAwesomeIcon icon={faCaretLeft} />
                    <p>Back</p>
                </Button>
            </MobileView>
            <div className='flex justify-center'>
                <Button
                    onClick={() => navigator.clipboard.writeText(emailAddress)}
                    tempChildren='Copied!'
                >
                    Copy my email address
                </Button>
            </div>
            <div className='flex items-center'>
                <hr className='flex-1'/>
                <Text.Body className='mx-2'>or</Text.Body>
                <hr className='flex-1'/>
            </div>
            <div className='flex justify-center'>
                <Button onClick={() => location.href = `mailto:${emailAddress}`}>
                    Open your email application
                </Button>
            </div>
            <div className='flex items-center'>
                <hr className='flex-1'/>
                <Text.Body className='mx-2'>or</Text.Body>
                <hr className='flex-1'/>
            </div>
            <div className='flex flex-col space-y-2 flex-1'>
                <div>
                    <Text.Body>Subject:</Text.Body>
                    <TextBox
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)}
                        className='w-full'
                    />
                </div>
                <div className='flex-1 flex flex-col'>
                    <Text.Body>Message:</Text.Body>
                    <TextArea
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                        className='w-full flex-1 min-h-24'
                    />
                </div>
                <div className='flex justify-center'>
                    <Button onClick={() => location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}>
                        Send email
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default EmailMe;
