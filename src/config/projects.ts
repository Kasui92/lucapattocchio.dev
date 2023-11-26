import { StackEntry } from '@/config/stack'

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
    color: string
}

/**
 * Project tags
 */
export const projectsTags: Array<ProjectTag> = [
    {
        label: 'Open Source',
        color: '#22c55e',
    },
    {
        label: 'Closed Source',
        color: '#ef4444',
    },
    {
        label: 'Work in Progress',
        color: '#eab308',
    },
]
// Force TailwindCSS to generate the colors
const projectsTagsColors: string =
    'ring-[#22c55e] ring-[#ef4444] ring-[#eab308] text-[#22c55e] text-[#ef4444] text-[#eab308]'

/**
 * Projects
 */
const projects: Array<Project> = [
    {
        title: 'MonitorCRM',
        description: 'A CRM for monitoring and managing the activities of a company, with a focus on the sales department.',
        url: 'https://monitorcrm.it/',
        technologies: ['PHP', 'MySQL', 'Javascript', 'CSS'],
        tags: ['Closed Source'],
    },
    {
        title: 'MonitorInCloud',
        description:
            'A powerful and flexible cloud-based CRM, with a focus on the sales department. It is the evolution of MonitorCRM.',
        url: '',
        technologies: ['Next.js', 'Bootstrap', 'PHP', 'MySQL', 'Docker'],
        tags: ['Closed Source', 'Work in Progress'],
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
        url: 'https://lucapattocchio.dev/',
        technologies: ['React', 'Typescript', 'TailwindCSS'],
        tags: ['Open Source'],
    },
]

export default projects
