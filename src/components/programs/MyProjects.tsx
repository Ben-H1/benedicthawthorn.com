import Icon from '@components/Icon';
import Text from '@components/Text';
import Link from '@components/text/Link';
import { technologies } from '@util/technologies';
import { isMobile } from 'react-device-detect';

const projects = [
    {
        name: 'Personal Website',
        description: 'My personal website, containing information about my projects, music, artwork, and work experience, plus some other fun features.',
        technologies: [
            technologies.react,
            technologies.typeScript,
            technologies.tailwindCss,
            technologies.vite,
            technologies.speedyWebCompiler
        ],
        screenshot: 'images/projects/personalWebsite.png',
        gitHubLink: 'https://github.com/Ben-H1/benedicthawthorn.com'
    },
    {
        name: 'Advent of Code',
        description: 'All of my Advent of Code submissions for each year since 2022.',
        technologies: [
            technologies.react,
            technologies.typeScript,
            technologies.tailwindCss,
            technologies.vite,
            technologies.speedyWebCompiler
        ],
        screenshot: 'images/projects/adventOfCode.png',
        gitHubLink: 'https://github.com/Ben-H1/Advent-of-Code'
    },
    {
        name: 'Interactive Genetic Algorithms',
        description: 'A website allowing you to play about with genetic algorithms.',
        technologies: [
            technologies.html,
            technologies.javaScript,
            technologies.sass
        ],
        screenshot: 'images/projects/interactiveGeneticAlgorithms.png',
        gitHubLink: 'https://github.com/Ben-H1/Interactive-Genetic-Algorithms',
        link: 'https://interactive-genetic-algorithms.netlify.app/'
    }
];

const MyProjectsDesktop = () => {
    return (
        <div className='flex flex-col space-y-4'>
            {projects.map((project, i) => (
                <>
                    <div className='flex space-x-4'>
                        <img
                            src={project.screenshot}
                            className='w-36 h-36'
                        />
                        <div className='flex-1 flex flex-col'>
                            <div>
                                <Text.H1>{project.name}</Text.H1>
                                <Text.Body>{project.description}</Text.Body>
                            </div>
                            <div className='flex mt-2 items-center flex-1 justify-between space-x-4'>
                                <div className='h-full flex space-x-2 items-end'>
                                    {project.technologies.map((technology) => (
                                        <>
                                            {technology.iconPath && <Icon icon={{ md: technology.iconPath }} />}
                                        </>
                                    ))}
                                </div>
                                <div className='h-full flex items-end'>
                                    <Text.Body className='space-x-4 text-right'>
                                        {project.gitHubLink && (
                                            <Link href={project.gitHubLink} openInNewTab>GitHub Repo</Link>
                                        )}
                                        {project.link && (
                                            <Link href={project.link} openInNewTab>View Project</Link>
                                        )}
                                    </Text.Body>
                                </div>
                            </div>
                        </div>
                    </div>
                    {i < projects.length - 1 && <hr />}
                </>
            ))}
            <hr />
            <div className='flex justify-center'>
                <Text.Body><Link href='https://github.com/Ben-H1' openInNewTab>More on GitHub</Link></Text.Body>
            </div>
        </div>
    );
};

const MyProjectsMobile = () => {
    return (
        <div className='flex flex-col space-y-4'>
            {projects.map((project, i) => (
                <>
                    <div className='flex flex-col space-y-4'>
                        <div className='flex flex-col items-center text-center'>
                            <img
                                src={project.screenshot}
                                className='w-36 h-36 mb-2'
                            />
                            <Text.H1 className='mb-2'>{project.name}</Text.H1>
                            <Text.Body>{project.description}</Text.Body>
                        </div>
                        <div className='flex space-x-2 justify-center flex-wrap'>
                            {project.technologies.map((technology) => (
                                <>
                                    {technology.iconPath && <Icon icon={{ md: technology.iconPath }} />}
                                </>
                            ))}
                        </div>
                        <div className='flex flex-col items-center space-y-2'>
                            {project.gitHubLink && (
                                <Text.Body><Link href={project.gitHubLink} openInNewTab>GitHub Repo</Link></Text.Body>
                            )}
                            {project.link && (
                                <Text.Body><Link href={project.link} openInNewTab>View Project</Link></Text.Body>
                            )}
                        </div>
                    </div>
                    {i < projects.length - 1 && <hr />}
                </>
            ))}
            <hr />
            <div className='flex justify-center'>
                <Text.Body><Link href='https://github.com/Ben-H1' openInNewTab>More on GitHub</Link></Text.Body>
            </div>
        </div>
    );
};

const MyProjects = () => {
    if (isMobile) {
        return (
            <MyProjectsMobile />
        );
    }

    return (
        <MyProjectsDesktop />
    );
};

export default MyProjects;
