import iconGithub from '@/assets/images/icons/socials/github.svg'
import iconGitlab from '@/assets/images/icons/socials/gitlab.svg'
import iconLinkedin from '@/assets/images/icons/socials/linkedin.svg'
import iconBluesky from '@/assets/images/icons/socials/bluesky.svg'

export interface SocialEntry {
    label: string
    url: string
    icon: string
}

/**
 * Social links
 */
const social: Record<string, SocialEntry> = {
    linkedin: {
        label: 'Linkedin',
        url: 'https://www.linkedin.com/in/lucapattocchio/',
        icon: iconLinkedin,
    },
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
    bluesky: {
        label: 'Bluesky',
        url: 'https://bsky.app/profile/lucapattocchio.dev',
        icon: iconBluesky,
    },
}

export default social
