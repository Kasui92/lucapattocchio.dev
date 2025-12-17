import { ReactElement } from 'react'
import { ExperienceTimeline } from '@/components/Timeline'

import { experiences } from '@/data/experiences'

export const About = (): ReactElement => {
    return (
        <div className="space-y-16">
            <section className="container flex flex-col items-center">
                <h3 className="text-silver-900/90 w-full text-lg font-bold underline decoration-green-500/50 decoration-4 underline-offset-[6px]">
                    About Me
                </h3>
                <div className="mt-4">
                    <div className={`text-md text-silver-700/70 space-y-4 text-justify leading-7`}>
                        <p>
                            My curiosity about technology and the web was sparked in my childhood, back when I got my hands
                            on my first <span className={`font-semibold text-yellow-300/70`}>Game Boy</span>, and it’s been
                            burning ever since, fueled by a desire to uncover the{' '}
                            <span className={`text-purple-500/70 italic`}>magic</span> behind it. During the rise of online
                            forums, I took my first steps into the world of programming, breaking and fixing elements I
                            barely understood. Fascinated by what this realm had to offer, I decided to dive deeper into a
                            path that would allow me to be part of it.
                        </p>
                        <p>
                            At twenty, I realized this passion could become something more. I consolidated what I had learned
                            and ventured into the working world, pursuing{' '}
                            <span className={`text-cerulean font-semibold`}>web development</span> professionally—no longer
                            just as a self-taught tinkerer. I believe collaboration is a powerful forge for crafting
                            innovative solutions and self-improvement, both in my skills and personal growth.{' '}
                            <i>I'm always ready for new adventures.</i>
                        </p>
                        <p>
                            I love getting lost on trails and going for <span className={`text-green`}>long walks</span>,
                            especially when surrounded by nature, with a backpack always at the ready. In my free time, I
                            enjoy playing board games and role-playing games—
                            <span className={`italic line-through`}>but mostly, I end up accumulating side projects</span>.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container flex flex-col items-center">
                <h3 className="text-silver-900/90 w-full text-lg font-bold underline decoration-green-500/50 decoration-4 underline-offset-[6px]">
                    Experience
                </h3>
                <div className="mt-6 w-full">
                    {experiences.map((experience, index) => (
                        <ExperienceTimeline key={index} experience={experience} isLast={index === experiences.length - 1} />
                    ))}
                </div>
            </section>
        </div>
    )
}
