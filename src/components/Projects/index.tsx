import { ReactElement } from 'react'
import projects from '@/config/projects'
import stack from '@/config/stack'

/**
 * About
 * @constructor
 */
const Projects = (): ReactElement => {
    return (
        <section className={`relative py-32`} id={`About`}>
            <div className={`mx-auto w-[80%] xl:w-7/12`}>
                <h2 className={`mb-16 text-center text-4xl font-semibold uppercase tracking-wider xl:text-7xl`}>
                    <span className={`border-b-4 border-violet-500`}>Projects</span>
                </h2>
                <div className={`flex flex-col gap-20`}>
                    <div className={`mx-auto w-5/6 grow md:w-4/6 xl:w-3/4`}>
                        <div className={`flex flex-col gap-6 text-center leading-7`}>
                            This is a list of some of the projects I&apos;ve worked on in the past few years.
                        </div>
                    </div>
                    <div className={`mx-auto grid w-3/4 grid-cols-1 gap-6 md:grid-cols-2`}>
                        {projects.map((project, index) => (
                            <a
                                key={index}
                                className={`relative mb-4 w-full rounded-xl border transition duration-300 ease-in-out hover:scale-110`}
                                href={project.url}
                                aria-label={`Go to ${project.title} website`}
                                target={`_blank`}
                                rel={`noopener noreferrer`}
                            >
                                <div className={`h-100 relative`}>
                                    <div className={`relative flex flex-col items-start rounded p-4`}>
                                        <div className={`my-4`}>
                                            <img
                                                className={`mr-4 h-12 w-12`}
                                                src={project.image}
                                                alt={`${project.title} Logo`}
                                            />
                                        </div>
                                        <h4 className={`tracking-tigh text-xl font-bold`}>{project.title}</h4>
                                        <div className={`pt-4 leading-6 `}>{project.description}</div>
                                        <div className={`flex flex-wrap pt-4 md:flex-row`}>
                                            {project.technologies.map((technology, index) => {
                                                // Retrieve technology info from stack
                                                const technologyInfo = stack.find((item) => item.label === technology)

                                                return (
                                                    <div
                                                        key={index}
                                                        className={`m-1 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-violet-500 hover:bg-violet-500 hover:text-white`}
                                                    >
                                                        {technologyInfo && (
                                                            <img
                                                                className={`inline-block h-5 w-5`}
                                                                src={`/assets/logos/technologies/${technologyInfo.icon}.svg`}
                                                                alt={`${technologyInfo.label} logo`}
                                                            />
                                                        )}
                                                        <span className={`ml-1 text-xl font-semibold`}>
                                                            {technologyInfo?.label || technology}
                                                        </span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
