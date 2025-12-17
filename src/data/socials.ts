import { IconBrandGithub, IconBrandGitlab, IconBrandLinkedin, IconBrandBluesky, Icon } from '@tabler/icons-react'

export interface SocialEntry {
    label: string
    url: string
    icon: Icon
}

/**
 * Social links
 */
export const socials: Record<string, SocialEntry> = {
    github: {
        label: 'Github',
        url: 'https://github.com/Kasui92',
        icon: IconBrandGithub,
    },
    gitlab: {
        label: 'Gitlab',
        url: 'https://gitlab.com/Kasui92',
        icon: IconBrandGitlab,
    },
    linkedin: {
        label: 'Linkedin',
        url: 'https://www.linkedin.com/in/lucapattocchio/',
        icon: IconBrandLinkedin,
    },
    bluesky: {
        label: 'Bluesky',
        url: 'https://bsky.app/profile/lucapattocchio.dev',
        icon: IconBrandBluesky,
    },
}
