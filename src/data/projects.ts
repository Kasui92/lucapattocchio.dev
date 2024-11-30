import { StackEntry } from '@/data/stack'

export interface Project {
    title: string
    description: string
    image?: string
    url: string
    technologies: Array<StackEntry['label']>
    tags?: Array<ProjectTag['label']>
}

export interface ProjectTag {
    label: string
}

/**
 * Project tags
 */
export const projectsTags: Array<ProjectTag> = [
    {
        label: 'Open Source',
    },
    {
        label: 'Proprietary',
    },
]

/**
 * Projects
 */
const projects: Array<Project> = [
    {
        title: 'MonitorCRM',
        description: 'A CRM for monitoring and managing the activities of a company, with a focus on the sales department.',
        image: '/assets/logos/projects/fm.svg',
        url: 'https://monitorcrm.it/',
        technologies: ['PHP', 'MySQL', 'Javascript', 'CSS'],
        tags: ['Proprietary'],
    },
    {
        title: 'MonitorInCloud',
        description:
            'A powerful and flexible cloud-based CRM, with a focus on the sales department. It is the evolution of MonitorCRM.',
        image: '/assets/logos/projects/fm.svg',
        url: 'https://monitorincloud.it/',
        technologies: ['Next.js', 'Bootstrap', 'PHP', 'MySQL', 'Docker'],
        tags: ['Proprietary'],
    },
    {
        title: 'GDRCD',
        description: 'A PHP framework for creating "play by chat role-playing game" browser games.',
        image: '/assets/logos/projects/gdrcd.svg',
        url: 'https://github.com/GDRCD/GDRCD',
        technologies: ['PHP', 'MySQL', 'Javascript', 'CSS', 'Docker'],
        tags: ['Open Source'],
    },
    {
        title: 'Quria TS',
        description:
            'Quria is a TypeScript library which main purpose is to make it easier to interact with Destiny (1 & 2) API provided by Bungie, obtaining the required information through ready-to-use methods and full support for official types and enums.',
        image: '/assets/logos/projects/quria.svg',
        url: 'https://github.com/FraWolf/quria',
        technologies: ['Typescript'],
        tags: ['Open Source'],
    },
    {
        title: 'lucapattocchio.dev',
        description: 'My personal website.',
        image: '/assets/logos/projects/website.svg',
        url: 'https://lucapattocchio.dev/',
        technologies: ['React', 'Typescript', 'TailwindCSS'],
        tags: ['Open Source'],
    },
]

export default projects
