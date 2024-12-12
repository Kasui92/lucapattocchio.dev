import { ReactElement } from 'react'
import { Link } from 'react-router'

export const NotFound = (): ReactElement => (
    <div className="my-24 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-semibold text-silver-900/90">404</h1>
        <h2 className="text-xl font-medium text-silver-700/50">Oops! Page not found.</h2>

        <p className="text-center text-lg text-silver-700/70">
            Don't panic! The page you're looking for isn't here. <br />
            <span className="text-silver-700/70">You can go back to the </span>
            <Link to="/" className="underline-transition font-semibold text-green-700/90 after:bg-green-700/90">
                homepage
            </Link>
            .
        </p>
    </div>
)
