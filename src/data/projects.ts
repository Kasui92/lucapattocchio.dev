import { StackEntry } from './stack'

export interface Project {
    title: string
    description: string
    image?: string
    url?: string
    viewSourceUrl?: string
    technologies: Array<StackEntry['label']>
}

export interface ProjectTag {
    label: string
}

/**
 * Projects
 */
const projects: Array<Project> = [
    {
        title: 'omakasui',
        description: 'A curated collection of resources and tools for Linux enthusiasts.',
        image: '/projects/omakasui.jpg',
        url: 'https://omakasui.org',
        viewSourceUrl: 'https://github.com/Kasui92/omakasui.org.git',
        technologies: ['Astro', 'TailwindCSS', 'Typescript', ' Shell'],
    },
    {
        title: 'Slice & Dice',
        description:
            'A small directory of game systems for aspiring play by chat admin. This is a porting of the original project built with WordPress, now with Next.js & MDX.',
        image: '/projects/slicendice.png',
        url: 'https://slicendice.vercel.app/',
        viewSourceUrl: 'https://github.com/slice-dice/website',
        technologies: ['Next.js', 'MDX', 'TailwindCSS', 'Typescript'],
    },
    {
        title: 'lucapattocchio.dev',
        description: 'My personal website.',
        image: '/projects/portfolio.png',
        url: 'https://lucapattocchio.dev/',
        viewSourceUrl: 'https://github.com/Kasui92/lucapattocchio.dev',
        technologies: ['React', 'Typescript', 'TailwindCSS'],
    },
    {
        title: 'GDRCD',
        description: 'A PHP framework for creating "play by chat role-playing game" browser games.',
        image: '/projects/gdrcd.png',
        url: 'https://gdrcd.lucapattocchio.dev/',
        viewSourceUrl: 'https://github.com/GDRCD/GDRCD',
        technologies: ['PHP', 'MySQL', 'Javascript', 'CSS', 'Docker'],
    },
]

export default projects
