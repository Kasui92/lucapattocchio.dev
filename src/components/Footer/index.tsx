import { ReactElement } from 'react'
import Link from '@/components/Link'

/**
 * Footer
 * @constructor
 */
const Footer = (): ReactElement => {
    return (
        <footer className="bg-zinc-800">
            <div className="mx-auto max-w-4xl overflow-hidden px-4 py-4 text-sm sm:px-6 lg:px-8">
                <div className="text-center">&copy; 2023 - All rights reserved.</div>
                <div className="text-center">
                    Built with <span title={`very much love`}>❤️</span> by{' '}
                    <Link href={'https://lucapattocchio.dev'} className="font-bold" color={`violet-500`}>
                        Luca Pattocchio
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
