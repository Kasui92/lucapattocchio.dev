export interface Project {
    title: string
    description: string
    image: string
    url: string
    technologies: Array<string>
}

/**
 * Projects
 */
const projects: Array<Project> = [
    {
        title: 'GDRCD',
        description: 'A PHP framework for creating "play by chat role-playing game" browser games.',
        image: '/assets/logos/projects/gdrcd.svg',
        url: 'https://github.com/GDRCD/GDRCD',
        technologies: ['PHP', 'MySQL', 'Javascript', 'HTML', 'CSS', 'Docker'],
    },
    {
        title: 'Quria TS',
        description:
            'Quria is a TypeScript library which main purpose is to make it easier to interact with Destiny (1 & 2) API provided by Bungie, obtaining the required information through ready-to-use methods and full support for official types and enums.',
        image: '/assets/logos/projects/quria.svg',
        url: 'https://github.com/FraWolf/quria',
        technologies: ['Typescript'],
    },
]

export default projects
