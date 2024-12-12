import iconGithub from '../assets/images/socials/github.svg'
import iconGitlab from '../assets/images/socials/gitlab.svg'
import iconLinkedin from '../assets/images/socials/linkedin.svg'
import iconBluesky from '../assets/images/socials/bluesky.svg'

export interface SocialEntry {
    label: string
    url: string
    icon: string
}

/**
 * Social links
 */
export const socials: Record<string, SocialEntry> = {
    github: {
        label: 'Github',
        url: 'https://github.com/Kasui92',
        icon: iconGithub,
    },
    gitlab: {
        label: 'Gitlab',
        url: 'https://gitlab.com/Kasui92',
        icon: iconGitlab,
    },
    linkedin: {
        label: 'Linkedin',
        url: 'https://www.linkedin.com/in/lucapattocchio/',
        icon: iconLinkedin,
    },
    bluesky: {
        label: 'Bluesky',
        url: 'https://bsky.app/profile/lucapattocchio.dev',
        icon: iconBluesky,
    },
}
