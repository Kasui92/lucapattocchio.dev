import { ReactElement } from 'react'
import { ExperienceCard } from '../../components/Cards'
import { DownloadResume } from '../../components/Buttons'

import { experiences } from '../../data/experiences'

export const About = (): ReactElement => {
    return (
        <div className="space-y-16">
            <section className="container flex flex-col items-center">
                <h3 className="w-full text-lg font-bold text-silver-900/90 underline decoration-green-500/50 decoration-4 underline-offset-[6px]">
                    About me
                </h3>
                <div className="mt-4">
                    <div className={`text-md space-y-4 text-justify leading-7 text-silver-700/70`}>
                        <p>
                            My curiosity about technology and the web was sparked in my childhood, back when I got my hands
                            on my first <span className={`font-semibold text-yellow-300/70`}>Game Boy</span>, and it’s been
                            burning ever since, fueled by a desire to uncover the{' '}
                            <span className={`italic text-purple-500/70`}>magic</span> behind it. During the rise of online
                            forums, I took my first steps into the world of programming, breaking and fixing elements I
                            barely understood. Fascinated by what this realm had to offer, I decided to dive deeper into a
                            path that would allow me to be part of it.
                        </p>
                        <p>
                            At twenty, I realized this passion could become something more. I consolidated what I had learned
                            and ventured into the working world, pursuing{' '}
                            <span className={`font-semibold text-cerulean`}>web development</span> professionally—no longer
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
                <h3 className="w-full text-lg font-bold text-silver-900/90 underline decoration-green-500/50 decoration-4 underline-offset-[6px]">
                    Experience
                </h3>
                <div className="mt-6 flex w-full flex-col items-center gap-6">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </div>
            </section>
        </div>
    )
}
