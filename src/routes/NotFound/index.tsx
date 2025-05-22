import { ReactElement } from 'react'
import { Link } from 'react-router'

export const NotFound = (): ReactElement => (
    <div className="my-24 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-silver-900/90 text-4xl font-semibold">404</h1>
        <h2 className="text-silver-700/50 text-xl font-medium">Oops! Page not found.</h2>

        <p className="text-silver-700/70 text-center text-lg">
            Don't panic! The page you're looking for isn't here. <br />
            <span className="text-silver-700/70">You can go back to the </span>
            <Link to="/" className="underline-transition font-semibold text-green-700/90 after:bg-green-700/90">
                homepage
            </Link>
            .
        </p>
    </div>
)
