import Button from '@components/form/Button';
import TextArea from '@components/form/TextArea';
import TextBox from '@components/form/TextBox';
import Body from '@components/text/Body';

const EmailMe = () => {
    const emailAddress = 'benedicthawthorn@gmail.com';

    return (
        <div className='w-full flex flex-col space-y-2 min-h-full'>
            <div className='flex justify-center'>
                <Button onClick={() => navigator.clipboard.writeText(emailAddress)}>
                    Copy my email address
                </Button>
            </div>
            <div className='flex items-center'>
                <hr className='flex-1'/>
                <div className='mx-2'>or</div>
                <hr className='flex-1'/>
            </div>
            <div className='flex justify-center'>
                <Button onClick={() => location.href = `mailto:${emailAddress}`}>
                    Open your email application
                </Button>
            </div>
            <div className='flex items-center'>
                <hr className='flex-1'/>
                <div className='mx-2'>or</div>
                <hr className='flex-1'/>
            </div>
            <form
                action={`mailto:${emailAddress}`}
                method='post'
                className='flex flex-col space-y-2 flex-1'
            >
                <div>
                    <Body>Name:</Body>
                    <TextBox className='w-full' name='name' />
                </div>
                <div>
                    <Body>Email:</Body>
                    <TextBox className='w-full' name='mail' />
                </div>
                <div className='flex-1 flex flex-col'>
                    <Body>Message:</Body>
                    <TextArea className='w-full flex-1 min-h-24' name='comment' />
                </div>
                <div className='flex justify-center'>
                    <Button type='submit'>Send email</Button>
                </div>
            </form>
        </div>
    );
};

export default EmailMe;
