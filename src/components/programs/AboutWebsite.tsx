import Icon from '@components/Icon';
import Body from '@components/text/Body';
import H1 from '@components/text/H1';
import Link from '@components/text/Link';

const AboutWebsite = () => {
    return (
        <div className='flex flex-col items-center space-y-2 text-center'>
            <H1>Technologies</H1>
            <Body>This website was built using the following technologies:</Body>
            <div className='flex space-x-2 items-center'>
                <Icon path='images/typescript.png' />
                <Body><Link link='https://typescriptlang.org/' openInNewTab>TypeScript</Link></Body>
            </div>
            <div className='flex space-x-2 items-center'>
                <Icon path='images/react.png' />
                <Body><Link link='https://react.dev/' openInNewTab>React</Link></Body>
            </div>
            <div className='flex space-x-2 items-center'>
                <Icon path='images/tailwind.png' />
                <Body><Link link='https://tailwindcss.com/' openInNewTab>Tailwind CSS</Link></Body>
            </div>
            <div className='flex space-x-2 items-center'>
                <Icon path='images/vite.png' />
                <Body><Link link='https://vitejs.dev/' openInNewTab>Vite</Link></Body>
            </div>
            <div className='flex space-x-2 items-center'>
                <Icon path='images/swc.png' />
                <Body><Link link='https://swc.rs/' openInNewTab>Speedy Web Compiler</Link></Body>
            </div>
            <hr className='w-full' />
            <H1>Packages</H1>
            <Body>This website was built using the following packages:</Body>
            <div className='flex flex-col w-full items-center'>
                <Body><Link link='https://npmjs.com/package/react-rnd' openInNewTab>react-rnd</Link></Body>
                <Body><Link link='https://fontawesome.com/' openInNewTab>Font Awesome</Link></Body>
                <Body><Link link='https://npmjs.com/package/clsx' openInNewTab>clsx</Link></Body>
                <Body><Link link='https://npmjs.com/package/tailwind-merge' openInNewTab>tailwind-merge</Link></Body>
            </div>
            <hr className='w-full' />
            <H1>Services</H1>
            <Body>This website was built using the following services:</Body>
            <div className='flex space-x-2 items-center'>
                <Icon path='images/github.png' />
                <Body><Link link='https://github.com/' openInNewTab>GitHub</Link></Body>
            </div>
            <div className='flex space-x-2 items-center'>
                <Icon path='images/vercel.png' />
                <Body><Link link='https://vercel.com/' openInNewTab>Vercel</Link></Body>
            </div>
        </div>
    );
};

export default AboutWebsite;
