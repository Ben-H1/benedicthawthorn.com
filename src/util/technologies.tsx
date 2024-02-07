type Technology = {
    name: string;
    link: string;
    iconPath?: string;
};

export const technologies: Record<string, Technology> = {
    react: {
        name: 'React',
        link: 'https://react.dev/',
        iconPath: 'images/technologies/react.png'
    },
    typeScript: {
        name: 'TypeScript',
        link: 'https://typescriptlang.org/',
        iconPath: 'images/technologies/typescript.png'
    },
    tailwindCss: {
        name: 'Tailwind CSS',
        link: 'https://tailwindcss.com/',
        iconPath: 'images/technologies/tailwind.png'
    },
    vite: {
        name: 'Vite',
        link: 'https://vitejs.dev/',
        iconPath: 'images/technologies/vite.png'
    },
    speedyWebCompiler: {
        name: 'Speedy Web Compiler',
        link: 'https://swc.rs/',
        iconPath: 'images/technologies/swc.png'
    }
};

export const packages: Record<string, Technology> = {
    reactRnd: {
        name: 'react-rnd',
        link: 'https://npmjs.com/package/react-rnd?activeTab=readme'
    },
    reactSoundplayer: {
        name: 'react-soundplayer',
        link: 'https://npmjs.com/package/react-soundplayer?activeTab=readme'
    },
    reactDeviceDetect: {
        name: 'react-device-detect',
        link: 'https://npmjs.com/package/react-device-detect?activeTab=readme'
    },
    fontAwesome: {
        name: 'Font Awesome',
        link: 'https://fontawesome.com/'
    },
    clsx: {
        name: 'clsx',
        link: 'https://npmjs.com/package/clsx?activeTab=readme'
    },
    tailwindMerge: {
        name: 'tailwind-merge',
        link: 'https://npmjs.com/package/tailwind-merge?activeTab=readme'
    },
    lodash: {
        name: 'lodash',
        link: 'https://lodash.com/'
    }
};

export const services: Record<string, Technology> = {
    gitHub: {
        name: 'GitHub',
        link: 'https://github.com/',
        iconPath: 'images/services/github.png'
    },
    vercel: {
        name: 'Vercel',
        link: 'https://vercel.com/',
        iconPath: 'images/services/vercel.png'
    }
};
