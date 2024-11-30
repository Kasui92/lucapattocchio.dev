import { ReactElement } from 'react'
import TechnologyTag from '@/components/TechnologyTag'

import stack from '@/data/stack'

/**
 * About
 * @constructor
 */
const About = (): ReactElement => {
    return (
        <section className={`relative py-32`} id={`About`}>
            <div className={`mx-auto max-w-6xl px-8`}>
                <h2 className={`mb-20 text-center text-4xl font-semibold uppercase tracking-wider xl:text-7xl`}>
                    <span className={`border-b-4 border-violet-500`}>About Me</span>
                </h2>
                <div className={`flex flex-col gap-24 xl:flex-row`}>
                    <div className={`order-2 mx-auto w-5/6 grow md:w-4/6 xl:w-1/2`}>
                        <div className={`flex flex-col gap-6 text-center leading-7 md:text-left`}>
                            <p>
                                My curiosity about technology and the web sparked in my childhood, back when I got my hands
                                on my first <span className={`font-bold text-yellow-300`}>Game Boy</span>, and it&apos;s been
                                burning ever since, fueled by the desire to uncover the{' '}
                                <span className={`italic text-amber-500`}>magic</span> behind them. During the boom of online
                                forums I took my first steps into the world of programming, breaking and fixing elements that
                                I barely understood. I was fascinated by what this realm had to offer, so I decided to dive
                                deeper into a path that would let me be a part of it.
                            </p>
                            <p>
                                When I hit twenty, I realized that this passion could be so much more: I decided to
                                consolidate what I had learned until then, to venture into the working world and take on{` `}
                                <span className={`font-bold text-blue-500`}>web development</span>
                                {` `}in a professional way, no longer as a self-taught tinkerer. I believe that collaborating
                                with people is a crucial forge for crafting innovative approaches and self-improvement, both
                                in my skills and in myself.{' '}
                                <i>I&apos;m always up for any new adventure that comes my way.</i>
                            </p>
                            <p>
                                I love getting lost on trails and going on{' '}
                                <span className={`text-slate-500`}>long walks</span>, especially when surrounded by nature,
                                and I always keep a backpack for them. In my free time, I enjoy playing board games and
                                role-playing games...{' '}
                                <span className={`italic line-through`}>but mostly, I accumulate side projects</span>.
                            </p>
                        </div>
                        <div className={`mt-20 md:mt-6`}>
                            <h3 className={`mb-2 mb-3 text-2xl font-semibold tracking-wide`}>Tech Stack</h3>
                            {stack.map((technology, index) => (
                                <TechnologyTag icon={technology.icon} label={technology.label} key={index} />
                            ))}
                        </div>
                    </div>
                    <div className={`order-1 grow`}>
                        <img
                            className={`mx-auto aspect-square h-[350px] w-[350px] rotate-3 rounded-2xl object-cover shadow xl:hidden`}
                            src={`/assets/aboutme.jpg`}
                            alt={`Luca Pattocchio`}
                        />
                        <img
                            className={`hidden aspect-square h-[520px] w-[390px] rotate-3 rounded-2xl object-cover shadow xl:block`}
                            src={`/assets/aboutme-xl.jpg`}
                            alt={`Luca Pattocchio`}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
