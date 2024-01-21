import Icon from '@components/Icon';
import Text from '@components/Text';
import Link from '@components/text/Link';

const AboutWebsite = () => {
    return (
        <div className='flex flex-col items-center space-y-2 text-center'>
            <Text.H1>Technologies</Text.H1>
            <Text.Body>This website was built using the following technologies:</Text.Body>
            <div className='flex space-x-2 items-center'>
                <Icon icon={{ md: 'images/typescript.png' }} />
                <Text.Body><Link href='https://typescriptlang.org/' openInNewTab>TypeScript</Link></Text.Body>
            </div>
            <div className='flex space-x-2 items-center'>
                <Icon icon={{ md: 'images/react.png' }} />
                <Text.Body><Link href='https://react.dev/' openInNewTab>React</Link></Text.Body>
            </div>
            <div className='flex space-x-2 items-center'>
                <Icon icon={{ md: 'images/tailwind.png' }} />
                <Text.Body><Link href='https://tailwindcss.com/' openInNewTab>Tailwind CSS</Link></Text.Body>
            </div>
            <div className='flex space-x-2 items-center'>
                <Icon icon={{ md: 'images/vite.png' }} />
                <Text.Body><Link href='https://vitejs.dev/' openInNewTab>Vite</Link></Text.Body>
            </div>
            <div className='flex space-x-2 items-center'>
                <Icon icon={{ md: 'images/swc.png' }} />
                <Text.Body><Link href='https://swc.rs/' openInNewTab>Speedy Web Compiler</Link></Text.Body>
            </div>
            <hr className='w-full' />
            <Text.H1>Packages</Text.H1>
            <Text.Body>This website was built using the following packages:</Text.Body>
            <div className='flex flex-col w-full items-center'>
                <Text.Body><Link href='https://npmjs.com/package/react-rnd?activeTab=readme' openInNewTab>react-rnd</Link></Text.Body>
                <Text.Body><Link href='https://fontawesome.com/' openInNewTab>Font Awesome</Link></Text.Body>
                <Text.Body><Link href='https://lodash.com/' openInNewTab>lodash</Link></Text.Body>
                <Text.Body><Link href='https://npmjs.com/package/react-soundplayer?activeTab=readme' openInNewTab>react-soundplayer</Link></Text.Body>
                <Text.Body><Link href='https://npmjs.com/package/clsx?activeTab=readme' openInNewTab>clsx</Link></Text.Body>
                <Text.Body><Link href='https://npmjs.com/package/tailwind-merge?activeTab=readme' openInNewTab>tailwind-merge</Link></Text.Body>
            </div>
            <hr className='w-full' />
            <Text.H1>Services</Text.H1>
            <Text.Body>This website was built using the following services:</Text.Body>
            <div className='flex space-x-2 items-center'>
                <Icon icon={{ md: 'images/github.png' }} />
                <Text.Body><Link href='https://github.com/' openInNewTab>GitHub</Link></Text.Body>
            </div>
            <div className='flex space-x-2 items-center'>
                <Icon icon={{ md: 'images/vercel.png' }} />
                <Text.Body><Link href='https://vercel.com/' openInNewTab>Vercel</Link></Text.Body>
            </div>
        </div>
    );
};

export default AboutWebsite;
