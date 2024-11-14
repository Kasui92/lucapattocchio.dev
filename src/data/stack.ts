import iconHTML from '@/assets/images/icons/technologies/html.svg'
import iconCSS from '@/assets/images/icons/technologies/css.svg'
import iconPHP from '@/assets/images/icons/technologies/php.svg'
import iconMySQL from '@/assets/images/icons/technologies/mysql.svg'
import iconJavascript from '@/assets/images/icons/technologies/javascript.svg'
import iconTypescript from '@/assets/images/icons/technologies/typescript.svg'
import iconNodejs from '@/assets/images/icons/technologies/nodejs.svg'
import iconReact from '@/assets/images/icons/technologies/react.svg'
import iconNextjs from '@/assets/images/icons/technologies/nextjs.svg'
import iconPostgresql from '@/assets/images/icons/technologies/postgresql.svg'
import iconBootstrap from '@/assets/images/icons/technologies/bootstrap.svg'
import iconTailwindcss from '@/assets/images/icons/technologies/tailwindcss.svg'
import iconGit from '@/assets/images/icons/technologies/git.svg'
import iconDocker from '@/assets/images/icons/technologies/docker.svg'
import iconBash from '@/assets/images/icons/technologies/bash.svg'

export interface StackEntry {
    label: string
    icon: string
}

/**
 * Skills
 */
const stack: Array<StackEntry> = [
    {
        label: 'HTML',
        icon: iconHTML,
    },
    {
        label: 'CSS',
        icon: iconCSS,
    },
    {
        label: 'PHP',
        icon: iconPHP,
    },
    {
        label: 'MySQL',
        icon: iconMySQL,
    },
    {
        label: 'Javascript',
        icon: iconJavascript,
    },
    {
        label: 'Typescript',
        icon: iconTypescript,
    },
    {
        label: 'Node.js',
        icon: iconNodejs,
    },
    {
        label: 'React',
        icon: iconReact,
    },
    {
        label: 'Next.js',
        icon: iconNextjs,
    },
    {
        label: 'PostgreSQL',
        icon: iconPostgresql,
    },
    {
        label: 'Bootstrap',
        icon: iconBootstrap,
    },
    {
        label: 'TailwindCSS',
        icon: iconTailwindcss,
    },
    {
        label: 'Git',
        icon: iconGit,
    },
    {
        label: 'Docker',
        icon: iconDocker,
    },
    {
        label: 'Bash',
        icon: iconBash,
    },
]

export default stack
