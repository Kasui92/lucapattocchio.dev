import { IconDownload } from '@tabler/icons-react'
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
            <IconDownload className="h-4 w-4 group-hover:animate-bounce" />
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
            className="group flex items-center gap-x-1 text-cerulean-600 transition duration-300 hover:text-cerulean-800"
            title="Download Resume"
        >
            <span className="border-b border-dashed border-transparent font-medium transition-all group-hover:border-cerulean-800">
                Resume
            </span>
            <IconDownload className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:animate-bounce" />
        </a>
    )
}
