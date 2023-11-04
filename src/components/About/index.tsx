import { ReactElement } from 'react'

/**
 * About
 * @constructor
 */
const About = (): ReactElement => {
    return (
        <section className={`relative py-32`}>
            <div className={`mx-auto w-[80%] xl:w-7/12`}>
                <h2 className={`mb-20 text-center text-4xl font-semibold uppercase tracking-wider xl:text-5xl`}>About Me</h2>
                <div className={`flex flex-col gap-32 xl:flex-row`}>
                    <div className={`flex grow flex-col gap-6 leading-7 xl:w-1/2`}>
                        <p>
                            I&apos;m big fan of everything involving technology and the web, huge geek, free time nerd and{' '}
                            <span className={`font-bold text-amber-700`}>Full Stack Developer</span>.
                        </p>
                        <p>
                            My passion for programming and the web has been going on ever since the boom of online forums and
                            led me to be involved in <span className={`font-bold text-violet-500`}>building websites</span>{' '}
                            that could satisfy more complex needs. When I could turn my passion into a job I decided to focus
                            on the creation and maintenance of <u>company-oriented CRMs</u>, taking care of their planning
                            and development
                            <br />
                            ... without losing sight of the rest of the &quot;<i>magic</i>&quot; that this world has to
                            offer.
                        </p>
                    </div>
                    <div className={`grow xl:w-1/2`}>LOL</div>
                </div>
            </div>
        </section>
    )
}

export default About
