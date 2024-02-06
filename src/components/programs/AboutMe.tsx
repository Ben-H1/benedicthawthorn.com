import Text from '@components/Text';
import Link from '@components/text/Link';
import { cn } from '@util/css';
import { isMobile } from 'react-device-detect';

const photoPath = 'images/headshot.png';

const name = 'Benedict Hawthorn';

const title = 'Software Engineer';

const description = 'Hi, I\'m Ben! I\'m a software engineer with experience using React, TypeScript and AWS to deliver innovative solutions. I\'m a strong, pro-active, and flexible team player with experience leading implementation of new features, giving presentations, and mentoring others.';

const programmingExperience = [
    { name: 'React', link: 'https://react.dev/'  },
    { name: 'TypeScript', link: 'https://typescriptlang.org/'  },
    { name: 'JavaScript', link: 'https://javascript.com/'  },
    { name: 'Tailwind CSS', link: 'https://tailwindcss.com/'  },
    { name: 'Amazon Web Services', link: 'https://aws.amazon.com/'  },
    { name: 'Microsoft Azure', link: 'https://azure.microsoft.com/'  },
    { name: 'Azure DevOps', link: 'https://azure.microsoft.com/products/devops'  },
    { name: 'REST APIs', link: 'https://wikipedia.org/wiki/REST'  },
    { name: 'Jest', link: 'https://jestjs.io/'  },
    { name: 'Storybook', link: 'https://storybook.js.org/'  },
    { name: 'Cypress', link: 'https://cypress.io/'  },
    { name: 'Unit Testing', link: 'https://wikipedia.org/wiki/Unit_testing'  },
    { name: 'Component Testing', link: 'https://browserstack.com/guide/what-is-component-testing'  },
    { name: 'End-to-End Testing', link: 'https://browserstack.com/guide/end-to-end-testing'  },
    { name: 'Git', link: 'https://git-scm.com/'  },
    { name: 'GitHub', link: 'https://github.com/'  },
    { name: 'JSON', link: 'https://json.org/'  },
    { name: 'Visual Studio Code', link: 'https://code.visualstudio.com/'  },
    { name: 'AWS DynamoDB', link: 'https://aws.amazon.com/dynamodb/'  },
    { name: 'AWS CloudWatch', link: 'https://aws.amazon.com/cloudwatch/'  },
    { name: 'Azure CosmosDB', link: 'https://azure.microsoft.com/products/cosmos-db'  },
    { name: 'C#', link: 'https://wikipedia.org/wiki/C_Sharp_(programming_language)'  },
    { name: 'Java', link: 'https://java.com/'  },
    { name: 'Postman', link: 'https://postman.com/'  },
    { name: 'Agile', link: 'https://wikipedia.org/wiki/Agile_software_development'  },
    { name: 'Jira', link: 'https://atlassian.com/software/jira'  },
    { name: 'Confluence', link: 'https://atlassian.com/software/confluence'  },
    { name: 'Slack', link: 'https://slack.com/' }
];

const workExperience = [
    {
        title: 'Junior Software Engineer',
        company: 'SquaredUp',
        timespan: 'September 2022 - January 2024',
        technologies: 'React, TypeScript, Tailwind CSS, AWS, Azure, Jest, Storybook',
        description: 'Development, integration, and maintenance of application features for a SaaS cloud data visualisation web application, working in a small team and an Agile environment with Jira and Azure DevOps.'
    },
    {
        title: 'Intern Software Engineer',
        company: 'SquaredUp',
        timespan: 'September 2021 - September 2022',
        technologies: 'JavaScript, AWS Serverless, REST APIs',
        description: 'Development, integration, and maintenance of data integration plugins for a SaaS cloud data visualisation web application, working in a small team and an Agile environment with Jira and Azure DevOps.'
    },
    {
        title: 'Software Developer',
        company: 'Psytech Ltd',
        timespan: 'June 2017',
        technologies: 'C#, Unity 3D'
    }
];

const education = [
    {
        title: 'Computer Science BSc',
        school: 'University of Kent',
        timespan: 'September 2018 - June 2021',
        description: 'Java, Functional Programming, Quantum Computing, Chrome Extensions, Genetic Algorithms, Databases, Operating Systems'
    },
    {
        title: 'A-Levels',
        school: 'Langley Park School for Boys',
        timespan: 'September 2016 - June 2018',
        description: 'Computer Science (A), Mathematics (B), English Language (B)'
    }
];

const interests = [
    'Programming',
    'Video Games',
    'Music',
    'Film',
    'Hiking',
    'Drawing',
    'Bouldering',
    'Rock Climbing',
    'Travel',
    'Japan',
    'Japanese Language',
    'Anime',
    'Manga'
];

const AboutMeDesktop = () => {
    return (
        <div className='w-full flex flex-col space-y-2'>
            <section className='h-full flex space-x-4'>
                <img
                    src={photoPath}
                    className='h-48'
                />
                <div className='h-full'>
                    <Text.H1>{name}</Text.H1>
                    <Text.H2 className='mb-2'>{title}</Text.H2>
                    <Text.Body>{description}</Text.Body>
                </div>
            </section>
            <hr />
            <section className='text-center -mx-2'>
                <Text.H1 className='mb-2'>Technical Experience</Text.H1>
                    <Text.Body>
                        {programmingExperience.map((experience) => (
                            <Link className='mx-2' href={experience.link}>{experience.name}</Link>
                        ))}
                    </Text.Body>
            </section>
            <hr />
            <section className='text-center space-y-2'>
                <Text.H1>Work Experience</Text.H1>
                {workExperience.map((experience) => (
                    <section className='text-left'>
                        <div className='flex items-center justify-between space-x-4'>
                            <Text.H2 className='text-left'>{experience.title} <Text.H3 className='inline'>at {experience.company}</Text.H3></Text.H2>
                            <Text.Body className='text-right'>{experience.timespan}</Text.Body>
                        </div>
                        <Text.H3 className={cn(experience.description && 'mb-2')}>{experience.technologies}</Text.H3>
                        {experience.description && <Text.Body>{experience.description}</Text.Body>}
                    </section>
                ))}
            </section>
            <hr />
            <section className='text-center space-y-2'>
                <Text.H1>Education</Text.H1>
                {education.map((experience) => (
                    <section className='text-left'>
                        <div className='flex items-center justify-between mb-2'>
                            <Text.H2 className='text-left'>{experience.title} <Text.H3 className='inline'>at {experience.school}</Text.H3></Text.H2>
                            <Text.Body className='text-right'>{experience.timespan}</Text.Body>
                        </div>
                        <Text.Body>{experience.description}</Text.Body>
                    </section>
                ))}
            </section>
            <hr />
            <section className='text-center -mx-2'>
                <Text.H1 className='mb-2'>Interests</Text.H1>
                <Text.Body>
                    {interests.map((interest) => (
                        <Text.Body className='mx-2 inline-flex'>{interest}</Text.Body>
                    ))}
                </Text.Body>
            </section>
        </div>
    );
};

const AboutMeMobile = () => {
    return (
        <div className='w-full flex flex-col space-y-2'>
            <section className='flex flex-col items-center text-center'>
                <img
                    src={photoPath}
                    className='h-48 mb-4'
                />
                <Text.H1>{name}</Text.H1>
                <Text.H2 className='mb-2'>{title}</Text.H2>
                <Text.Body>{description}</Text.Body>
            </section>
            <hr />
            <section className='text-center -mx-2'>
                <Text.H1 className='mb-2'>Technical Experience</Text.H1>
                <Text.Body>
                    {programmingExperience.map((experience) => (
                        <Link className='mx-2' href={experience.link}>{experience.name}</Link>
                    ))}
                </Text.Body>
            </section>
            <hr />
            <section className='text-center space-y-2'>
                <Text.H1>Work Experience</Text.H1>
                {workExperience.map((experience) => (
                    <section className='text-left'>
                        <Text.H2>{experience.title}</Text.H2>
                        <Text.H3>at {experience.company}</Text.H3>
                        <Text.Body>{experience.timespan}</Text.Body>
                        <Text.H3 className={cn(experience.description && 'mb-2')}>{experience.technologies}</Text.H3>
                        {experience.description && <Text.Body>{experience.description}</Text.Body>}
                    </section>
                ))}
            </section>
            <hr />
            <section className='text-center space-y-2'>
                <Text.H1>Education</Text.H1>
                {education.map((experience) => (
                    <section className='text-left'>
                        <Text.H2>{experience.title}</Text.H2>
                        <Text.H3>at {experience.school}</Text.H3>
                        <Text.Body className='mb-2'>{experience.timespan}</Text.Body>
                        <Text.Body>{experience.description}</Text.Body>
                    </section>
                ))}
            </section>
            <hr />
            <section className='text-center -mx-2'>
                <Text.H1 className='mb-2'>Interests</Text.H1>
                <Text.Body>
                    {interests.map((interest) => (
                        <Text.Body className='mx-2 inline-flex'>{interest}</Text.Body>
                    ))}
                </Text.Body>
            </section>
        </div>
    );
};

const AboutMe = () => {
    if (isMobile) {
        return (
            <AboutMeMobile />
        );
    }

    return (
        <AboutMeDesktop />
    );
};

export default AboutMe;
