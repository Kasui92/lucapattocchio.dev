import iconGithub from '@/assets/images/icons/socials/github.svg'
import iconLinkedin from '@/assets/images/icons/socials/linkedin.svg'

export interface SocialEntry {
    label: string
    url: string
    icon: string
}

/**
 * Social links
 */
const social: Record<string, SocialEntry> = {
    github: {
        label: 'Github',
        url: 'https://github.com/Kasui92',
        icon: iconGithub,
    },
    linkedin: {
        label: 'Linkedin',
        url: 'https://www.linkedin.com/in/lucapattocchio/',
        icon: iconLinkedin,
    },
}

export default social
