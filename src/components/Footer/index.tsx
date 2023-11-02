import { ReactElement } from 'react'

import social, { SocialEntry } from '@/config/social'

/**
 * Footer
 * @constructor
 */
const Footer = (): ReactElement => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800">
            <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
                <div className="mt-8 flex justify-center space-x-6">
                    {Object.values(social).map((entry: SocialEntry) => (
                        <a key={entry.label} href={entry.url}>
                            <span className="sr-only text-gray-800 dark:text-teal-500">{entry.label}</span>
                            LOL
                        </a>
                    ))}
                </div>
                <div className="mt-8 text-center text-base">&copy; 2023 - All rights reserved.</div>
                <div className="text-center text-base">
                    Built with \u2764 by{' '}
                    <a href={'https://lucapattocchio.dev'} className="font-bold text-violet-500">
                        Luca Pattocchio
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
