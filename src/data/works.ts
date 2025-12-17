export interface Work {
    title: string
    description: string
    image?: string
    url?: string
}

export interface WorkTag {
    label: string
}

/**
 * Works
 */
const works: Array<Work> = [
    {
        title: 'lancher',
        description: 'A minimal, local project-template manager written in Go.',
        image: '/projects/lancher.png',
        url: 'https://lancher.dev',
    },
    {
        title: 'omakube',
        description: 'A fork of Omakub, more flexible and refined.',
        image: '/projects/omakube.png',
        url: 'https://omakube.omakasui.org',
    },
    {
        title: 'giornogaming.it',
        description: 'GiornoGaming’s website, home of an Italian video game streamer and content creator.',
        image: '/projects/giornogaming.jpg',
        url: 'https://giornogaming.it',
    },
    {
        title: 'omakasui.org',
        description: 'A curated collection of resources and tools for Linux enthusiasts.',
        image: '/projects/omakasui.jpg',
        url: 'https://omakasui.org',
    },
    {
        title: 'slicendice.it',
        description:
            'A small directory of game systems for aspiring play by chat admin. This is a porting of the original project built with WordPress, now with Next.js & MDX.',
        image: '/projects/slicendice.png',
        url: 'https://slicendice.it/',
    },
    {
        title: 'lucapattocchio.dev',
        description: 'My personal website.',
        image: '/projects/portfolio.png',
        url: 'https://lucapattocchio.dev/',
    },
    {
        title: 'GDRCD',
        description: 'A PHP framework for creating "play by chat role-playing game" browser games.',
        image: '/projects/gdrcd.png',
        url: 'https://gdrcd.lucapattocchio.dev/',
    },
]

export default works
