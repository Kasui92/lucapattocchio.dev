import { ReactElement } from 'react'

/**
 * About
 * @constructor
 */
const About = (): ReactElement => {
    return (
        <section className={`relative py-32`} id={`About`}>
            <div className={`mx-auto w-[80%] xl:w-7/12`}>
                <h2 className={`mb-20 text-center text-5xl text-6xl font-semibold uppercase tracking-wider xl:text-7xl`}>
                    <span className={`border-b-4 border-violet-500`}>About Me</span>
                </h2>
                <div className={`sxl:gap-32 flex flex-col gap-24 xl:flex-row`}>
                    <div className={`order-2 mx-auto w-4/6 grow xl:w-3/4`}>
                        <div className={`flex flex-col gap-6 leading-7`}>
                            <p>
                                I consider myself an incurable enthusiast for everything related to technology and the web,
                                an avid gamer and a passionate{' '}
                                <span className={`font-bold text-amber-700`}>web developer</span>.
                            </p>
                            <p>
                                My passion for programming and the web has been going on ever since the boom of online forums
                                and led me to be involved in{' '}
                                <span className={`font-bold text-violet-500`}>building websites</span> that could satisfy
                                more complex needs, developing my skills with perseverance in the challenge and the desire to
                                learn new technologies and approaches.
                            </p>
                            <p>
                                When I could turn my passion into a job I decided to focus on the creation and maintenance of{' '}
                                <u>company-oriented CRMs</u>, taking care of their planning and development
                                <br />
                                ... without losing sight of the rest of the &quot;<i>magic</i>&quot; that this world has to
                                offer.
                            </p>
                        </div>
                        <div className={`mt-6`}>My Skills</div>
                    </div>
                    <div className={`order-1 grow xl:w-1/4`}>
                        <img
                            className={`mx-auto aspect-square h-1/2 w-1/2 rotate-3 rounded-2xl object-cover shadow xl:hidden`}
                            src={`/assets/aboutme.jpg`}
                            alt={`Luca Pattocchio`}
                        />
                        <img
                            className={`hidden aspect-square rotate-3 rounded rounded-2xl object-cover object-cover shadow xl:block`}
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
