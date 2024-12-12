import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { ReactElement } from 'react'

export const DownloadResume = (): ReactElement => {
    return (
        <a
            href="/CV-LucaPattocchio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-x-2 rounded-lg bg-cerulean px-4 py-2 text-white transition duration-300 hover:bg-cerulean-700/90"
            title="Download Resume"
        >
            <ArrowDownTrayIcon className="h-4 w-4 group-hover:animate-bounce" />
            Download Resume
        </a>
    )
}

export const DownloadResumeInline = (): ReactElement => {
    return (
        <a
            href="/CV-LucaPattocchio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-silver-700/90 transition duration-300 hover:text-cerulean-700/90"
            title="Download Resume"
        >
            Resume
        </a>
    )
}
