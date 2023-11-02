export interface SocialEntry {
    label: string
    url: string
}

/**
 * Social links
 */
const social: Record<string, SocialEntry> = {
    github: {
        label: 'Github',
        url: 'https://github.com/Kasui92',
    },
    linkedin: {
        label: 'Linkedin',
        url: 'https://www.linkedin.com/in/lucapattocchio/',
    },
    twitter: {
        label: 'Twitter',
        url: 'https://twitter.com/Kasui92',
    },
}

export default social
