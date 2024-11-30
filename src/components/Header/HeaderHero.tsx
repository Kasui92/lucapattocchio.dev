import { ReactElement } from 'react'
import { ProfilePic } from '../ProfilePic'

/**
 * Hero
 */
export const HeaderHero = (): ReactElement => {
    return (
        <div className="space-y-6">
            <div className="flex items-center space-x-6">
                <ProfilePic />

                <div className="mt-2">
                    <h1 className="text-3xl font-semibold leading-none text-silver-900/90">Luca Pattocchio</h1>
                    <h2 className="mt-2 items-center space-y-2 text-lg font-medium leading-none text-silver-700/50 lg:mt-0 lg:flex lg:space-x-2 lg:space-y-0">
                        <div className="space-x-2 whitespace-nowrap">
                            <span>Full Stack Developer @</span>
                            <a
                                href={`https://altuofianco.it`}
                                className="underline-transition font-bold text-altuofianco after:bg-altuofianco"
                                title={`Go to Altuofianco website`}
                            >
                                Altuofianco
                            </a>
                        </div>
                    </h2>
                </div>
            </div>

            <div className="flex items-center space-x-2">
                <span className="text-md text-silver-700/50">
                    I turn gibberish into web apps, outsmart stubborn terminals, but can’t fix a washing machine—despite what
                    my grandma thinks.
                </span>
            </div>
        </div>
    )
}
