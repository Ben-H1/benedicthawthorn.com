import Text from '@components/Text';
import Link from '@components/text/Link';

type IFrameTemplateProps = {
    src: string;
};

const IFrameTemplate = ({ src }: IFrameTemplateProps) => {
    return (
        <div className='w-full flex flex-col min-h-full'>
            <iframe className='w-full flex-1' src={src} />
            <div className='mt-4 flex justify-end'>
                <Text.Body><Link href={src} openInNewTab>Open in new tab</Link></Text.Body>
            </div>
        </div>
    );
};

export default IFrameTemplate;
