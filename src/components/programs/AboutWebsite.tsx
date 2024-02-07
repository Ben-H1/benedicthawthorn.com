import Icon from '@components/Icon';
import Text from '@components/Text';
import Link from '@components/text/Link';
import { technologies, packages, services } from '@util/technologies';

const AboutWebsite = () => {
    const techs = [
        technologies.react,
        technologies.typeScript,
        technologies.tailwindCss,
        technologies.vite,
        technologies.speedyWebCompiler
    ];

    const pkgs = [
        packages.reactRnd,
        packages.reactSoundplayer,
        packages.reactDeviceDetect,
        packages.fontAwesome,
        packages.clsx,
        packages.tailwindMerge,
        packages.lodash
    ];

    const svcs = [
        services.gitHub,
        services.vercel
    ];

    return (
        <div className='flex flex-col items-center space-y-2 text-center'>
            <Text.H1>Technologies</Text.H1>
            <Text.Body>This website was built using the following technologies:</Text.Body>
            {techs.map((tech) => (
                <div className='flex space-x-2 items-center'>
                    {tech.iconPath && <Icon icon={{ md: tech.iconPath }} />}
                    <Text.Body><Link href={tech.link} openInNewTab>{tech.name}</Link></Text.Body>
                </div>
            ))}
            <hr className='w-full' />
            <Text.H1>Packages</Text.H1>
            <Text.Body>This website was built using the following packages:</Text.Body>
            <div className='flex flex-col w-full items-center'>
                {pkgs.map((pkg) => (
                    <Text.Body><Link href={pkg.link} openInNewTab>{pkg.name}</Link></Text.Body>
                ))}
            </div>
            <hr className='w-full' />
            <Text.H1>Services</Text.H1>
            <Text.Body>This website was built using the following services:</Text.Body>
            {svcs.map((svc) => (
                <div className='flex space-x-2 items-center'>
                    {svc.iconPath && <Icon icon={{ md: svc.iconPath }} />}
                    <Text.Body><Link href={svc.link} openInNewTab>{svc.name}</Link></Text.Body>
                </div>
            ))}
        </div>
    );
};

export default AboutWebsite;
