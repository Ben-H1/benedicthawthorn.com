import Icon from '@components/Icon';
import Text from '@components/Text';
import Link from '@components/text/Link';

const AboutWebsite = () => {
    const technologies = [
        { name: 'React', link: 'https://react.dev/', iconPath: 'images/technologies/react.png' },
        { name: 'TypeScript', link: 'https://typescriptlang.org/', iconPath: 'images/technologies/typescript.png' },
        { name: 'Tailwind CSS', link: 'https://tailwindcss.com/', iconPath: 'images/technologies/tailwind.png' },
        { name: 'Vite', link: 'https://vitejs.dev/', iconPath: 'images/technologies/vite.png' },
        { name: 'Speedy Web Compiler', link: 'https://swc.rs/', iconPath: 'images/technologies/swc.png' }
    ];

    const packages = [
        { name: 'react-rnd', link: 'https://npmjs.com/package/react-rnd?activeTab=readme' },
        { name: 'react-soundplayer', link: 'https://npmjs.com/package/react-soundplayer?activeTab=readme' },
        { name: 'react-device-detect', link: 'https://npmjs.com/package/react-device-detect?activeTab=readme' },
        { name: 'Font Awesome', link: 'https://fontawesome.com/' },
        { name: 'clsx', link: 'https://npmjs.com/package/clsx?activeTab=readme' },
        { name: 'tailwind-merge', link: 'https://npmjs.com/package/tailwind-merge?activeTab=readme' },
        { name: 'lodash', link: 'https://lodash.com/' }
    ];

    const services = [
        { name: 'GitHub', link: 'https://github.com/', iconPath: 'images/services/github.png', },
        { name: 'Vercel', link: 'https://vercel.com/', iconPath: 'images/services/vercel.png', }
    ];

    return (
        <div className='flex flex-col items-center space-y-2 text-center'>
            <Text.H1>Technologies</Text.H1>
            <Text.Body>This website was built using the following technologies:</Text.Body>
            {technologies.map((technology) => (
                <div className='flex space-x-2 items-center'>
                    <Icon icon={{ md: technology.iconPath }} />
                    <Text.Body><Link href={technology.link} openInNewTab>{technology.name}</Link></Text.Body>
                </div>
            ))}
            <hr className='w-full' />
            <Text.H1>Packages</Text.H1>
            <Text.Body>This website was built using the following packages:</Text.Body>
            <div className='flex flex-col w-full items-center'>
                {packages.map((pkg) => (
                    <Text.Body><Link href={pkg.link} openInNewTab>{pkg.name}</Link></Text.Body>
                ))}
            </div>
            <hr className='w-full' />
            <Text.H1>Services</Text.H1>
            <Text.Body>This website was built using the following services:</Text.Body>
            {services.map((service) => (
                <div className='flex space-x-2 items-center'>
                    <Icon icon={{ md: service.iconPath }} />
                    <Text.Body><Link href={service.link} openInNewTab>{service.name}</Link></Text.Body>
                </div>
            ))}
        </div>
    );
};

export default AboutWebsite;
