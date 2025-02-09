import { StackEntry } from './stack'

export interface Project {
    title: string
    description: string
    image?: string
    url: string
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
        title: 'MonitorInCloud',
        description: 'A powerful and flexible cloud-based CRM, with a focus on the sales department.',
        image: '/projects/monitorincloud.png',
        url: 'https://monitorincloud.it/',
        technologies: ['Next.js', 'Bootstrap', 'PHP', 'MySQL', 'Docker'],
    },
    {
        title: 'MonitorCRM',
        description: 'A CRM for monitoring and managing the activities of a company.',
        image: '/projects/monitorcrm.png',
        url: 'https://monitorcrm.it/',
        technologies: ['PHP', 'MySQL', 'Javascript', 'CSS'],
    },
    {
        title: 'GDRCD',
        description: 'A PHP framework for creating "play by chat role-playing game" browser games.',
        image: '/projects/gdrcd.png',
        url: 'https://lucapattocchio.altervista.org',
        viewSourceUrl: 'https://github.com/GDRCD/GDRCD',
        technologies: ['PHP', 'MySQL', 'Javascript', 'CSS', 'Docker'],
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
        title: 'Slice & Dice',
        description:
            'A small directory of game systems for aspiring play by chat admin. This is a porting of the original project built with WordPress, now with Next.js & MDX.',
        image: '/projects/slicendice.png',
        url: 'https://slicendice.vercel.app/',
        viewSourceUrl: 'https://github.com/slice-dice/website',
        technologies: ['Next.js', 'MDX', 'TailwindCSS', 'Typescript'],
    },
]

export default projects
